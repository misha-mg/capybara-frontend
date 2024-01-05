<script>
  import Button from "../elements/Button.svelte";
  import SingleItem from "../elements/SingleItem.svelte";

  const itemsArr = [
    {
      name: "Woman 1",
      price: "1991",
      isHeart: false,
      img: "",
    },
    {
      name: "Woman 2",
      price: "1991",
      isHeart: false,
      img: "",
    },
    {
      name: "Woman 3",
      price: "1991",
      isHeart: false,
      img: "",
    },
    {
      name: "Woman 4",
      price: "1991",
      isHeart: false,
      img: "",
    },
  ];
</script>

<section id="popular">
  <div class="container">
    <div class="popular__heading">
      <h2>Актуальні айтеми</h2>
    </div>
    <div class="content">
      {#each itemsArr as item}
        <SingleItem {...item} />
      {/each}
    </div>
    <div class="footer">
      <Button text="Показати більше" href="/items" />
    </div>
  </div>
</section>
