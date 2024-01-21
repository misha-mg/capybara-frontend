<script>
  import Button from "./Button.svelte";
  export let name = "";
  export let price = "";
  export let isHeart = false;
  export let images = "";
  export let id = "";
  export let item = {};
  import { cart, liked } from "$lib/store.js";
  import { fly } from "svelte/transition";
  import { toggleStore } from "$lib/utils";
  // import { toggleCart, toggleHeart } from "$lib/utils";

  let cartAction = "add";
  let likedAction = "add";

  $: cartAction = $cart.filter((item) => item._id == id).length
    ? "remove"
    : "add";
  $: likedAction = $liked.filter((item) => item._id == id).length
    ? "remove"
    : "add";

  function toggleSizet(size) {
    item.activeSize = size;
  }
  function addToCart() {
    toggleStore(item, cart, cartAction);
    sizeSelect = false;
  }
  function bagButton() {
    if (cartAction == "add") {
      sizeSelect = true;
    } else if (cartAction == "remove") {
      toggleStore(item, cart, cartAction);
      item.activeSize = null;
    }
  }

  let sizeSelect = false;

  function closeSizeSelect() {
    sizeSelect = false;
    item.activeSize = null;
  }
</script>

<div class="item-wrapper" id="single-item" transition:fly>
  <a href="/items/{id}">
    <div class="item" class:cart>
      <div class="item__image">
        <img src={images[0]} alt="" />
      </div>
      <div class="item__info">
        <span class="name">{name}</span>
        <span class="price">{price} ₴</span>
      </div>
      <div class="item__action">
        <Button
          customClass="bag {cartAction == 'remove' ? 'cart' : ''}"
          customFunction={bagButton}
        />
        <Button
          customClass="like {likedAction == 'remove' ? 'active' : ''}"
          customFunction={() => toggleStore(item, liked, likedAction)}
        ></Button>
      </div>
    </div>
  </a>

  <div class="select-wrapper" class:show={sizeSelect}>
    <span class="close" on:click={closeSizeSelect}></span>
    <p class="title">Оберіть розмір</p>

    <div class="sizes">
      {#each item?.size as size}
        <Button
          text={size}
          customFunction={() => toggleSizet(size)}
          customClass={item?.activeSize == size ? "active" : ""}
        />
      {/each}
    </div>
    <Button
      customClass="bag {cartAction == 'remove' ? 'cart' : ''}"
      customFunction={addToCart}
      text="ДОДАТИ"
    ></Button>
  </div>
</div>
