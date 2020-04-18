<template>
  <div class="dashboard-wrapper">
    <div class="dashboard-title">
      <h3>Dashboard</h3>
    </div>
    <div class="chart-form">
      <h4>Chart product</h4>
      <line-chart :min="10" :max="100" :data="chartData" width="600px" height="300px" ></line-chart>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  created () {
    this.fetchProducts()
      .then(result => {
        const obj = {}
        result.data.products.forEach(el => {
          const key = moment(el.createdAt).format('YYYY-MM-DD')
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
 flex-direction: column ;
}

.chart-form {
  background: white;
  max-height: 350px;
  max-width: 650px;
  border-radius: 2px;
  margin: 10px;
}

</style>
