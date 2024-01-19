<template>
  <div class="forecast">
    <div class="forecast__table">
      <div class="forecast__row">
        <div class="forecast__day">
          {{
            new Date(day.date).toLocaleDateString("en-us", { weekday: "long" })
          }}
        </div>
        <img :src="day.day.condition.icon" alt="" class="forecast__img" />
        <div class="forecast__temp">
          {{ Math.round(day.day.maxtemp_c) }} /
          {{ Math.round(day.day.mintemp_c) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  day: Object,
});
</script>
<style scoped>
.forecast {
}
.forecast__table {
  display: flex;
  flex-direction: column;
}
.forecast__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.forecast__day {
  width: 100px;
  max-width: 100px;
}

.forecast__temp {
  width: 80px;
  max-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.forecast__img {
  width: 30px;
  height: 30px;
}
.forecast__temp {
}
</style>
