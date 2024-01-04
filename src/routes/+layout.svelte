<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import "../resources/css/app.css";
</script>

<header>
  <Header />
</header>

<main>
  <slot />
</main>

<footer>
  <Footer />
</footer>
