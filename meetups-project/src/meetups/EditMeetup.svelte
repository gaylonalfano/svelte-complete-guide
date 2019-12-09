<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../global-components/TextInput.svelte";
  import Button from "../global-components/Button.svelte";
  import Modal from "../global-components/Modal.svelte";
  import { isEmpty, emailIsValid } from "../helpers/validation.js";

  let title = "";
  let titleValid = false;
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageURL = "";

  // If title isEmpty then !True => False
  $: console.log(`title is: ${title}`);
  $: console.log(`titleValid is: ${titleValid}`);
  $: console.log(`isEmpty is: ${isEmpty(title)}`);
  // // If title not isEmpty then !False => True
  $: titleValid = !isEmpty(title);

  // // Used bind:this to the TextInput component.
  // // Now want to log the valid value for debugging.
  $: console.log(textInputComponent);

  const dispatch = createEventDispatcher();

  function submitForm() {
    dispatch("saveMeetup", {
      title: title,
      subtitle: subtitle,
      address: address,
      email: email,
      description: description,
      imageURL: imageURL
    });
  }

  function cancelEdit() {
    dispatch("cancelEdit");
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit Meetup Details" on:cancelEdit>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      validityMessage="Please enter a valid title."
      valid={titleValid}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      validityMessage="Please enter a valid subtitle."
      valid={!isEmpty(subtitle)}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      value={address}
      validityMessage="Please enter a valid address."
      valid={!isEmpty(address)}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="email"
      label="Email"
      type="email"
      value={email}
      validityMessage="Please enter a valid email address."
      valid={emailIsValid(email)}
      on:input={event => (email = event.target.value)} />
    <TextInput
      id="imageURL"
      label="Image URL"
      value={imageURL}
      validityMessage="Please enter a valid image URL."
      valid={!isEmpty(imageURL)}
      on:input={event => (imageURL = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      rows="3"
      value={description}
      validityMessage="Please enter a valid description."
      valid={!isEmpty(description)}
      on:input={event => (description = event.target.value)} />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancelEdit}>Cancel</Button>
    <Button type="button" on:click={submitForm}>Save</Button>
  </div>
</Modal>
