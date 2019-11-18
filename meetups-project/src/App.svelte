<script>
  import Header from "./global-components/Header.svelte";
  import MeetupItem from "./meetups/MeetupItem.svelte";

  const meetups = [
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
</script>

<style>
  #meetups {
    margin-top: 5rem;
  }
</style>

<Header />
