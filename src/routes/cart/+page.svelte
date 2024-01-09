<script>
  import { cart } from "$lib/store.js";
  import BreadCrumbs from "../../elements/BreadCrumbs.svelte";
  import SingleItem from "../../elements/SingleItem.svelte";

  $: console.log($cart);

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
      {#each $cart as item, i}
        <SingleItem {...item} id={item._id} {item} />
      {/each}
    </div>
  </div>
</section>
