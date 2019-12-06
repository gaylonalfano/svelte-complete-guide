<script>
  import CustomInput from "./CustomInput.svelte";
  import Toggle from "./Toggle.svelte";

  let val = "Gaylon";
  let selectedOption = 1;
  let price = 0;
  let agreed;
  let favColor = ["green"];
  let singleFavColor = "red";
  let usernameInput;
  let someDiv;
  let customInput;

  $: console.log(val);
  $: console.log(selectedOption);
  $: console.log(price);
  $: console.log(agreed);
  $: console.log(favColor);
  $: console.log(singleFavColor);
  $: console.log(customInput);

  function setValue(event) {
    val = event.target.value;
  }

  function saveData() {
    // Vanilla JS approach
    // console.log(document.querySelector("#username").value);

    // Svelte's bind:this syntax
    console.log(usernameInput.value);
    // Log an inspectable JS object using console.dir()
    console.dir(usernameInput);
    // Doing this same but with a div element
    console.dir(someDiv);
    // Call the empty() function to reset the 'val' value inside CustomInput
    customInput.empty();
  }
</script>

<!-- Standard two-way binding -->
<!-- <input type="text" value={val} on:input={setValue} /> -->

<!-- Shortcut using bind: directive -->
<!-- <input type="text" bind:value={val} /> -->

<!-- Trying to bind to val property of CustomInput -->
<CustomInput bind:val bind:this={customInput} />
<!-- Binding chosenOption to selectedOption -->
<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />

<label>
  <input type="checkbox" bind:checked={agreed} />
  Agree to terms?
</label>

<!-- Binding to groups (radio buttons and checkboxes) -->
<h1>What's your favorite color?</h1>
<label>
  <input type="checkbox" name="color" value="red" bind:group={favColor} />
  Red
</label>
<label>
  <input type="checkbox" name="color" value="green" bind:group={favColor} />
  Green
</label>
<label>
  <input type="checkbox" name="color" value="blue" bind:group={favColor} />
  Blue
</label>

<!-- Binding to dropdown selections -->
<select bind:value={singleFavColor}>
  <option value="green">Green</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>

<!-- Binding to Element References -->
<hr />

<input type="text" id="username" bind:this={usernameInput} />
<button on:click={saveData}>Save</button>

<!-- Can use with other HTML elements (not just input) -->
<div bind:this={someDiv} />
