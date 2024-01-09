<script>
  import SingleItem from "../../elements/SingleItem.svelte";
  import { productList } from "$lib/store.js";
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

  let loading = true;
  let items = {};
  onMount(async () => {
    items = await getAllProducts();
    loading = false;
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
        {#each items as item}
          <SingleItem {...item} id={item._id} {item} />
        {/each}
      </div>
    {/if}
  </div>
</section>
