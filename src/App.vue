<template style="background-color: white">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/MyTest">MyTest</router-link> |
    <router-link to="/databindinglist2">databindinglist2</router-link> |
    <router-link to="/nested">nested</router-link> |
  </nav>
  <nav>
    <router-link to="/Parent">Parent</router-link> |
    <router-link to="/Test">Slot</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
