<script>
  import SingleItem from "../../elements/SingleItem.svelte";
  import { products } from "$lib/store.js";
  import BreadCrumbs from "../../elements/BreadCrumbs.svelte";
  import { getAllProducts } from "$lib/utils";
  import { onMount } from "svelte";
  import Spinner from "../../elements/Spinner.svelte";

  let crumbsData = [
    {
      path: "/",
      name: "Головна",
    },
    {
      path: "",
      name: "Товари",
    },
  ];

  let loading = false;

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

<BreadCrumbs {crumbsData} />

<section id="items">
  <div class="container">
    <div class="heading">
      <h1>АКТУАЛЬНІ ТОВАРИ</h1>
    </div>
    {#if loading}
      <Spinner />
    {:else}
      <div class="content">
        {#each $products as item}
          <SingleItem {...item} id={item._id} {item} />
        {/each}
      </div>
    {/if}
  </div>
</section>
