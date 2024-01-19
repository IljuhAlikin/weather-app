<template>
  <main>
    <Header />
    <div>
      <Search @place-data="addPlace" />
    </div>
    <div>
      <p v-for="place in places">{{ place.location.name }}</p>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";

import Header from "./components/Header.vue";
import Search from "./components/Search.vue";

const places = ref([]);

const addPlace = (data) => {
  places.value.push(data);
};
</script>
<style scoped></style>
