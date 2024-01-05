<script>
  export let customFunction = () => {};
  export let currentThemeClass = "light";
  export let text = "";
  export let isDisabled = false;
  export let customClass = "";
</script>

<button
  class="button {customClass}"
  on:click={customFunction}
  disabled={isDisabled}
>
  <span class="button-content {currentThemeClass}">
    <slot name="content" />
    {text}
  </span>
</button>
