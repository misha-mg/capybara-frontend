<script>
  export let crumbsData = [
    {
      path: "",
      name: "main",
    },
  ];
</script>

<section id="breadcrumbs">
  <div class="container">
    {#each crumbsData as item}
      <a href={item.path}>
        <span>{item.name}</span>
        <span class:arrow={item.path}></span>
      </a>
    {/each}
  </div>
</section>
