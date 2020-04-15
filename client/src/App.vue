<template>
  <div id="app">
    <Dashboard v-if="!isLogin"></Dashboard>
    <Home v-else></Home>
  </div>
</template>
<script>
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'
export default {
  components: {
    Dashboard,
    Home
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    if (!localStorage.access_token) {
      this.$store.commit('setLogin', false)
    }
  }
}
</script>
<style>
@import '../public/style.css';
</style>
