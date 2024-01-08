<script>
  import Button from "../../../elements/Button.svelte";
  import { toggleCart, toggleHeart } from "$lib/utils";
  import { productList } from "$lib/store.js";
  import Popular from "../../../components/Popular.svelte";
  export let name = "";
  export let price = "";
  export let isHeart = false;
  export let img = "";
  export let id = "";
  export let cart = false;
</script>

<section id="item-page">
  <div class="container">
    <div class="item-page__images">
      <img src="/person-slider.png" alt="" />
    </div>
    <div class="item-page__info">
      <h4>Светер "SHARK"</h4>
      <span class="item-page__price">1250 ₴</span>
      <div class="item-page__size">
        <p>Оберіть розмір</p>
        <div>
          <Button text="M" />
          <Button text="L" />
          <Button text="XL" />
        </div>
      </div>
      <div class="item-page__color">
        <p>Оберіть колір</p>
        <div>
          <span class="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="item-page__action">
        <Button
          customClass="bag {cart ? 'cart' : ''}"
          customFunction={() => toggleCart(id, productList)}
        />
        <Button
          customClass="like {isHeart ? 'active' : ''}"
          customFunction={() => toggleHeart(id, productList)}
        >
          {#if cart}
            ПРИБРАТИ
          {:else}
            <span></span>
          {/if}
        </Button>
      </div>
      <div class="item-page__facts">
        <div>
          <h5>Little title</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            sapiente.
          </p>
        </div>
        <div>
          <h5>Little title</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<Popular />
