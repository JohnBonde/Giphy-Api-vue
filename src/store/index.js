import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

let _api = axios.create({
  baseURL: "http://api.giphy.com/v1/gifs"
})

let apiQuery = "search?&rating=PG&api_key=WS2OPFduBOJZoMwsekYJ5p3XDOc8ttnf&limit=4&q="

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: {}
  },
  mutations: {
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults
    }
  },
  actions: {
    async searchGiphyApi({ commit, dispatch }, query) {
      let res = await _api.get(apiQuery + query)
      commit("setSearchResults", res.data.data)
      console.log("from store", this.state.searchResults);

    }
  },
  modules: {
  }
})
