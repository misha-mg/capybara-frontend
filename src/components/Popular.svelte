<script>
  import { onMount } from "svelte";
  import Button from "../elements/Button.svelte";
  import SingleItem from "../elements/SingleItem.svelte";
  import { getAllProducts } from "$lib/utils";
  import Spinner from "../elements/Spinner.svelte";

  let loading = true;
  let items = {};
  onMount(async () => {
    items = await getAllProducts();
    loading = false;
    loading = loading;
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
        {#each items as item, i}
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
