<script>
  export let customFunction = () => {};
  export let currentThemeClass = "light";
  export let text = "";
  export let isDisabled = false;
  export let customClass = "";
  export let href = "#";
</script>

<a {href} class="button-wrapper">
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
</a>
