<script>
  import { liked } from "$lib/store.js";
  import BreadCrumbs from "../../elements/BreadCrumbs.svelte";
  import SingleItem from "../../elements/SingleItem.svelte";

  // liked.subscribe((value) => {
  //   lickedLength = 0;
  //   value.forEach((item) => (item.isHeart ? (lickedLength += 1) : ""));
  // });

  let crumbsData = [
    {
      path: "/",
      name: "Головна",
    },
    {
      path: "",
      name: "Вподобайки",
    },
  ];
</script>

<BreadCrumbs {crumbsData} />
<section id="likes">
  <div class="container">
    <div class="heading">
      {#if $liked.length}
        <h1>ВАМ ЩОСЬ СПОДОБАЛОСЬ!</h1>
      {:else}
        <h1>ВПОДОБАЙОК ПОКИ НЕМАЄ</h1>
      {/if}
    </div>
    <div class="content">
      {#each $liked as item, i}
        <SingleItem {...item} id={item._id} {item} />
      {/each}
    </div>
  </div>
</section>
