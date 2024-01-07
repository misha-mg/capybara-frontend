<script>
  import { page } from "$app/stores";
  import { productList } from "$lib/store.js";
  $: currentRoute = $page.url;

  let counter = {
    likes: 0,
    cart: 0,
  };

  productList.subscribe((value) => {
    counter = { likes: 0, cart: 0 };
    value.forEach((item) => {
      item.isHeart ? (counter.likes += 1) : null;
      item.cart ? (counter.cart += 1) : null;
    });
  });
</script>

<section id="header">
  <div class="container">
    <div class="header__left">
      <div class="logo">
        <a href="/">
          <img src="/capypara-logo.png" alt="" />
        </a>
      </div>
      <ul class="menu">
        <li>
          <a href="/" class:active={currentRoute.pathname == "/"}
            >Головна <span></span></a
          >
        </li>
        <li>
          <a href="/items" class:active={currentRoute.pathname == "/items"}
            >Товари <span></span></a
          >
        </li>
        <li>
          <a
            href="/categories"
            class:active={currentRoute.pathname == "/categories"}
            >Категорії <span></span></a
          >
        </li>
      </ul>
    </div>
    <div class="header__right">
      <div class="header__likes">
        <a href="/likes" class:active={currentRoute.pathname == "/likes"}>
          ВПОДОБАЙКИ
          {#if counter.likes > 0}
            <span>{counter.likes}</span>
          {/if}
        </a>
      </div>
      <div class="header__bag">
        <a href="/cart" class:active={currentRoute.pathname == "/cart"}>
          КОШИК
          {#if counter.cart > 0}
            <span>{counter.cart}</span>
          {/if}
        </a>
      </div>
    </div>
  </div>
</section>
