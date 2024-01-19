<template>
  <div
    class="weather-card"
    :class="place.current.is_day === 1 ? 'bg-day' : 'bg-night'"
  >
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
    <div class="more" v-show="showDetail">
      <WeatherMore
        :place="place"
        @close-info="showDetail = false"
        @remove-place="$emit('delete-place', place.location.name)"
      />
    </div>
    <button @click="showDetail = true" class="show-more__button">
      More
      <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import WeatherForecast from "./WeatherForecast.vue";
import WeatherMore from "./WeatherMore.vue";
defineProps({
  place: Object,
});

const showDetail = ref(false);
</script>
<style scoped>
.weather-card {
  /* background-color: #0d82ca; */
  position: relative;
  border-radius: 10px;
  max-width: 360px;
  width: 100%;
  display: block;
  padding: 35px;
}

.bg-day {
  background: #fdc352;
  background: -moz-linear-gradient(top, #fdc352 0%, #e8ed92 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #fdc352),
    color-stop(100%, #e8ed92)
  );
  background: -webkit-linear-gradient(top, #fdc352 0%, #e8ed92 100%);
  background: -o-linear-gradient(top, #fdc352 0%, #e8ed92 100%);
  background: -ms-linear-gradient(top, #fdc352 0%, #e8ed92 100%);
  background: linear-gradient(to bottom, #fdc352 0%, #e8ed92 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fdc352', endColorstr='#e8ed92',GradientType=0 );
}

.bg-night {
  background: #012459;
  background: -moz-linear-gradient(top, #012459 0%, #001322 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #012459),
    color-stop(100%, #001322)
  );
  background: -webkit-linear-gradient(top, #012459 0%, #001322 100%);
  background: -o-linear-gradient(top, #012459 0%, #001322 100%);
  background: -ms-linear-gradient(top, #012459 0%, #001322 100%);
  background: linear-gradient(to bottom, #012459 0%, #001322 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#012459', endColorstr='#001322',GradientType=0 );

  color: #ffffff !important;
}

.bg-night button {
  color: #ffffff !important;
}

.bg-night > .more {
  color: #000;
}
.weather-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
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
  margin-bottom: 35px;
}

.weather-card__condition p {
  font-size: 24px;
}

@media (max-width: 560px) {
  .weather-card {
    padding: 35px 10px;
  }
}
</style>
