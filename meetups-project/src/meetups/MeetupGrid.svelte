<script>
  import MeetupItem from "./MeetupItem.svelte";

  export let meetups;
</script>

<section id="meetups">

  {#each meetups as meetup}
    <MeetupItem
      title={meetup.title}
      subtitle={meetup.subtitle}
      description={meetup.description}
      imageURL={meetup.imageURL}
      email={meetup.contactEmail}
      address={meetup.address} />
  {/each}

</section>
