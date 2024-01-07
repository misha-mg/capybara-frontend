<script>
  import Button from "./Button.svelte";
  export let name = "";
  export let price = "";
  export let isHeart = true;
  export let img = "";
  export let id = "";
  export let cart = "";
  import { productList } from "$lib/store.js";
  import { fly } from "svelte/transition";

  function heartStatus(id) {
    productList.update((arr) => {
      const updatedObjects = arr.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isHeart: !obj.isHeart };
        }
        return obj;
      });
      return updatedObjects;
    });
  }

  function toggleCart(id) {
    productList.update((arr) => {
      const updatedObjects = arr.map((obj) => {
        if (obj.id === id) {
          return { ...obj, cart: !obj.cart };
        }
        return obj;
      });
      return updatedObjects;
    });
  }
</script>

<div class="item-wrapper" id="single-item" transition:fly>
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
        customFunction={() => toggleCart(id)}
      />
      <Button
        customClass="like {isHeart ? 'active' : ''}"
        customFunction={() => heartStatus(id)}
      >
        {#if cart}
          ПРИБРАТИ
        {:else}
          <span></span>
        {/if}
      </Button>
    </div>
  </div>
</div>
