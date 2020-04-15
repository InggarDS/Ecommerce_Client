import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    setLogin (state, status) {
      state.isLogin = status
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/login', {
          email: payload.email,
          password: payload.password
        })
          .then((result) => {
            resolve(result.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    }
  }

})

export default store
