<template>
  <div class="dashboard">
    <left-navbar />
    <div class="right">
      <top-navbar />
      <div class="content">
         <router-view />
      </div>
        <!-- <Content /> -->
    </div>
  </div>
</template>

<script>

import LeftNavbar from '../components/LeftNavbar'
import TopNavbar from '../components/TopNavbar'

export default {
  name: 'Dashboard',
  components: {
    LeftNavbar,
    TopNavbar
  }
}
</script>

<style>
</style>
