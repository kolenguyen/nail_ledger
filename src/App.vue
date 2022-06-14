<template>
<div class="d-flex flex-row" id="container">
  <navi>
  </navi>
  <div class="p-3 ml-1 border rounded" id="display">
     <router-view></router-view>
  </div>
</div>
</template>

<script>
import NavView from './views/NavView.vue'
export default {
  components: {
    'navi':NavView,
  },
  data:()=>{
    return{}
  }
}
// import fs from 'fs'
// import pathModule from 'path'
// import sqlize from 'sequelize'
// // import { computed, ref } from 'vue'
// function App(){
  
// }
// export default App;
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  /* color: #2c3e50;
  height:1000px; */
  /* height: inherit;
  width: inherit;
} */

html {
  max-height:1400px;
  height:100%;
}

body {
  height:inherit;
}

#app {
  height:inherit;
}

#container {
  height:inherit;
}
#navigation {
  color: #7766C6;
  border-color:#7766C6 !important;
  height:50%;
  max-height:300px;
  min-height:250px;
  max-width:350px;
  min-width:280px;
}

.btn {
  background-color: white !important;
  border-color:#7766C6 !important;
  color:#7766C6  !important;
}

.btn-outline-success:hover, .btn-outline-success:active, .btn-outline-success:visited, .btn-outline-success:focus{
  background-color: #7766C6 !important;
  border-color:#7766C6 !important;
  outline-color:#7766C6 !important;
  color:white !important;
}

#display {
  border-color: #E0DFFD !important;
  height: 97%;
  margin-top: 1%;
  margin-bottom: 1%;
  width: 100%;
  margin-right: 1%;
  min-width:1000px;
  min-height:720px;

}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
