<template>
  <div class="more">
    <button @click="$emit('close-info')" class="close-button">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </button>
    <div class="more__wrapper">
      <div class="more__item item-more">
        <div class="item-more__content">
          <font-awesome-icon :icon="['fas', 'wind']" />
          <p>{{ place.current.wind_kph }}</p>
          <p>Wind speed</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <font-awesome-icon icon="fa-solid fa-droplet" />
          <p>{{ place.current.humidity }}</p>
          <p>Humidity</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <font-awesome-icon icon="fa-solid fa-umbrella" />
          <p>{{ place.current.precip_mm }}</p>
          <p>Precipitation</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <font-awesome-icon :icon="['fas', 'arrows-to-circle']" />
          <p>{{ place.current.wind_dir }}</p>
          <p>Direction</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <font-awesome-icon :icon="['fas', 'temperature-three-quarters']" />
          <p>{{ Math.round(place.current.feelslike_c) }}</p>
          <p>Feels</p>
        </div>
      </div>
      <div class="more__item item-more">
        <div class="item-more__content">
          <font-awesome-icon icon="fa-solid fa-sun" />
          <p>{{ place.current.uv }}</p>
          <p>UV index</p>
        </div>
      </div>
    </div>
    <div class="more__footer">
      <h3 class="more__last-updated">
        last update: {{ place.current.last_updated }}
      </h3>
      <button @click="$emit('remove-place')" class="more__delete">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </button>
    </div>
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
  background-color: rgba(256, 256, 256, 0.9);
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
.more__footer {
  padding: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.more__last-updated {
  font-size: 14px;
  font-weight: 400;
}

.close-button {
  display: block;
  display: flex;
  width: 100%;
  justify-content: end;
  padding: 35px 35px 0px 0px;
}

@media (max-width: 560px) {
  .close-button {
    padding: 10px 10px 0px 0px;
  }

  .more__footer,
  .more__wrapper {
    padding: 35px 10px;
  }
}
</style>
