<script>
  import SingleItem from "../../elements/SingleItem.svelte";

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

<section id="items">
  <div class="container">
    <div class="heading">
      <h1>АКТУАЛЬНІ ТОВАРИ</h1>
    </div>
    <div class="content">
      {#each itemsArr as item}
        <SingleItem {...item} />
      {/each}
    </div>
  </div>
</section>
