<template>
<div class="numbersView">
  <p>{{ name }}:</p>
  <div>
    <NumLabel v-for="n in computedNums" :number="n"></NumLabel>
  </div>
</div>
</template>

<script>
import NumLabel from './NumLabel.vue'

export default {
  name: 'NumberView',
  components: {
    NumLabel
  },
  props: ['name', 'numbers'],
  computed: {
    computedNums() {
      const n = this.$props.numbers
      return n.length ? n : Array(5).fill('')
    }
  }
}
</script>


<style scoped lang="scss">
.numbersView {
    display: grid;
    grid-template-columns: 150px auto;
    align-items: center;
    margin-top: 32px;

    @include phone {
        grid-template-columns: auto auto;
    }

    p {
        @include phone {
            font-size: 12px;
            line-height: 16px;
            min-width: 100px;
        }
        @include mini-phone {
            min-width: 50px;
        }
    }
    div {
        display: flex;
    }
}
</style>
