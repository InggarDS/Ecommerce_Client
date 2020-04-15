<template>
  <div class="dashboard">
    <left-navbar />
    <div class="right">
      <top-navbar />
      <div>
         <router-view />
      </div>
        <!-- <Content /> -->
    </div>
  </div>
</template>

<script>

import LeftNavbar from '../components/LeftNavbar'
import TopNavbar from '../components/TopNavbar'
// import Content from '../components/Content'

export default {
  name: 'Dashboard',
  components: {
    LeftNavbar,
    TopNavbar
    // Content
  }
}
</script>

<style>
</style>
