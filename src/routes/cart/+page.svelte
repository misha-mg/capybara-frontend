<script>
  import { productList } from "$lib/store.js";
  import BreadCrumbs from "../../elements/BreadCrumbs.svelte";
  import SingleItem from "../../elements/SingleItem.svelte";

  $: console.log($productList);

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
      <h1>КАРТ</h1>
    </div>
    <div class="content">
      {#each $productList as item, i}
        {#if item.cart}
          <SingleItem {...item} />
        {/if}
      {/each}
    </div>
  </div>
</section>
