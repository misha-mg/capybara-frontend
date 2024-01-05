<script>
  import Button from "../elements/Button.svelte";
  import Spinner from "../elements/Spinner.svelte";
</script>

<section id="hero">
  <div class="container">
    <div class="heading">
      <h1>WILL BE БЛОК ГЕРОЙ</h1>
      <Button text="кнопка +" />
      <Button text="кнопка -" isDisabled={true} />
      <Spinner />
    </div>
  </div>
</section>
