<template>
  <div class="forecast">
    <div class="forecast__table">
      <div class="forecast__row">
        {{
          new Date(day.date).toLocaleDateString("en-us", { weekday: "long" })
        }}

        <img :src="day.day.condition.icon" alt="" />

        <div class="">
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
<style scoped></style>
