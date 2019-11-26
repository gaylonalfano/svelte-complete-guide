<script>
  import { tick } from "svelte";
  import Product from "./Product.svelte";
  import Modal from "./Modal.svelte";

  let products = [
    {
      id: "p1",
      title: "A Book",
      price: 9.99
    },
    {
      id: "p2",
      title: "A Watch",
      price: 45.99
    }
  ];

  let text = "This is some dummy text for the tick example!";
  let showModal = false;
  let closeable = false;

  function addToCart(event) {
    console.log(event.detail);
  }

  function deleteProduct(event) {
    console.log(event.detail);
  }

  function transform(event) {
    if (event.which !== 9) {
      // Stop execution if Tab not pressed
      return;
    }
    // Prevent default behavior for Tab button
    event.preventDefault();

    // Extract the selection range
    const selectionStart = event.target.selectionStart;
    const selectionEnd = event.target.selectionEnd;
    const value = event.target.value;

    // Capitalize the selected text w/ Tab and update DOM
    text =
      value.slice(0, selectionStart) +
      value.slice(selectionStart, selectionEnd).toUpperCase() +
      value.slice(selectionEnd);

    // Run tick() to return a promise that resolves once pending
    // state changes have been applied to DOM
    tick().then(() => {
      // Reset the selection for our event target (i.e., textarea)
      event.target.selectionStart = selectionStart;
      event.target.selectionEnd = selectionEnd;
    });
  }
</script>

{#each products as product}
  <Product {...product} on:add-to-cart={addToCart} on:delete={deleteProduct} />
{/each}

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
  <Modal
    on:cancel={() => (showModal = false)}
    on:close={() => (showModal = false)}
    let:didAgree={closeable}>
    <h1 slot="header">Hello!</h1>
    <p>This works! I should be placed where slot is at!</p>
    <button
      slot="footer"
      on:click={() => (showModal = false)}
      disabled={!closeable}>
      Confirm
    </button>
  </Modal>
{/if}

<textarea rows="5" value={text} on:keydown={transform} />
