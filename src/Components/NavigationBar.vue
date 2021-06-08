<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </nav>
</template>
<style scoped>
#nav {
    display: flex;
    justify-content: center;
}
#nav a{
    font-weight: bold;
    color: orange;
    padding: 0 15px;
}
#nav a.active-class-router{
    color: blue;
}
</style>