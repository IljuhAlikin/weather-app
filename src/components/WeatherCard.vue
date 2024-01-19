<template>
  <div class="weather-card">
    <div class="weather-card__header">
      <p>{{ place.location.name }}</p>
      <p>
        {{ new Date(place.location.localtime).getHours() }}:{{
          new Date(place.location.localtime).getMinutes()
        }}
      </p>
    </div>
    <img :src="place.current.condition.icon" alt="" class="weather-card__img" />
    <div class="weather-card__temp">
      <p>{{ Math.round(place.current.temp_c) }}&deg;</p>
    </div>
    <div class="weather-card__condition">
      <p>
        {{ place.current.condition.text }}
      </p>
    </div>
    <div v-for="(day, index) in place.forecast.forecastday" :key="index">
      <WeatherForecast :day="day" />
    </div>
    <!-- <div class="more">
      <WeatherMore :place="place" />
    </div> -->
  </div>
</template>
<script setup>
import WeatherForecast from "./WeatherForecast.vue";
import WeatherMore from "./WeatherMore.vue";
defineProps({
  place: Object,
});
</script>
<style scoped>
.weather-card {
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 360px;
  width: 100%;
  display: block;
}
.weather-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 35px 0px 35px;
  margin-bottom: 35px;
}

.weather-card__img {
  width: 120px;
  height: 120px;
  display: block;
  margin: 0 auto;
}

.weather-card__temp {
  text-align: center;
  padding-top: 20px;
}

.weather-card__temp p {
  font-size: 60px;
  font-weight: 600px;
}

.weather-card__condition {
  text-align: center;
}

.weather-card__condition p {
  font-size: 24px;
}
</style>
