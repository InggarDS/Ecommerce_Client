<template>
     <div class="top-navbar">
         <h1>Top</h1>
         <button @click.prevent="logout" class="logout">Logout</button>
     </div>
</template>

<script>
export default {
  name: 'TopNavbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .logout {
    margin: 20px;
  }
</style>
