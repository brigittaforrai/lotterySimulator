<template>
  <div class="numbersView">
    <p>{{ name }}:</p>
    <NumLabel v-for="n in numbers" :number="n"></NumLabel>
  </div>
</template>

<script>
import NumLabel from './NumLabel.vue'

export default {
  name: 'NumberView',
  components: { NumLabel },
  props: ['name', 'numbers'],
  computed: {
      
  }
}
</script>


<style scoped lang="scss">
    .numbersView {
        display: flex;
        align-items: center;
        margin-top: 32px;
    }

</style>
