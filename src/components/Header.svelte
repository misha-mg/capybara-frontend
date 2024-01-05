<script>
  import { page } from "$app/stores";
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
      <div class="header__likes"><a href="#">ВПОДОБАЙКИ</a></div>
      <div class="header__bag"><a href="#">КОШИК</a></div>
    </div>
  </div>
</section>
