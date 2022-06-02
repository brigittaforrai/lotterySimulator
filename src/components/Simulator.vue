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
            <p>Yeras spent</p>
            <p>{{years}}</p>
        </div>    
        <div>
            <p>Cost of tickets</p>
            <p>{{cost}}</p>
        </div>    
    </section>

    <section>
        <div>
            <p>2 matches</p>
            <p>{{matches.two}}</p>
        </div>
        <div>
            <p>3 matches</p>
            <p>{{matches.three}}</p>
        </div>    
        <div>
            <p>4 matches</p>
            <p>{{matches.four}}</p>
        </div>  
        <div>
            <p>5 matches</p>
            <p>{{matches.five}}</p>
        </div>   
    </section>

    <NumberView name="Winning numbers" :numbers="winningNums"></NumberView>
    <NumberView name="Your numbers" :numbers="playerNums"></NumberView>

    <Checkbox/>


  </div>
</template>

<script>
import NumberView from './NumberView.vue'
import MyButton from './MyButton.vue'
import Checkbox from './Checkbox.vue'


export default {
  name: 'Simulator',
  components: {NumberView, MyButton, Checkbox},
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
      clearInterval(this.$store.state.timeOut)
    }
  }
}
</script>


<style scoped lang="scss">

    .simulator {
        max-width : 80%;
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
          width: 50%;
          div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
        }
    }
</style>
