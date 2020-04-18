<template>
  <div class="products">
      <h3>List Products</h3>
       <div v-if="isDeleting" class="loading">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_RnSQsr.json"  background="transparent"  speed="0.5"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
      </div>
      <div v-if="success">
        <b-alert show variant="danger">{{success}}</b-alert>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
         <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
        </div>
          <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="search by product" v-model="query">
      </div>
      <div class="product-list">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Created At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-if="!isLoading">
            <tr v-for="(product, index) in productList" :key="product.id">
              <td style="width:1%">{{ index+1 }}</td>
              <td style="width:5%"><img :src="imgsrc(product.image_url)" style="width:75px"></td>
              <td style="width:10%">{{product.name}}</td>
              <td style="width:10%">{{product.price}}</td>
              <td style="width:10%">{{date(product.createdAt)}}</td>
              <td style="width:10%"> <router-link :to="{ name: 'EditProduct', params: {id: product.id}}" tag="button"><i class="fas fa-pencil-alt"></i></router-link> <button @click.prevent="delProduct(product.id)"><i class="far fa-trash-alt"></i></button></td>
            </tr>
          </tbody>
           <div v-else class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
            </div>
        </table>
    </div>
      <!-- <p>
         <button @click="prevNext">prev</button>
        <button @click="nextPage">next</button>
      </p> -->

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
  name: 'Products',
  data () {
    return {
      pageSize: 3,
      currentPage: 1,
      isLoading: false,
      isDeleting: false,
      results: [],
      query: null,
      success: ''
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    ...mapActions(['deleteProduct']),
    delProduct (id) {
      this.isDeleting = true
      this.deleteProduct(id)
        .then(res => {
          this.fetchProducts()
            .then(result => {
              this.results = result.data.products
            })
            .catch(err => {
              console.log(err)
            })
            .finally(() => {
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
            })
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.isDeleting = false
          this.success = 'success deleting product'
        })
    },
    imgsrc (src) {
      return src
    },
    date (str) {
      return moment(str).format('MM/DD/YYYY hh:mm')
    }
    // nextPage () {
    //   if ((this.currentPage * this.pageSize) < this.allProducts.length) {
    //     this.currentPage++
    //   }
    // },
    // prevPage () {
    //   if (this.currentPage > 1) {
    //     this.currentPage--
    //   }
    // }
  },
  computed: {
    ...mapGetters(['allProducts']),
    productList () {
      if (this.query) {
        return this.results.filter(item => {
          return item.name.toLowerCase().includes(this.query.toLowerCase())
        })
      } else {
        return this.results
      }
    }
  },
  created () {
    this.isLoading = true
    this.fetchProducts()
      .then(result => {
        this.results = result.data.products
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setTimeout(() => {
          this.isLoading = false
        }, 1000)
      })
  }
}
</script>

<style scoped>

/* .product-list {
  background-color: white;
  width: 100%;
  height: 100%;
  margin: 10px;
} */

.product-list table {
  background: white;
  overflow-x: auto;
}

.my-2 {
  width: 80%;
  position: absolute;
}

button {
  background: none;
  border: none;
  width: 50px ;

}

button:focus {
  outline: none;
}

.fa-pencil-alt  {
  width: 25px;
  height:25px;
  color:rgb(36, 190, 36);
}

.fa-pencil-alt:hover  {
  width: 25px;
  height:25px;
  color:rgb(25, 128, 25);
}

.fa-trash-alt {
   width: 25px;
  height:25px;
  color: red;
}

.fa-trash-alt:hover {

  color: rgb(184, 3, 3);
}

</style>
