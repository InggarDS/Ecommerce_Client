<template>
  <div class="products">
      <h1>Products</h1>
  </div>
</template>

<script>
export default {
  name: 'Products',
  created () {
    if (!localStorage.access_token) {
      this.$store.commit('setLogin', false)
    }
  }
}
</script>

<style>

</style>
