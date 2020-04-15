<template>
  <LoginAdmin v-if="!isLogin"></LoginAdmin>
</template>

<script>
import LoginAdmin from '../components/LoginAdmin.vue'
export default {
  name: 'Home',
  components: {
    LoginAdmin
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
</style>
