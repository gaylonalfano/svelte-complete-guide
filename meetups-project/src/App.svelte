<script>
  import Header from "./global-components/Header.svelte";
  import MeetupGrid from "./meetups/MeetupGrid.svelte";
  import TextInput from "./global-components/TextInput.svelte";
  import Button from "./global-components/Button.svelte";
  import EditMeetup from "./meetups/EditMeetup.svelte";

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
      contactEmail: "code@test.com",
      isFavorite: false
    },
    {
      id: "m2",
      title: "Swim together",
      subtitle: "Let's go for some swimming",
      description: "We'll work on some basic freestyle stroke fundamentals",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Barnea_%28YPM_IZ_101781%29.jpeg",
      address: "111 Huai Hai Rd, 200201 Shanghai",
      contactEmail: "swim@test.com",
      isFavorite: false
    }
  ];

  let editMode = false;

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

  function toggleFavorite(event) {
    // Capture the meetup id that's been clicked
    const id = event.detail;
    // Find the existing meetup with that id
    const updatedMeetup = { ...meetups.find(meetup => meetup.id === id) };
    // Change that meetup's isFavorite value to opposite of original value
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    // Find the index of meetup object we want to update so we can create a new array
    const meetupIndex = meetups.findIndex(meetup => meetup.id === id);
    // Make a full copy of existing meetups array
    const updatedMeetups = [...meetups];
    // Use meetupIndex to locate and update our updatedMeetups with new updatedMeetup object
    updatedMeetups[meetupIndex] = updatedMeetup;
    // Overwrite existing meetups array with our new updatedMeetups array to update DOM
    meetups = updatedMeetups;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  <div class="meetup-controls">
    <Button caption="New Meetup" on:click={() => (editMode = true)} />
  </div>
  {#if editMode}
    <EditMeetup />
  {/if}
  <MeetupGrid {meetups} on:toggleFavorite={toggleFavorite} />
</main>
