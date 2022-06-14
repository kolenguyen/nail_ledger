<template>
  <!-- <div class="home"> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <div>
    <ul class="navbar-nav d-flex flex-column p-3 m-3 border rounded justify-content-between align-items-start" id="navigation">
      <h4>{{message}}</h4>
      <li class="nav-item">
        <router-link to="checkOut" class="btn btn-outline-success btn-sm my-1 text-start">Check Out</router-link>
      </li>
      <li class="nav-item">
        <router-link to="Ledger" class="btn btn-outline-success btn-sm my-1 text-start">Generate Report</router-link>
      </li>
      <li class="nav-item">
        <router-link to="Service" class="btn btn-outline-success btn-sm my-1 text-start">Add/ Remove a Service</router-link>
      </li>
      <li class="nav-item">
        <router-link to="Technician" class="btn btn-outline-success btn-sm my-1 text-start">Add/ Remove a Nail Technician</router-link>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
// import Navigation from '@/components/Navigation.vue'

export default {
  name: 'NavView',
   data: () => {
        return{
            message: "Nail Salon Ledger"
        }
    },
  // components: {
  //   Navigation
  // }
}
</script>

<style scoped>
/* #navigation{
  color: #7766C6;
  border-color:#7766C6 !important;
  height:50%;
  max-height:300px;
  min-width:160px;
}

#display{
  border-color: #E0DFFD !important;
  height:97%;
  width:77%;
  min-width:1000px;
  min-height:720px;

} */

/* .btn {
    background-color: white !important;
    border-color:#7766C6 !important;
    color:#7766C6  !important;
}

.btn-outline-success:hover, .btn-outline-success:active, .btn-outline-success:visited, .btn-outline-success:focus{
    background-color: #7766C6 !important;
    border-color:#7766C6 !important;
    color:white !important;
} */
</style>
