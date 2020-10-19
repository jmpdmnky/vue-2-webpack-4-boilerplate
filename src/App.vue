<template>
  <div class="page-container">
    <md-app md-mode="reveal">

      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon> <!-- remove if not needed -->
        </md-button>
        <h1 class="md-title" style="flex: 1">Vue Boilerplate</h1>

        <md-button>Refresh</md-button>
        <md-button class="md-primary">Create</md-button>

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible"> <!-- remove if not needed -->
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item to="/otherpage">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Other Page</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
          <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export default {
  name: 'app',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style lang="scss" scoped>
  .md-app {
    max-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }
  .md-content {
    padding: 16px;
  }
  .md-drawer {
    width: 320px;
    max-width: calc(100vw - 125px);
  }
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
  }
</style>
