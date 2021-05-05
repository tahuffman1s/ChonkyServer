<template>
  <div class="home">
    <b-tabs class="mt-1" content-class="mt-3" nav-class="font-weight-bold text-uppercase text-dark" active-nav-item-class="font-weight-bold text-uppercase text-dark" active-tab-class="font-weight-bold text-dark" lazy>
      <b-tab title="Library" active>
        <h2 class="pb-3 pl-5 pt-3 text-left d-xl-block d-lg-block d-md-block d-sm-none d-s">Library:</h2>
        <div class="row justify-content-center">
          <div class="pl-5 m-0 pr-5" v-for="item, index in getlibrary.data" :key="index">
            <div class="col">
              <b-card
                :img-src="item.images[0].remoteUrl"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-5"
                lazy>
                <div v-if="item.sizeOnDisk > 0" class="row downloaded justify-content-center pl-2 mb-3 pr-2">
                  Downloaded
                </div>
                <div v-if="item.sizeOnDisk === 0" class="row unavailable justify-content-center pl-2 mb-3 pr-2">
                  Unavailable
                </div>
                <div class="row justify-content-center pb-3 pl-2 pr-2">
                  <h4>{{ item.title }}</h4>
                </div>
                <div class="row justify-content-center pl-2 pb-5 pr-2 h-50">
                  <b-card-text>
                    {{ shortenLongDescription(item.overview, 100)}}
                  </b-card-text>
                </div>
                <div class="row justify-content-center">
                  <b-button href="#" variant="primary">View</b-button>
                </div>
              </b-card>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Discover">
        <div class="d-none d-md-block d-lg-block d-xl-block">
          <h2 class="pb-3 pl-5 pt-3 text-left">In Theatres:</h2>
          <carousel  class="pl-5 pr-5" :autoplay="true" :autoplayHoverPause="true" :perPage="5">
              <slide v-for="item, index in getNowPlaying.data.results" :key="index">
                <b-img class="w-100 pl-1 pr-1" :src="'https://image.tmdb.org/t/p/original' + item.poster_path"/>
              </slide>
          </carousel>
        </div>
        <div class=" d-sm-block d-md-none d-lg-none d-xl-none d-xs-block">
          <h2 class="pb-3 pl-5 pt-3 text-left">In Theatres:</h2>
          <carousel :autoplay="true" :paginationEnabled="false" :autoplayHoverPause="true" :perPage="1">
              <slide v-for="item, index in getNowPlaying.data.results" :key="index">
                <b-img class="w-100 pl-5 pr-5" :src="'https://image.tmdb.org/t/p/original' + item.poster_path"/>
              </slide>
          </carousel>
        </div>
        <div class="d-none d-md-block d-lg-block d-xl-block">
          <h2 class="pb-3 pl-5 pt-3 text-left">Popular Now:</h2>
          <carousel  class="pl-5 pr-5" :autoplay="true" :autoplayHoverPause="true" :perPage="5">
              <slide v-for="item, index in getPopular.data.results" :key="index">
                <b-img class="w-100 pl-1 pr-1" :src="'https://image.tmdb.org/t/p/original' + item.poster_path"/>
              </slide>
          </carousel>
        </div>
        <div class=" d-sm-block d-md-none d-lg-none d-xl-none d-xs-block">
          <h2 class="pb-3 pl-5 pt-3 text-left">Popular Now:</h2>
          <carousel :autoplay="true" :paginationEnabled="false" :autoplayHoverPause="true" :perPage="1">
              <slide v-for="item, index in getPopular.data.results" :key="index">
                <b-img class="w-100 pl-5 pr-5" :src="'https://image.tmdb.org/t/p/original' + item.poster_path"/>
              </slide>
          </carousel>
        </div>
        <div class="d-none d-md-block d-lg-block d-xl-block">
          <h2 class="pb-3 pl-5 pt-3 text-left">Upcoming:</h2>
          <carousel  class="pl-5 pr-5" :autoplay="true" :autoplayHoverPause="true" :perPage="5">
              <slide v-for="item, index in getUpcoming.data.results" :key="index">
                <b-img class="w-100 pl-1 pr-1" :src="'https://image.tmdb.org/t/p/original' + item.poster_path"/>
              </slide>
          </carousel>
        </div>
        <div class=" d-sm-block d-md-none d-lg-none d-xl-none d-xs-block">
          <h2 class="pb-3 pl-5 pt-3 text-left">Upcoming:</h2>
          <carousel :autoplay="true" :paginationEnabled="false" :autoplayHoverPause="true" :perPage="1">
              <slide v-for="item, index in getUpcoming.data.results" :key="index">
                <b-img class="w-100 pl-5 pr-5" :src="'https://image.tmdb.org/t/p/original' + item.poster_path"/>
              </slide>
          </carousel>
        </div>
        <div class="d-none d-md-block d-lg-block d-xl-block">
          <h2 class="pb-3 pl-5 pt-3 text-left">Top Rated:</h2>
          <carousel  class="pl-5 pr-5" :autoplay="true" :autoplayHoverPause="true" :perPage="5">
              <slide v-for="item, index in getTopRated.data.results" :key="index">
                <b-img class="w-100 pl-1 pr-1" :src="'https://image.tmdb.org/t/p/original' + item.poster_path"/>
              </slide>
          </carousel>
        </div>
        <div class=" d-sm-block d-md-none d-lg-none d-xl-none d-xs-block">
          <h2 class="pb-3 pl-5 pt-3 text-left">Top Rated:</h2>
          <carousel :autoplay="true" :paginationEnabled="false" :autoplayHoverPause="true" :perPage="1">
              <slide v-for="item, index in getTopRated.data.results" :key="index">
                <b-img class="w-100 pl-5 pr-5" :src="'https://image.tmdb.org/t/p/original' + item.poster_path"/>
              </slide>
          </carousel>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex'



export default Vue.extend({
  computed: {
    ...mapGetters([
      'getNowPlaying',
      'getPopular',
      'getlibrary',
      'getUpcoming',
      'getTopRated'
    ]),
    ...mapActions([
      'fillNowPlaying',
      'fillPopular',
      'fillLibrary',
      'fillUpcoming',
      'fillTopRated'
    ])
  },
  methods: {
    getImage(path: string) {
      return require(path);
    },
    shortenLongDescription(title: string, maxlength: number) {
      let retstring = title.substring(0, maxlength) + '...'
      if (retstring.length < maxlength)
      {
        retstring.padEnd(maxlength - retstring.length)
      }
      return retstring
    }
  },
  created() {
    this.$store.dispatch("fillNowPlaying");
    this.$store.dispatch("fillLibrary");
    this.$store.dispatch("fillPopular");
    this.$store.dispatch("fillUpcoming");
    this.$store.dispatch("fillTopRated");
  }
});
</script>
<style scoped>
.downloaded {
  background: greenyellow;
}
.unavailable {
  background: indianred;
}
</style>