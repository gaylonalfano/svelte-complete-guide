<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Gaylon";
  let age = 30;

  // let uppercaseName;  NOT required!

  $: uppercaseName = name.toUpperCase();

  $: console.log(name);

  $: if (name === "Gaylon Alfano") {
    age = 38;
  }

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Gaylon Alfano";
  }

  function nameInput(event) {
    const enteredValue = event.target.value;
    name = enteredValue;
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click={incrementAge}>Change Age</button>
<!-- <button on:click={changeName}>Change Name</button> -->
<!-- <input type="text" value={name} on:input={nameInput} /> -->
<input type="text" bind:value={name} />
<ContactCard />
