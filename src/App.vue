<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand class="col text-left" href="/"> ChonkyServer</b-navbar-brand>
        <div class="col text-right m-0 p-0">
          <b-button v-b-toggle.sidebar-right class="m-0"><b-icon icon="list"></b-icon></b-button>
          <b-sidebar id="sidebar-right" bg-variant="dark" text-variant="light" no-header no-slide right>
            <template #default="{ hide }">
              <div class="row mt-2 m-0 w-100">
                <div class="col">
                </div>
                <div class="col">
                  <b-button><b-icon icon="list" @click="hide"></b-icon></b-button>
                </div>
              </div>
              <div class=" px-3 py-2">
                <div v-for="item, index in getSideBarItems.items" :key="index">
                  <b-dropdown v-if="item.dropdown === true" id="dropdown"  block variant="dark" menu-class="w-100" no-caret>
                    <template #button-content>
                      <div class="row">
                        <div class="col-1">
                          <b-icon :icon="item.icon"/>
                        </div>
                        <div class="col text-right">
                          {{ item.text }}
                        </div>
                      </div>
                    </template>
                    <b-dropdown-item v-for="item2, index2 in item.items" :key="index2">
                      <div class="row">
                        <div class="col-1">
                          <b-icon :icon="item2.icon"/>
                        </div>
                        <div class="col">
                          <router-link class="routerlink" :to="item2.route">{{item2.text}}</router-link>
                        </div>
                      </div>
                    </b-dropdown-item>
                  </b-dropdown>
                  <b-button class="w-100 navbutton" v-if="item.dropdown === false" variant="dark">
                    <router-link class="navbutton" :to="item.route">
                      <div class="row">
                        <div class="col-1">
                          <b-icon :icon="item.icon"/>
                        </div>
                        <div class="col text-right">
                          {{ item.text }}
                        </div>
                      </div>
                    </router-link>
                  </b-button>
                </div>
              </div>
            </template>
          </b-sidebar>
        </div>
      </b-navbar>
      <b-alert show dismissible>
        Update Available
      </b-alert>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getSideBarItems'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.routerlink:hover {
  color: #2c3e50;
  text-decoration: none;
}
.routerlink {
  color:#2c3e50;
  text-decoration: none;
}
.navbutton:hover {
  color:#FFFFFF !important;
  text-decoration: none !important;
}
.navbutton {
  color:#FFFFFF !important;
  text-decoration: none !important;
}
</style>
