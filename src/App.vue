<template>
  <LotteryHeader/>
  <Home/>
</template>

<script>
import Home from './components/Home.vue'
import LotteryHeader from './components/LotteryHeader.vue'

export default {
  name: 'App',
  components: {
    Home,
    LotteryHeader
  }
}
</script>

<style>
html, body, body * {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100vw;
  height: 100vh;
  background-color: #F2F2F2;
}
</style>
