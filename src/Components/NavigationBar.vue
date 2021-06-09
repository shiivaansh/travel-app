<template>
  <nav id="nav">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link> -->
     <p class="logo">The Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to='/'> Home </router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class=links>
        <router-link
          :to="{
            name: 'DestinationPage',
            params: {slug: destination.slug}
          }">
          {{destination.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default{
  data() {
    return {
      // destinationId: this.$route.params.id,
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
#nav {
    display: flex;
    justify-content: center;
}
#nav a{
    font-weight: bold;
    color: orange;
    padding: 0 15px;
    text-decoration: none;
    font-weight: bold;
}
#nav a.active-class-router{
    color: blue;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: orangered;
  font-weight: bold;
}
</style>