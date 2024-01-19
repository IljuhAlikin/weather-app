<template>
  <main>
    <div class="container">
      <Header />
      <div>
        <Search @place-data="addPlace" />
      </div>
      <div class="weather-wrapper">
        <div v-for="(place, index) in places" :key="index" class="weather-item">
          <WeatherCard :place="place" @delete-place="deletePlace" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";

import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import WeatherCard from "./components/WeatherCard.vue";

const places = ref([]);

const addPlace = (data) => {
  places.value.push(data);
};

const deletePlace = (name) => {
  places.value = places.value.filter((p) => p.location.name !== name);
};
</script>
<style scoped>
.weather-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  margin-top: 35px;
}
.weather-item {
  flex: 1 1 360px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
