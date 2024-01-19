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
  </div>
</template>
<script setup>
defineProps({
  place: Object,
});
</script>
<style scoped></style>
