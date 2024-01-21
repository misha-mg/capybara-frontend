<script>
  import { page } from "$app/stores";
  import { cart, liked } from "$lib/store.js";
  $: currentRoute = $page.url;
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
          {#if $liked.length > 0}
            <span>{$liked.length}</span>
          {/if}
        </a>
      </div>
      <div class="header__bag">
        <a href="/cart" class:active={currentRoute.pathname == "/cart"}>
          КОШИК
          {#if $cart.length > 0}
            <span>{$cart.length}</span>
          {/if}
        </a>
      </div>
    </div>
  </div>
</section>
