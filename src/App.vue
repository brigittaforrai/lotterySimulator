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

<style lang="scss">
html, body, body * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-color;

  width: 100vw;
  height: 100vh;
  background-color: #F2F2F2;
}
</style>
