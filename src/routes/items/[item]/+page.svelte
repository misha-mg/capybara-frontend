<script>
  import { productList } from "$lib/store.js";
  import { toggleCart, toggleHeart } from "$lib/utils";
  import Popular from "../../../components/Popular.svelte";
  import Button from "../../../elements/Button.svelte";
  import { page } from "$app/stores";

  let id = $page.params.item;

  let item = {};
  $: {
    item = $productList.filter((item) => item.id == id)[0];
  }
</script>

<section id="item-page">
  <div class="container">
    <div class="item-page__images">
      <img src={item?.img} alt="img" />
    </div>
    <div class="item-page__info">
      <h4>{item?.name}</h4>
      <span class="item-page__price">{item?.price} ₴</span>
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
          customClass="bag {item?.cart ? 'cart' : ''}"
          customFunction={() => toggleCart(item?.id, productList)}
        />
        <Button
          customClass="like {item?.isHeart ? 'active' : ''}"
          customFunction={() => toggleHeart(item?.id, productList)}
        >
          {#if item?.cart}
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
