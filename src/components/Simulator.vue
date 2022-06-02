<template>
  <div class="simulator">

    <MyButton name="Start simulator" @click="start"></MyButton>
    <MyButton name="Stop" @click="stop"></MyButton>

    <h1>Result</h1>
    <section>
        <div>
            <p>Number of tickets</p>
            <p>{{numOfTickets}}</p>
        </div>
        <div>
            <p>Years spent</p>
            <p>{{years}}</p>
        </div>    
        <div>
            <p>Cost of tickets</p>
            <p>{{cost}}</p>
        </div>    
    </section>

    <MatchesView/>

    <NumberView name="Winning numbers" :numbers="winningNums"></NumberView>
    <NumberView name="Your numbers" :numbers="playerNums"></NumberView>

    <Checkbox/>
    <Slider/>


  </div>
</template>

<script>
import NumberView from './NumberView.vue'
import MyButton from './MyButton.vue'
import Checkbox from './Checkbox.vue'
import Slider from './Slider.vue'
import MatchesView from './MatchesView.vue'

export default {
  name: 'Simulator',
  components: {NumberView, MyButton, Checkbox, Slider, MatchesView},
  data () {
    return {
    }
  },
  computed: {
    winningNums () {
      return this.$store.state.winningNumbers
    },
    playerNums () {
      return this.$store.state.playerNumbers
    },
    numOfTickets () {
      return this.$store.state.numberOfTickets
    },
    years () {
      return this.$store.state.yearsSpent
    },
    cost () {
      return this.$store.state.costOfTickets
    },
    matches () {
      return this.$store.state.matches
    }
  },
   methods: {
    start() {
      this.$store.dispatch('drawing')
    },
    stop() {
      this.$store.state.isDrawing = false
      clearInterval(this.$store.state.timeOut)
    }
  }
}
</script>


<style scoped lang="scss">

    .simulator {
        width: 80%;
        max-width : 900px;
        height: auto;
        margin: 48px;
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

        section {
          padding: 18px 24px;
          margin: 32px 0;
          background: $base-color;
          border-radius: 10px;
          color: $white;
          max-width: 50%;
          min-width: 220px;
          div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
    }
</style>
