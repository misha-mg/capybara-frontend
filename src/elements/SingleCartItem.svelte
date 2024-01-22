<script>
  import { cart, products } from "$lib/store";
  import { fly } from "svelte/transition";
  export let images = "";
  export let name = "";
  export let price = "";
  export let color = "";

  export let id = "";
  export let activeSize = "";

  function handleRemove() {
    cart.update((arr) => {
      return arr.filter((item) => item._id !== id);
    });

    products.update((arr) => {
      return arr.filter((item) => {
        item._id == id ? (item.activeSize = null) : null;
      });
    });
  }
  let count = 1;

  function quantityChange(action) {
    if (count >= 1) {
      switch (action) {
        case "plus":
          count += 1;
          break;
        case "minus":
          if (count > 1) {
            count -= 1;
          }
          break;
        default:
          console.log(`No action type ${action}`);
      }
    }
  }
</script>

<section id="cart-item" transition:fly>
  <div class="cart-item__main-info">
    <div class="cart-item__img">
      <img src={images[0]} alt="" />
    </div>
    <div class="cart-item__info">
      <h4>{name}</h4>
      <span class="price"> {price} ₴</span>
      <div class="addition">
        <div class="color">
          <span class="title">Колір:</span>
          <span>{color}</span>
        </div>
        <div class="size">
          <span class="title">Розмір:</span>
          <span>{activeSize}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="cart-item__count">
    <span class="minus" on:click={() => quantityChange("minus")}></span>

    <p>{count}</p>
    <span class="plus" on:click={() => quantityChange("plus")}></span>
  </div>
  <div class="cart-item__total">
    <span>{price * count} ₴</span>
  </div>
  <div class="cart-item__remove">
    <span on:click={handleRemove}></span>
  </div>
</section>
