<script>
  import SingleItem from "../../elements/SingleItem.svelte";
  import { productList } from "$lib/store.js";
  import BreadCrumbs from "../../elements/BreadCrumbs.svelte";

  let crumbsData = [
    {
      path: "/",
      name: "main",
    },
    {
      path: "",
      name: "items",
    },
  ];
</script>

<BreadCrumbs {crumbsData} />
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
