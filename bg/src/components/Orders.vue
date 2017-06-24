<template>
  <div class="orders">
    <div>
      <div class="ui action input">
        <input type="text" placeholder="Search by Company" v-model="company">
        <button class="ui teal icon button" @click="searchByCompany">
          <i class="search icon"></i>
        </button>
      </div>
      <div class="ui action input">
        <input type="text" placeholder="Search by Address" v-model="address">
        <button class="ui teal icon button" @click="searchByAddress">
          <i class="search icon"></i>
        </button>
      </div>
      <button class="ui teal icon button" @click="getOrdersByCount">
        Search ocurrences
        <i class="search icon"></i>
      </button>
    </div>
    <div class="ui horizontal divider">
      Orders
    </div>
    <table class="ui single line celled table">
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Company Name</th>
          <th>Customer Address</th>
          <th>Ordered Item</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders">
          <td>{{order.orderId}}</td>
          <td>{{order.companyName}}</td>
          <td>{{order.customerAddress}}</td>
          <td>{{order.orderedItem}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getOrdersByCompany, getOrdersByAddress, getOrdersCount } from '../services/order';

export default {
  name: 'orders',
  data() {
    return {
      orders: [],
      company: '',
      address: '',
    };
  },
  methods: {
    searchByCompany() {
      getOrdersByCompany(this.company)
      .then(response => response.json())
      .then((response) => {
        this.orders = response;
      });
    },
    searchByAddress() {
      getOrdersByAddress(this.address)
      .then(response => response.json())
      .then((response) => {
        this.orders = response;
      });
    },
    getOrdersByCount() {
      getOrdersCount()
      .then(response => response.json())
      .then((response) => {
        this.orders = response;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
