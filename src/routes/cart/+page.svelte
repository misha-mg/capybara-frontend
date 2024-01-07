<script>
  import { productList } from "$lib/store.js";
  import SingleItem from "../../elements/SingleItem.svelte";

  // let lickedLength = 0;
  // productList.subscribe((value) => {
  //   lickedLength = 0;
  //   value.forEach((item) => (item.isHeart ? (lickedLength += 1) : ""));
  // });

  $: console.log($productList);
</script>

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
