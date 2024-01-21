<script>
  import { onMount } from "svelte";

  import { getAllProducts } from "$lib/utils";

  import { products } from "$lib/store.js";
  import Spinner from "../../elements/Spinner.svelte";
  import SingleItem from "../../elements/SingleItem.svelte";
  import Button from "../../elements/Button.svelte";

  let loading = true;
  onMount(async () => {
    if ($products.length === 0) {
      loading = true;
      let items = await getAllProducts();
      products.update((arr) => {
        return [...arr, ...items];
      });
      loading = false;
    } else {
      loading = false;
    }
  });
</script>

<section id="popular">
  <div class="container">
    <div class="popular__heading">
      <h2>Актуальні айтеми</h2>
    </div>
    {#if loading}
      <Spinner />
    {:else}
      <div class="content">
        {#each $products as item, i}
          {#if i <= 3}
            <SingleItem {...item} id={item._id} {item} />
          {/if}
        {/each}
      </div>
      <div class="footer">
        <Button text="Показати більше" href="/items" />
      </div>
    {/if}
  </div>
</section>
