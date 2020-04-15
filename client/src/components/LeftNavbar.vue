<template>
 <div class="left-navbar">
     <div class="title">
         <h1>Balada</h1>
     </div>
     <div class="Menu">
        <span class="sub-menu"><h5>Menu</h5></span>
            <router-link to="/dashboard" tag="button"> <i class="fas fa-home"></i> Dashboard </router-link>
        <span class="sub-menu"><h5>App</h5></span>
            <button @click.prevent="toggleDropdwon" class="btn-ecommerce"> E-commerce
            <i class="fas fa-angle-down"></i> </button>
            <div v-if="isShowed" class="dropdown-ecommerce">
                <router-link to="/products">Products</router-link>
                <router-link to="#">Product Detail</router-link>
                <router-link to="/addProduct">Add Product</router-link>
            </div>
     </div>
 </div>
</template>

<script>

export default {
  name: 'LeftNavbar',
  data () {
    return {
      isShowed: false
    }
  },
  methods: {
    toggleDropdwon () {
      if (this.isShowed === false) {
        this.isShowed = true
      } else {
        this.isShowed = false
      }
    }
  }
}
</script>

<style scoped>
    .sub-menu {
        text-align: left;
        width: 100%;
        color: #455863;
        padding-left: 10px;
    }

    .sub-menu h5 {
        padding-left: 10px;
    }

    .btn-ecommerce, div button {
        width: 100%;
        padding: 2px 8px 6px 16px;
        font-size: 16px;
        text-decoration: none;
        color:  #9eb4be;
        display: block;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
        cursor: pointer;
        outline: none;
    }

    .dropdown-ecommerce a{
        font-size: 14px;
        text-decoration: none;
        color: #9eb4be;
        display: block;
        text-align: left;
        padding: 6px 8px 6px 32px;
         cursor: pointer;
    }

    div button:hover, div a:hover{
         color: #e5eef1;
    }

</style>
