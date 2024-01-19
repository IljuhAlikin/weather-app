<template>
  <div class="more">
    <div class="more__wrapper">
      <div class="more__item">
        <img src="" alt="" />
        <p>{{ place.current.wind_kph }}</p>
        <p>wind speed</p>
      </div>
      <div class="more__item">
        <img src="" alt="" />
        <p>{{ place.current.humidity }}</p>
        <p>humidity</p>
      </div>
      <div class="more__item">
        <img src="" alt="" />
        <p>{{ place.current.precip_mm }}</p>
      </div>
      <div class="more__item">
        <img src="" alt="" />
        <p>{{ place.current.wind_dir }}</p>
      </div>
      <div class="more__item">
        <img src="" alt="" />
        <p>{{ Math.round(place.current.feelslike_c) }}</p>
      </div>
      <div class="more__item">
        <img src="" alt="" />
        <p>{{ place.current.uv }}</p>
      </div>
    </div>
    <h3 class="more__last-updated">
      last update: {{ place.current.last_updated }}
    </h3>
    <button class="more__delete"></button>
  </div>
</template>
<script setup>
defineProps({
  place: Object,
});
</script>
<style scoped></style>
