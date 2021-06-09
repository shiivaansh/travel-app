<template>
  <div id="app">
    <div id="nav">
      <NavigationBar/>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/brazil">Brazil</router-link> |
      <router-link to="/jamaica">Jamaica</router-link> |
      <router-link to="/hawaii">Hawai</router-link> |
      <router-link to="/panama">Panama</router-link> |
      <router-link to="/about">About</router-link> for testing -->
    </div>
    <router-view :key="$route.path" /> <!-- this tells the router view to refresh the component when path is changed-->
  </div>
</template>
<script>
 import NavigationBar from "./Components/NavigationBar.vue";
 export default{
   components: {
     NavigationBar
   }
 }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0 10px;
}


</style>
