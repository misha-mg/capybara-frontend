<script>
  import Button from "../elements/Button.svelte";
  import SingleItem from "../elements/SingleItem.svelte";

  import { productList } from "$lib/store.js";
</script>

<section id="popular">
  <div class="container">
    <div class="popular__heading">
      <h2>Актуальні айтеми</h2>
    </div>
    <div class="content">
      {#each $productList as item, i}
        {#if i <= 3}
          <SingleItem {...item} />
        {/if}
      {/each}
    </div>
    <div class="footer">
      <Button text="Показати більше" href="/items" />
    </div>
  </div>
</section>
