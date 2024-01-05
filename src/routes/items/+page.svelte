<script>
  import SingleItem from "../../elements/SingleItem.svelte";
  import { productList } from "$lib/store.js";
</script>

<section id="items">
  <div class="container">
    <div class="heading">
      <h1>АКТУАЛЬНІ ТОВАРИ</h1>
    </div>
    <div class="content">
      {#each $productList as item}
        <SingleItem {...item} />
      {/each}
    </div>
  </div>
</section>
