<template>
  <div>Dashboard</div>
</template>

<script>
export default {
  name: 'Dashboard',
  created () {
    if (!localStorage.access_token) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
