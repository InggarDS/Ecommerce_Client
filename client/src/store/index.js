import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    products: []
  },
  mutations: {
    setLogin (state, status) {
      state.isLogin = status
    },
    setProducts (state, payload) {
      state.products = payload
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
    },
    logout () {
      localStorage.clear()
      this.commit('setLogin', false)
    },
    fetchProducts ({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: 'http://localhost:3000/products',
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(result => {
            commit('setProducts', result.data.products)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    addProducts (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/products',
          data: {
            name: payload.name,
            image_url: payload.image_url,
            price: payload.price,
            stock: payload.stock
          },
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(result => {
            resolve(resolve.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },
    deleteProduct (context, id) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'DELETE',
          url: 'http://localhost:3000/products/' + id,
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(result => {
            resolve(resolve.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },

    updateProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'PUT',
          url: 'http://localhost:3000/products/' + payload.id,
          data: {
            name: payload.name,
            image_url: payload.image_url,
            price: payload.price,
            stock: payload.stock
          },
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(result => {
            resolve(resolve.data)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    }
  },
  getters: {
    allProducts (state) {
      return state.products
    }
  }

})

export default store
