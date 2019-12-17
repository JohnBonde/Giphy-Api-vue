<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Gif Search</h1>
        currentOffset: {{offset}}
        <search @resetOffset="offset = 0" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <results :offset="offset" @next="offset+=4" @previous="offset-=4" />
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
  data() {
    return {
      offset: 0
    };
  },
  components: {
    Search,
    Results
  }
};
</script>
