<template>
  <main>
    <Header />
    <div>
      <Search @place-data="addPlace" />
    </div>
    <div>
      <!-- <p v-for="place in places">{{ place.location.name }}</p> -->
      <div class="" v-for="(place, index) in places" :key="index">
        <WeatherCard :place="place" />
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
<style scoped></style>
