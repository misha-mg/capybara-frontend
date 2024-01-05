<script>
  import { productList } from "$lib/store.js";
  import SingleItem from "../../elements/SingleItem.svelte";

  let lickedLength = 0;
  productList.subscribe((value) => {
    lickedLength = 0;
    value.forEach((item) => (item.isHeart ? (lickedLength += 1) : ""));
  });

  $: console.log(lickedLength);
</script>

<section id="likes">
  <div class="container">
    <div class="heading">
      {#if lickedLength}
        <h1>ВАМ ЩОСЬ СПОДОБАЛОСЬ!</h1>
      {:else}
        <h1>ВПОДОБАЙОК ПОКИ НЕМАЄ</h1>
      {/if}
    </div>
    <div class="content">
      {#each $productList as item, i}
        {#if item.isHeart}
          <SingleItem {...item} />
        {/if}
      {/each}
    </div>
  </div>
</section>
