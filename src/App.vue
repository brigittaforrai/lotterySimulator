<template>
  <LotteryHeader />
  <Simulator />
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
body,
body *,
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background-color: #F2F2F2;
    width: 100%;
}

#app {
    font-family: $font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $dark-color;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-top: 60px;
}
</style>
