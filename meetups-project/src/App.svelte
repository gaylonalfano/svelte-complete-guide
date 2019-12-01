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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Soviet_POWs.jpg/1200px-Soviet_POWs.jpg",
      address: "111 Huai Hai Rd, 200201 Shanghai",
      contactEmail: "swim@test.com",
      isFavorite: false
    }
  ];

  let editMode = false;

  function addMeetup(event) {
    const newMeetup = {
      id: Math.random().toString(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      imageURL: event.detail.imageURL,
      address: event.detail.address,
      contactEmail: event.detail.email
    };
    meetups = [newMeetup, ...meetups];
    // Close the form after submitting changes
    editMode = false;
  }

  function cancelEdit() {
    editMode = false;
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

  $: console.log(editMode);
  $: editMode, console.log(`editMode is now: ${editMode}`);
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
    <Button on:click={() => (editMode = true)}>New Meetup</Button>
  </div>
  {#if editMode}
    <EditMeetup on:saveMeetup={addMeetup} on:cancelEdit={cancelEdit} />
  {/if}
  <MeetupGrid {meetups} on:toggleFavorite={toggleFavorite} />
</main>
