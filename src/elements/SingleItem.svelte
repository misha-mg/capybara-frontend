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
          customFunction={() => toggleStore(item, cart, cartAction)}
        />
        <Button
          customClass="like {likedAction == 'remove' ? 'active' : ''}"
          customFunction={() => toggleStore(item, liked, likedAction)}
        ></Button>
      </div>
    </div>
  </a>
</div>
