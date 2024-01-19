<template>
  <main>
    <div class="container">
      <Header />
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <div>
        <Search @place-data="addPlace" />
      </div>
      <div class="weather-wrapper">
        <div v-for="(place, index) in places" :key="index" class="weather-item">
          <WeatherCard :place="place" />
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

console.log(places);
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
