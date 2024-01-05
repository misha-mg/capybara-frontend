<script>
  import Button from "./Button.svelte";
  export let name = "";
  export let price = "";
  export let isHeart = "";
  export let img = [];
</script>

<div class="item-wrapper" id="single-item">
  <div class="item">
    <div class="item__image">
      <img src="/item-image.jpg" alt="" />
    </div>
    <div class="item__info">
      <span class="name">{name}</span>
      <span class="price">{price} ₴</span>
    </div>
    <div class="item__action">
      <Button text="до кошика" />
      <Button customClass="like">
        <img slot="content" src="/heart.svg" />
      </Button>
    </div>
  </div>
</div>
