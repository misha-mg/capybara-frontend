<script>
  import BreadCrumbs from "../../elements/BreadCrumbs.svelte";
  import Spinner from "../../elements/Spinner.svelte";
  let crumbsData = [
    {
      path: "/",
      name: "main",
    },
    {
      path: "",
      name: "categories",
    },
  ];
</script>

<BreadCrumbs {crumbsData} />
<section id="categories">
  <div class="container">
    <div class="heading">
      <h1>КОЛИСЬ БУДУТЬ КАТЕГОРІЇ</h1>
      <Spinner />
    </div>
  </div>
</section>
