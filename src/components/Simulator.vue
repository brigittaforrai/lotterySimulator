<template>
  <div class="simulator">

    <h1>Result</h1>
    <StatsView/>
    <MatchesView/>
    <NumberView name="Winning numbers" :numbers="winningNums"/>
    <NumberView name="Your numbers" :numbers="playerNums"/>

    <hr/>

    <NumberEditor/>
    <Slider/>
    <div class="button-cont">
      <MyButton :title="buttonLabel" @click="isDrawing ? pause() : start()" :disabled="drawDisabled"/>
      <MyButton :title="'Stop'" @click="stop" :disabled="!isDrawing && hasStarted == 0"/>
    </div>
     
  </div>
</template>

<script>
import NumberView from './NumberView.vue'
import MyButton from './MyButton.vue'
import NumberEditor from './NumberEditor.vue'
import Slider from './Slider.vue'
import MatchesView from './MatchesView.vue'
import StatsView from './StatsView.vue'

export default {
  name: 'Simulator',
  components: {NumberView, MyButton, NumberEditor, Slider, MatchesView, StatsView},
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
    },
    drawDisabled () {
      const nums = this.$store.state.playerNumbers.filter(n => n != undefined)
      return this.$store.state.hasError || nums.length < 5
    },
    hasStarted () {
      return this.$store.state.numberOfTickets > 0
    },
    buttonLabel () {
      if (this.isDrawing) {
        return 'Pause'
      } else {
        return this.hasStarted ? 'Continue' : 'Start'
      }
    }
  },
   methods: {
    start() {
      this.$store.dispatch('drawing')
    },
    pause() {
      this.$store.commit('pause')
    },
    stop() {
      this.$store.dispatch('stop')
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

        @include phone {   
            padding: 16px; 
            padding-bottom: 32px;
            margin: 16px;
            width: calc(100% - 32px);
        }

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

          @include phone {
            margin: 24px 0;
          }
        }

        .button-cont {
          display: flex;
          justify-content: space-around;
          margin-top: 32px;
          align-items: center;
          text-align: center;
        }
    }
</style>
