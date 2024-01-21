<script>
  import Header from "../components/page-parts/Header.svelte";
  import Footer from "../components/page-parts/Footer.svelte";

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
