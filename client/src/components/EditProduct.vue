<template>
  <div class="addProduct">
      <div v-if="isLoading" class="loading">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_RnSQsr.json"  background="transparent"  speed="0.5"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
      </div>
      <h3>Edit Product</h3>
      <div v-if="errors">
        <b-alert show variant="danger" v-for="error in errors" :key="error.id">
        {{ error.message }}
        </b-alert>
      </div>
      <div v-if="success">
         <b-alert show variant="success">{{success}}</b-alert>
      </div>
      <div class="add-form">
        <form @submit.prevent="update(product.id)">
          <label for="name">Product Name</label>
        <input type="text" placeholder="Product Name" v-model="data.name">
          <label for="image_url">image_url</label>
        <input type="text" placeholder="Image url" v-model="data.image_url">
        <div id="preview" data-text="Preview">
            <img v-if="data.image_url"   :src="data.image_url">
            <img v-else src="https://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png" alt="">
          </div>
          <br>
        <label for="stock">Stock</label>
        <input type="number" placeholder="Stock" min="0" v-model="data.stock">
        <label for="price">Price</label>
        <input type="number" placeholder="Price" min="0" v-model="data.price">
        <div class="addProduct-btn">
          <input type="submit" name="" id="" value="save">
          <router-link to="/products" tag="button" class="cancel-btn">Cancel</router-link>
        </div>
       </form>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AddProduct',
  data () {
    return {
      data: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      },
      errors: [],
      success: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    ...mapActions(['updateProduct']),
    update (id) {
      const payload = this.data
      payload.id = id
      this.updateProduct(payload)
        .then((results) => {
          this.errors = []
          this.success = 'Success add product'
        })
        .catch(err => {
          this.success = ''
          this.errors = err.errors
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  computed: {
    ...mapGetters(['allProducts']),
    product () {
      return this.allProducts.find(val => val.id === this.$route.params.id)
    }
  },

  created () {
    this.fetchProducts()
      .then(results => {
        const payload = results.data.products.find(val => val.id === this.$route.params.id)
        this.data.name = payload.name
        this.data.image_url = payload.image_url
        this.data.price = payload.price
        this.data.stock = payload.stock
      })
  }
}
</script>
<style scoped>

#preview {
  height: 200px;
  width: 200px;
  border: 1px solid gray;
}

img {
  max-height: 100%;
  max-width: 100%;
}

.add-form {
  border-radius: 5px;
  background-color: #ffff;
  padding: 20px;
  text-align: left;
  margin: 20px;
}

.addProduct-btn {
  display: flex;
  flex-direction: row;
}

input[type=text], input[type=number]  {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #0779e4;
  color: white;
  padding: 14px 20px;
  margin: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn {
  width: 100%;
  background-color: #a3a1a1;
  color: white;
  padding: 14px 20px;
  margin: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>
