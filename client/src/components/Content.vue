<template>
 <div class="content">
     <h1>Test</h1>
     <router-link to="/content/products">Produces</router-link>
     <router-link to="/content/addProduct">AddProduct</router-link>
     <div>
          <router-view />
     </div>
 </div>
</template>

<script>

export default {
  name: 'Content'
}
</script>

<style>

</style>
