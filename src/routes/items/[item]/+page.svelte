<script>
  import Swiper from "$lib/swiper";
  import { getOneProduct, toggleStore } from "$lib/utils";
  import { afterUpdate, onMount } from "svelte";
  import "swiper/css";
  import Popular from "../../../components/Popular.svelte";
  import BreadCrumbs from "../../../elements/BreadCrumbs.svelte";
  import Button from "../../../elements/Button.svelte";
  import Spinner from "../../../elements/Spinner.svelte";
  import { cart, liked } from "$lib/store";
  import { page } from "$app/stores";

  let itemId = $page.params.item;
  var swiper;
  let loading = true;
  let item = {};
  onMount(async () => {
    item = await getOneProduct(itemId);
    loading = false;
    loading = loading;
  });

  afterUpdate(() => {
    swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

  let cartAction = "add";
  let likedAction = "add";

  $: cartAction = $cart.filter((product) => product._id == item._id).length
    ? "remove"
    : "add";
  $: likedAction = $liked.filter((product) => product._id == item._id).length
    ? "remove"
    : "add";

  let crumbsData = [];
  $: (() => {
    crumbsData = [
      {
        path: "/",
        name: "Головна",
      },
      {
        path: "/items",
        name: "Товари",
      },
      {
        path: "",
        name: item?.name,
      },
    ];
  })();
</script>

<BreadCrumbs {crumbsData} />
<section id="item-page">
  <div class="container">
    {#if loading}
      <Spinner />
    {:else}
      <div class="item-page__images">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            {#each item?.images as img}
              <img src={img} alt="img" class="swiper-slide" />
              <img src={img} alt="img" class="swiper-slide" />
            {/each}
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="swiper-button-next">
          <img src="/arrow.svg" alt="" />
        </div>
        <div class="swiper-button-prev">
          <img src="/arrow.svg" alt="" />
        </div>
      </div>
      <div class="item-page__info">
        <h4>{item?.name}</h4>
        <span class="item-page__price">{item?.price} ₴</span>
        <div class="item-page__size">
          <p>Оберіть розмір</p>
          <div>
            {#each item?.size as size}
              <Button text={size} />
            {/each}
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
            customClass="bag {cartAction == 'remove' ? 'cart' : ''}"
            customFunction={() => toggleStore(item, cart, cartAction)}
          />
          <Button
            customClass="like {likedAction == 'remove' ? 'active' : ''}"
            customFunction={() => toggleStore(item, liked, likedAction)}
          ></Button>
          <!-- <Button
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
        </Button> -->
        </div>
        <div class="item-page__facts">
          <div>
            <h5>Склад</h5>
            <p>
              Одежа вироблена з чистої бавовони, використовуються природні
              фарбники та натуральні елементи
            </p>
          </div>
          <div>
            <h5>Доставка</h5>
            <p>
              Час очікування 14-25 днів через знаходження постачальника за
              кордоном. Іноді стаються затримки через погіршення ситуації та
              митниці
            </p>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>

<Popular />
