<template>
  <div class="dashboard-wrapper">
     <div class="dashboard-title">
      <h3>Dashboard</h3>
    </div>
    <div class="cal-form">
        <div class="totalProduct">
            <div class="leftIcon">
              <i class="fas fa-box-open"></i>
            </div>
            <div class="rightIcon">
              <h1>{{allProducts.length}}</h1>
              <h5>Total Product</h5>
            </div>
        </div>
        <div class="totalUser">
            <div class="leftIcon">
             <i class="fas fa-users"></i>
            </div>
            <div class="rightIcon">
               <h1>10</h1>
               <h5>Total User</h5>
            </div>
        </div>
        <div class="newUser">
          <div class="leftIcon">
            <i class="fas fa-user"></i>
            </div>
            <div class="rightIcon">
               <h1>5</h1>
               <h5>New User</h5>
            </div>
        </div>
        <div class="newMember">
          <div class="leftIcon">
             <i class="fas fa-user"></i>
            </div>
            <div class="rightIcon">
               <h1>2</h1>
               <h5>new Product</h5>
            </div>
        </div>
    </div>
    <div class="chart-form">
      <h4>Products request</h4>
      <line-chart :min="1" :max="50" :data="chartData" max-width="100%" height="300px" ></line-chart>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'ContentDashboard',
  data () {
    return {
      chartData: []
    }
  },
  methods: {
    ...mapActions(['fetchProducts'])
  },
  computed: {
    ...mapGetters(['allProducts'])
  },
  created () {
    this.fetchProducts()
      .then(result => {
        const obj = {}
        result.data.products.forEach(el => {
          const key = moment(el.createdAt).format('YYYY-MM-DD ss:hh')
          if (!obj[key]) {
            obj[key] = 1
          } else {
            obj[key]++
          }
        })

        this.chartData = obj
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

.dashboard-wrapper {
 display: flex;
 flex-direction: column;
}

.cal-form {
  display: flex;
  width: 100%;
  flex-direction: row;
  background: white;
  margin: 2px;
  justify-content: space-evenly;
}

.totalProduct, .totalUser, .newMember, .newUser {
  border: solid 2px rgba(197, 196, 196, 0.425);
  width: 275px;
  height: 100px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.leftIcon {
  width: 100px;
  height: 100%;
}

.rightIcon {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.rightIcon h5 {
  font-size: 16px;
  color: grey;
  font-weight: bolder;
}

.rightIcon h1 {
  font-weight: bolder;
}

.totalProduct .rightIcon h1 {
  color:#0779e4;
}

.totalUser .rightIcon h1 {
   color:#21bf73;
}

.newUser .rightIcon h1 {
   color:#ff5d6c;
}

.newMember .rightIcon h1 {
   color:#f8b400;
}

.totalProduct .rightIcon h1 {
  color:#0779e4;
}

/* leftIcon */
.totalProduct .leftIcon {
   background:#0779e4;
}

.totalUser .leftIcon {
   background:#21bf73;
}

.newUser .leftIcon {
   background:#ff5d6c;
}

.newMember .leftIcon {
   background:#f8b400;
}

.totalProduct .leftIcon .fa-box-open,
.totalUser .leftIcon .fa-users,
.newUser .leftIcon .fa-user,
.newMember .leftIcon .fa-user {
  color: white;
  height: 100%;
  width: 60%;
}

.chart-form {
  background: white;
  max-height: 350px;
  max-width: 100%;
  border-radius: 2px;
  margin: 10px;
}

</style>
