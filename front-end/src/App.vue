<template>
  <div id="app">
    <img class='vue-logo' src="./assets/logo.png"><hr>
    <router-view></router-view>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
ul,li,ol,li{
    margin: 0;padding: 0;
    list-style: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.vue-logo{ width: 100px; }
.font-c-vue{
  color: #42b983;
}
</style>
