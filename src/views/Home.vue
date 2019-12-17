<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Gif Search</h1>
        <search />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <results />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Results from "../components/Results";

export default {
  name: "home",
  components: {
    Search,
    Results
  }
};
</script>
