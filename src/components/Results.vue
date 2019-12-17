<template>
  <div class="results">
    <iframe v-for="gif in gifs" :key="gif.id" :src="gif.embed_url"></iframe>
  </div>
</template>

<script>
export default {
  name: "Results",
  computed: {
    gifs() {
      return this.$store.state.searchResults;
    }
  }
};
</script>