<template>
  <div class="more">
    <div class="more__wrapper">
      <div class="more__item item-more">
        <div class="item-more__content">
          <img src="" alt="" />
          <p>{{ place.current.wind_kph }}</p>
          <p>Wind speed</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <img src="" alt="" />
          <p>{{ place.current.humidity }}</p>
          <p>Humidity</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <img src="" alt="" />
          <p>{{ place.current.precip_mm }}</p>
          <p>Precipitation</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <img src="" alt="" />
          <p>{{ place.current.wind_dir }}</p>
          <p>Direction</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <img src="" alt="" />
          <p>{{ Math.round(place.current.feelslike_c) }}</p>
          <p>Feels</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <img src="" alt="" />
          <p>{{ place.current.uv }}</p>
          <p>UV index</p>
        </div>
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
<style scoped>
.more {
  width: 100%;
  background-color: rgba(256, 256, 256, 0.75);
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 10px;
}

.more__wrapper {
  padding: 0px 35px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 120px);
  row-gap: 35px;
}

.more__item {
  text-align: center;
  display: flex;
  justify-content: center;
}

.item-more__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item-more__content p {
  font-size: 16px;
}

.more__last-updated {
  padding: 0px 35px;
  font-size: 14px;
  font-weight: 400;
}
</style>
