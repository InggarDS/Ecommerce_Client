<template>
  <div>
    <div class="login-title">
      <h1>.Balada.</h1>
    </div>
    <div v-if="errors">
        <b-alert show variant="danger" v-for="error in errors" :key="error.id">
        {{ error.message }}
        </b-alert>
      </div>
    <div class="wrapper">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Admin</h2>
      <input type="email" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" v-model="data.email"/>
      <input type="password" class="form-control" name="password" placeholder="Password" required="" v-model="data.password"/>
      <button class="btn btn-lg btn-dark btn-block" type="submit">Login</button>
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
      },
      errors: []
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.data.email, password: this.data.password })
        .then(result => {
          this.errors = []
          localStorage.setItem('access_token', result.access_token)
          this.$store.commit('setLogin', true)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          this.errors = err.errors
        })
    }
  }
}
</script>
<style scoped>

  .wrapper {
    margin-top: 25px;
    margin-bottom: 80px;
  }

  .form-signin {
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.1);
    -webkit-box-shadow: -9px 6px 50px -24px rgba(0,0,0,0.75);
    -moz-box-shadow: -9px 6px 50px -24px rgba(0,0,0,0.75);
    box-shadow: -9px 6px 50px -24px rgba(0,0,0,0.75);
    border-radius: 10px;
  }
  .form-control {
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    @include box-sizing(border-box);
  }

  .form-signin-heading {
  margin-bottom: 30px;
  font-size:20px;
  font-weight: bolder;

  }

  input[type="text"] {
      margin-bottom: -1px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    input[type="password"] {
      margin-bottom: 20px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
</style>
