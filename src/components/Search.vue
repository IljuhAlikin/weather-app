<template>
  {{ searchTerm.query }}
  <form>
    <div class="form__wrapper">
      <input
        type="text"
        class="form__input"
        placeholder="Input a city"
        v-model="searchTerm.query"
        @input="handleSearch"
      />
    </div>
  </form>
  <div class="search__results">
    <div v-if="searchTerm.results">
      <div v-for="place in searchTerm.results" :key="place.id">
        <button class="search__button">
          {{ place.name }}, {{ place.region }}, {{ place.country }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";

const searchTerm = reactive({
  query: "",
  timeout: null,
  results: null,
});

const handleSearch = () => {
  clearTimeout(searchTerm.timeout);
  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query !== "") {
      const res = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=6ba1c6c8793a451aaf6120152241801&q=${searchTerm.query}`
      );
      const data = await res.json();
      searchTerm.results = data;
    } else {
      searchTerm.results = null;
    }
  }, 500);
};

const getWeather = (id) => {};
</script>
<style scoped></style>
