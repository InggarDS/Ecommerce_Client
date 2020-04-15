<template>
  <div>
   <div class="log-form">
    <h2>Login Admin</h2>
    <form @submit.prevent="login">
      <input type="text" title="username" placeholder="username" /><br><br>
      <input type="password" title="username" placeholder="password" /><br><br>
      <button type="submit" class="btn">Login</button>
    </form>
</div>
  </div>
</template>

<script>
import axios from 'axios'

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
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: this.data.email,
          password: this.data.password
        }
      })
        .then(result => {
          localStorage.setItem('access_token', result.access_token)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
}
</script>
<style>
</style>
