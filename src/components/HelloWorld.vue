<template>
  <div class="d-flex flex-row">
    <div class="d-flex flex-column p-3 mx-3 border rounded justify-content-between align-items-start h-100 w-30" id="navigation">
      <h4>{{message}}</h4>
      <button type="button" class="btn btn-outline-success btn-sm my-1 text-start">Check Out</button>
      <button type="button" class="btn btn-outline-success btn-sm my-1 text-start">Generate Report</button>
      <button type="button" class="btn btn-outline-success btn-sm my-1 text-start">Add/ Remove a Service</button>
      <button type="button" class="btn btn-outline-success btn-sm my-1 text-start">Add/ Remove a Nail Technician</button>
    </div>
    <div class="p-3 mx-3 border rounded h-100 w-100" id="display">
      <div class="h-100">Welcome back! Click on o</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
        return{
            message: "Nail Salon Ledger"
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navigation{
  color: #7766C6;
  border-color:#7766C6 !important;
}

#display{
  border-color: #E0DFFD !important;
}

.btn {
    background-color: white !important;
    border-color:#7766C6 !important;
    color:#7766C6  !important;
}

 .btn-outline-success:hover, .btn-outline-success:active, .btn-outline-success:visited, .btn-outline-success:focus{
    background-color: #7766C6 !important;
    border-color:#7766C6 !important;
    color:white !important;
}
</style>
