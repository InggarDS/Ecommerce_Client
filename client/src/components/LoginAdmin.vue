<template>
  <div>
   <div class="log-form">
    <h2>Login Admin</h2>
    <form @submit.prevent="login">
      <input type="email" title="username" placeholder="username" v-model="data.email" required/><br><br>
      <input type="password" title="username" placeholder="password" v-model="data.password" required/><br><br>
      <button type="submit" class="btn">Login</button>
    </form>
</div>
  </div>
</template>

<script>

export default {
  name: 'LoginAdmin',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.data.email, password: this.data.password })
        .then(result => {
          localStorage.setItem('access_token', result.access_token)
          this.$store.commit('setLogin', true)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style>
</style>
