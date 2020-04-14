<template>
  <div>
      <form @submit.prevent="login">
          <label for="email">Email</label><br>
          <input type="text" name="email" id="email" placeholder="email" v-model="data.email"><br><br>
          <label for="Password">Password</label><br>
          <input type="pasword" name="password" id="password" placeholder="password" v-model="data.password"><br><br>
          <input type="submit" name="" id="" value="login">
      </form>
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
