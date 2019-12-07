<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../global-components/TextInput.svelte";
  import Button from "../global-components/Button.svelte";
  import Modal from "../global-components/Modal.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageURL = "";

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
      valid={true}
      validityMessage="Please enter a valid title."
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      value={address}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="email"
      label="Email"
      type="email"
      value={email}
      on:input={event => (email = event.target.value)} />
    <TextInput
      id="imageURL"
      label="Image URL"
      value={imageURL}
      on:input={event => (imageURL = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      rows="3"
      value={description}
      on:input={event => (description = event.target.value)} />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancelEdit}>Cancel</Button>
    <Button type="button" on:click={submitForm}>Save</Button>
  </div>
</Modal>
