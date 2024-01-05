<script>
  import Button from "./Button.svelte";
  export let name = "";
  export let price = "";
  export let isHeart = true;
  export let img = "";
  export let id = "";
  import { productList } from "$lib/store.js";
  import { fly } from "svelte/transition";

  export function updateObject(id) {
    productList.update((objects) => {
      const updatedObjects = objects.map((obj) => {
        if (obj.id === id) {
          return { ...obj, isHeart: !obj.isHeart };
        }
        return obj;
      });
      return updatedObjects;
    });
  }
</script>

<div class="item-wrapper" id="single-item" transition:fly>
  <div class="item">
    <div class="item__image">
      <img src={img} alt="" />
    </div>
    <div class="item__info">
      <span class="name">{name}</span>
      <span class="price">{price} ₴</span>
    </div>
    <div class="item__action">
      <Button customClass="bag" />
      <Button
        customClass="like {isHeart ? 'active' : ''}"
        customFunction={() => updateObject(id)}
      >
        <span></span>
      </Button>
    </div>
  </div>
</div>
