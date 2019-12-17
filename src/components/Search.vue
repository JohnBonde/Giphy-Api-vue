<template>
  <div class="search">
    <form @submit.prevent="search">
      <input type="text" v-model="query" />
      <button class="btn btn-primary">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("searchGiphyApi", this.query);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
