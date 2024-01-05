<script>
  import { onMount } from "svelte";
  import Swiper from "$lib/swiper";
  import "swiper/css";

  onMount(() => {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 15,
      slidesPerView: 2,
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        920: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  });
</script>

<section id="hero">
  <div class="container">
    <div class="heading">
      <h1>ЗРОБИ СВІЙ СТИЛЬ</h1>
    </div>
    <div class="content">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="/person-slider.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="/person-slider1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="/person-slider2.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="/person-slider.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="/person-slider1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="/person-slider.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="/person-slider2.png" alt="" />
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</section>
