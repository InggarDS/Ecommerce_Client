import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    email: '',
    password: ''
  },
  mutations: {
    setLogin (state, payload) {
      state.email = payload.email
      state.password = payload.password
    }
  },
  actions: {
      login () {
          axios({
              method: 'POST',
              url: 'http://localhost:3000/post',
              data: {
                  email: this.state.email,
                  password: this.state.password
              }
          })
          .then(result => {
              localStorage.setItem('access_token', result.acces_token)
          })
      }
  }

})

export default store
