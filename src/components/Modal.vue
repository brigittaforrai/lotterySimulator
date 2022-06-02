<template>
  <div class="modal">
    <h1>Result</h1>
    <section>
        <div>
            <p>Number of tickets</p>
            <p>0</p>
        </div>
        <div>
            <p>Yeras spent</p>
            <p>0</p>
        </div>    
        <div>
            <p>Cost of tickets</p>
            <p>0</p>
        </div>    
    </section>

    <NumberView name="Winning numbers" :numbers="winningNums"></NumberView>
    <NumberView name="Your numbers" :numbers="playerNums"></NumberView>


  </div>
</template>

<script>
import NumberView from './NumberView.vue'

export default {
  name: 'Modal',
  components: {NumberView},
  data () {
    return {
      winningNums: [1, 2, 3, 4, 5],
      playerNums: [6, 4, 9, 44, 5]
    }
  }
}
</script>


<style scoped lang="scss">
// @import "@/styles/variables.scss";

    .modal {
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
