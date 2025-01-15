<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="slider-container">
    <swiper
      :slides-per-view="1"
      :space-between="10"
      navigation
      pagination
      loop
    >
      <swiper-slide>
        <img class="slider-img" src="../assets/unsplash_Im7lZjxeLhg.png" alt="Image 1">
      </swiper-slide>
      <swiper-slide>
        <img class="slider-img" src="../assets/unsplash_Im7lZjxeLhg.png" alt="Image 2">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
</script>

<style scoped>
.slider-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
