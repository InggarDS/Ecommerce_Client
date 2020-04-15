<template>
  <div id="app">
    <Home v-if="!isLogin"></Home>
    <Dashboard v-else></Dashboard>
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
      this.$router.push('/')
    } else {
      this.$store.commit('setLogin', true)
    }
  }
}
</script>
<style>
@import '../public/style.css';
</style>
