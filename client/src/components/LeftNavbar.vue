<template>
 <div class="left-navbar">
     <div class="title">
         <h1>.Balada.</h1>
     </div>
     <div class="Menu">
        <span class="sub-menu"><h5>Menu</h5></span>
            <router-link to="/dashboard" tag="button"> <i class="fas fa-home"></i> <div class="btn-text"> Dashboard </div> <div></div></router-link>
            <button><i class="fas fa-desktop"></i><div class="btn-text"> Users </div></button>
        <span class="sub-menu"><h5>App</h5></span>
            <button @click.prevent="toggleDropdwon" class="btn-ecommerce"> <i class="fas fa-shopping-basket"></i> <div class="btn-text"> Products </div>
            <i class="fas fa-angle-down"></i> </button>
            <div v-if="isShowed" class="dropdown-ecommerce">
                <router-link to="/products">All Products</router-link>
                <router-link to="/addProduct">Add Product</router-link>
            </div>
            <button><i class="far fa-envelope"></i><div class="btn-text">Email </div> <i class="fas fa-angle-down"></i></button>
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
        display: flex;
        justify-content: space-between;
        text-align: left;
    }

    .btn-text {
      flex: 1;
      padding-left: 10px;
    }

    .div button {
      margin-bottom: 50px;
    }

    .dropdown-ecommerce a{
        font-size: 14px;
        text-decoration: none;
        color: #9eb4be;
        display: block;
        text-align: left;
        padding: 6px 8px 6px 48px;
        cursor: pointer;
    }

    div button:hover, div a:hover{
         color: #e5eef1;
    }

</style>
