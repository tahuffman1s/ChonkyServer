import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    radarrAPIkey: 'd3134d8b255243509a40d78757785e57',
    moviedbAPIkey: '152b95958bd699216d71c31bd9ad1955',
    lang: '&language=en-US&page=1',
    library: [],
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
    selectedMovie: [],
    sidebarList: {
      items: [
        { id: 0, text: 'Server Management', icon: 'server', route: "#", dropdown: true,
          items: [
            {id: 0, text: 'Manage Plex Server', icon: 'wrench', route: '/about'},
            {id: 1, text: 'Manage Sonarr Server', icon: 'wrench', route: '/'},
            {id: 2, text: 'Manage Radarr Server', icon: 'wrench', route: '#'}
          ]
        },
        { id: 1, text: 'Settings', icon: 'gear-fill', route: "#", dropdown: false}
      ]
    }
  },
  mutations: {
    setNowPlaying(state, movies)
    {
      state.nowPlaying = movies
    },
    setLibrary(state, movies)
    {
      state.library = movies
    },
    setPopular(state, movies)
    {
      state.popular = movies
    },
    setTopRated(state, movies)
    {
      state.topRated = movies
    },
    setUpcoming(state, movies)
    {
      state.upcoming = movies
    }
  },
  getters: {
    getSideBarItems: state => {
      return state.sidebarList
    },
    getNowPlaying: state => {
      return state.nowPlaying
    },
    getmoviedAPIkey: state => {
      return state.moviedbAPIkey
    },
    getlang: state => {
      return state.lang
    },
    getradarrAPIKey: state => {
      return state.radarrAPIkey
    },
    getlibrary: state => {
      return state.library
    },
    getPopular: state => {
      return state.popular
    },
    getTopRated: state => {
      return state.topRated
    },
    getUpcoming: state => {
      return state.upcoming
    }
  },
  actions: {
    async fillNowPlaying ({ commit }) {
      const movies = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.state.moviedbAPIkey + this.state.lang)
      commit("setNowPlaying", movies)
    },
    async fillLibrary ({ commit }) { 
      const movies = await axios.get('http://192.168.1.100:7878/api/v3/movie?apiKey=' + this.state.radarrAPIkey)
      commit("setLibrary", movies)
    },
    async fillPopular ({ commit }) {
      const movies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.moviedbAPIkey + this.state.lang)
      commit("setPopular", movies)
    },
    async fillTopRated ({ commit }) {
      const movies = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.state.moviedbAPIkey + this.state.lang)
      commit("setTopRated", movies)
    },
    async fillUpcoming ({ commit }) {
      const movies = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.state.moviedbAPIkey + this.state.lang)
      commit("setUpcoming", movies)
    }
  },
  modules: {
  }
})
