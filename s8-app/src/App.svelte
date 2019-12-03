<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";

  let val = "Gaylon";
  let selectedOption = 1;
  let price = 0;

  $: console.log(val);
  $: console.log(selectedOption);
  $: console.log(price);

  function setValue(event) {
    val = event.target.value;
  }
</script>

<!-- Standard two-way binding -->
<!-- <input type="text" value={val} on:input={setValue} /> -->

<!-- Shortcut using bind: directive -->
<!-- <input type="text" bind:value={val} /> -->

<!-- Trying to bind to val property of CustomInput -->
<CustomInput bind:val />
<!-- Binding chosenOption to selectedOption -->
<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />
