<script>
  import Button from "./Button.svelte";
  export let name = "";
  export let price = "";
  export let isHeart = false;
  export let img = "";
  export let id = "";
  export let cart = "";
  import { productList } from "$lib/store.js";
  import { fly } from "svelte/transition";
  import { toggleCart, toggleHeart } from "$lib/utils";
  import Popular from "../components/Popular.svelte";
</script>

<div class="item-wrapper" id="single-item" transition:fly>
  <a href="/items/{id}">
    <div class="item" class:cart>
      <div class="item__image">
        <img src={img} alt="" />
      </div>
      <div class="item__info">
        <span class="name">{name}</span>
        <span class="price">{price} ₴</span>
      </div>
      <div class="item__action">
        <Button
          customClass="bag {cart ? 'cart' : ''}"
          customFunction={() => toggleCart(id, productList)}
        />
        <Button
          customClass="like {isHeart ? 'active' : ''}"
          customFunction={() => toggleHeart(id, productList)}
        ></Button>
      </div>
    </div>
  </a>
</div>
