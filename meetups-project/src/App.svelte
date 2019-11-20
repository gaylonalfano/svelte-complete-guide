<script>
  import Header from "./global-components/Header.svelte";
  import MeetupGrid from "./meetups/MeetupGrid.svelte";
  import TextInput from "./global-components/TextInput.svelte";
  import Button from "./global-components/Button.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageURL = "";

  let meetups = [
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in 2 hours",
      description:
        "In this meeting, we will have some experts teach you about Svelte.",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pensive_Bodhisattva_%28National_Treasure_No._78%29_01_%28cropped%29.jpg/800px-Pensive_Bodhisattva_%28National_Treasure_No._78%29_01_%28cropped%29.jpg",
      address: "27th Nerd Road, 32523 New York",
      contactEmail: "code@test.com"
    },
    {
      id: "m2",
      title: "Swim together",
      subtitle: "Let's go for some swimming",
      description: "We'll work on some basic freestyle stroke fundamentals",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Barnea_%28YPM_IZ_101781%29.jpeg",
      address: "111 Huai Hai Rd, 200201 Shanghai",
      contactEmail: "swim@test.com"
    }
  ];

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title: title,
      subtitle: subtitle,
      description: description,
      imageURL: imageURL,
      address: address,
      contactEmail: email
    };
    meetups = [newMeetup, ...meetups];
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    min-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      label="Title"
      type="text"
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      type="text"
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      type="text"
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
      type="text"
      value={imageURL}
      on:input={event => (imageURL = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      rows="3"
      value={description}
      on:input={event => (description = event.target.value)} />
    <Button type="submit" caption="Save" />
    <!-- <button type="submit">Save</button> -->
  </form>
  <MeetupGrid {meetups} />
</main>
