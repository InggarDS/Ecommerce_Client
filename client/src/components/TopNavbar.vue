<template>
     <div class="top-navbar">
       <div>
       </div>
         <!-- <button id="logout" @click.prevent="logout" type="button" class="btn btn-secondary">Logout</button> -->
         <div class="admin-btn">
          <b-dropdown id="dropdown" text="Hai, Admin" class="m-md-2">
             <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item>Setting</b-dropdown-item>
            <b-dropdown-item @click.prevent="logout">Logout</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
          </b-dropdown>
        </div>
     </div>
</template>

<script>
export default {
  name: 'TopNavbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  #dropdown {
    margin: 50px;
    background: none;
  }
  .admin-btn {
    margin-right: 50px;
  }

</style>
