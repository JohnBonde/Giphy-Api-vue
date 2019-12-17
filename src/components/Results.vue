<template>
  <div class="results">
    <div class="row">
      <div class="col">
        <iframe v-for="gif in gifs" :key="gif.id" :src="gif.embed_url"></iframe>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button v-if="offset >= 4" @click="lastPage()">Last Page</button>
        <button @click="nextPage()">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      offset: 0
    };
  },
  computed: {
    gifs() {
      return this.$store.state.searchResults;
    }
  },
  methods: {
    nextPage() {
      this.$store.dispatch("searchNextPage", (this.offset += 4));
    },
    lastPage() {
      this.$store.dispatch("searchLastPage", (this.offset -= 4));
    }
  }
};
</script>