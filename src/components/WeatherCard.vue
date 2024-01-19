<template>
  <div class="">
    <p>{{ new Date(place.location.localtime).getHours() }}:</p>
    <p>{{ new Date(place.location.localtime).getMinutes() }}</p>
    {{ place.location.name }}
    <img :src="place.current.condition.icon" alt="" />
    <p>{{ Math.round(place.current.temp_c) }}&deg;</p>
    <p>
      {{ place.current.condition.text }}
    </p>
    <div v-for="(day, index) in place.forecast.forecastday" :key="index">
      <WeatherForecast :day="day" />
    </div>

    <div class="more">
      <button class="more__button">More</button>
    </div>
  </div>
</template>
<script setup>
import WeatherForecast from "./WeatherForecast.vue";
defineProps({
  place: Object,
});
</script>
<style scoped></style>
