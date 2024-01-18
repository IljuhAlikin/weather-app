<template>
  <div class="weather-app">
    <div class="weather-app__container">
      <div class="weather-app__wrapper">
        <div class="weather-app__column">
          <h1 class="weather-app__tilte">the weather</h1>
          <div class="weather-app__general general-weather-app">
            <div class="general-weather-app__temp">16&#176</div>
            <div class="general-weather-app__city weather-app-city">
              <div class="weather-app-city__name">New York</div>
              <div class="weather-app-city__time">12:29</div>
            </div>
            <div class="general-weather-app__clouds weather-app-clouds">
              <div class="weather-app-clouds__icon">
                <img src="" alt="" />
              </div>
              <div class="weather-app-clouds__condition">Partly Cloudy</div>
            </div>
          </div>
        </div>
        <div class="weather-app__column">
          <div class="weather-app__details details-weather-app">
            <h3 class="details-weather-app__title"></h3>
            <div class="details-weather-app__content">
              <div class="details-weather-app__cloudy">Cloudy <span class="cloudy">89%</span></div>
              <div class="details-weather-app__humidity">humidity <span class="humidity">65%</span></div>
              <div class="details-weather-app__wind">wind <span class="wind"></span>8 km/h</div>
            </div>
          </div>
          <div class="weather-app__search">
            <input type="text" class="weather-app__input" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let sityInput = "London"
</script>
<style scoped>
.weather-app {
    min-height: 100vh;
    background: url('./assets/img/day/clear.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    color: #fff;
    transition: 500ms;
    position: relative;
    opacity: 1;
}
.weather-app::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
}
.weather-app__container {
    position: relative;
    z-index: 1;
}
.weather-app__wrapper {
  display: flex;
  justify-content: space-between;
}
.weather-app__column {
}
.weather-app__tilte {
}
.weather-app__general {
}
.general-weather-app {
}
.general-weather-app__temp {
}
.general-weather-app__city {
}
.weather-app-city {
}
.weather-app-city__name {
}
.weather-app-city__time {
}
.general-weather-app__clouds {
}
.weather-app-clouds {
}
.weather-app-clouds__icon {
}
.weather-app-clouds__condition {
}
.weather-app__details {
}
.details-weather-app {
}
.details-weather-app__title {
}
.details-weather-app__content {
}
.details-weather-app__cloudy {
}
.cloudy {
}
.details-weather-app__humidity {
}
.humidity {
}
.details-weather-app__wind {
}
.wind {
}
.weather-app__search {
}
.weather-app__input {
}
</style>
