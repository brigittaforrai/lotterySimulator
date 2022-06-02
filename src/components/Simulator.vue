<template>
  <div class="simulator">

    <h1>Result</h1>
    <StatsView/>
    <MatchesView/>
    <NumberView name="Winning numbers" :numbers="winningNums"/>
    <NumberView name="Your numbers" :numbers="playerNums"/>

    <hr/>

    <Checkbox :label="'Play with random numbers'"/>
    <Slider/>
    <div class="button-cont">
      <MyButton v-if="!isDrawing" :title="'Start'" @click="start"/>
      <MyButton v-else :title="'Pause'" @click="pause"/>
    </div>
     
  </div>
</template>

<script>
import NumberView from './NumberView.vue'
import MyButton from './MyButton.vue'
import Checkbox from './Checkbox.vue'
import Slider from './Slider.vue'
import MatchesView from './MatchesView.vue'
import StatsView from './StatsView.vue'

export default {
  name: 'Simulator',
  components: {NumberView, MyButton, Checkbox, Slider, MatchesView, StatsView},
  computed: {
    test () {
      return true
    },
    isDrawing() {
      return this.$store.state.isDrawing
    },
    winningNums () {
      return this.$store.state.winningNumbers
    },
    playerNums () {
      return this.$store.state.playerNumbers
    }
  },
   methods: {
    start() {
      this.$store.dispatch('drawing')
    },
    pause() {
      this.$store.commit('pause')
    }
  }
}
</script>


<style scoped lang="scss">

    .simulator {
        width: 80%;
        max-width : 900px;
        height: auto;
        margin: 48px auto;
        padding: 48px 78px;
        background: $white;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 24px;

        h1 {
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 55px;
          text-transform: capitalize;
        }

        hr {
          margin: 48px 0;
          border: 1px solid $base-light;
        }

        .button-cont {
          margin-top: 32px;
          align-items: center;
          text-align: center;
        }
    }
</style>
