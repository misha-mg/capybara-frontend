<script>
  import { cart } from "$lib/store.js";
  import BreadCrumbs from "../../elements/BreadCrumbs.svelte";
  import SingleCartItem from "../../elements/SingleCartItem.svelte";
  import SingleItem from "../../elements/SingleItem.svelte";

  $: console.log($cart);

  let crumbsData = [
    {
      path: "/",
      name: "Головна",
    },
    {
      path: "",
      name: "Кошик",
    },
  ];
</script>

<BreadCrumbs {crumbsData} />
<section id="cart">
  <div class="container">
    <div class="heading">
      {#if $cart.length > 0}
        <h1>ВАШ КОШИК <span> ({$cart.length})</span></h1>
      {:else}
        <h1>ВАШ КОШИК ПОКИ ПУСТИЙ</h1>
      {/if}
    </div>
    {#if $cart.length > 0}
      <div class="content-heading">
        <span class="product">Продукт</span>
        <span class="quantity">Кількість</span>
        <span class="total">Загальна вартість</span>
        <span class="remove-place"></span>
      </div>
    {/if}

    <div class="content">
      {#each $cart as item, i}
        <!-- <SingleItem {...item} id={item._id} {item} /> -->
        <SingleCartItem {...item} id={item._id} />
      {/each}
    </div>
  </div>
</section>
