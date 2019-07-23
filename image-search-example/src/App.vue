<template>
  <div id="app">
    <form @submit.prevent="searchGifs">
      <label>Search</label>
      <input v-model="search">
    </form>
    <div v-if="loading">
      <img alt="loading" src="https://media2.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif?cid=790b76115d055ab7424f75514dcb4d7a&rid=giphy.gif" />
    </div>
    <div v-if="!loading" class="images">
      <img v-for="gif in gifs" :src="gif" :key="gif" />
    </div>
  </div>
</template>

<script>
import { value } from 'vue-function-api';

const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=JnxTmEGKXjZeUKBzRjTQoMDg8OX8pS5U&rating=pg&q=';

export default {
  setup() {
    const search = value('');
    const loading = value(false);
    const gifs = value([]);

    const searchGifs = async () => {
      loading.value = true;
      const response = await fetch(API_URL + search.value);
      const json = await response.json();
      gifs.value = json.data.map(gif => gif.images.fixed_height.url);
      setTimeout(() => {
        loading.value = false;
      }, 1500);
    };

    return {
      search,
      loading,
      searchGifs,
      gifs,
    };
  },
};
</script>

<style>
.images {
  column-count: 4;
}

img {
  width: 100%;
}
</style>
