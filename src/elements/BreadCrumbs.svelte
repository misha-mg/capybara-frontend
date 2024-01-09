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
      {#if item.path}
        <a href={item.path}>
          <span>{item.name}</span>
          <span class:arrow={item.path}></span>
        </a>
      {:else}
        <div>
          <span>{item.name}</span>
          <span class:arrow={item.path}></span>
        </div>
      {/if}
    {/each}
  </div>
</section>
