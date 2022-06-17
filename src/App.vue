<template>
  <LotteryHeader/>
  <Simulator/>
</template>

<script>
import Simulator from './components/Simulator.vue'
import LotteryHeader from './components/LotteryHeader.vue'

export default {
  name: 'App',
  components: {
    Simulator,
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

html {
    background-color: #F2F2F2;
}

#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-color;

  width: 100vw;
  min-height: 100vh;
  height: 100%;
}

</style>
