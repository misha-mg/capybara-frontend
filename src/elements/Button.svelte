<script>
  export let customFunction = () => {};
  export let currentThemeClass = "light";
  export let text = "";
  export let isDisabled = false;
</script>

<button class="button" on:click={customFunction} disabled={isDisabled}>
  <span class="button-content {currentThemeClass}">{text}</span>
</button>
