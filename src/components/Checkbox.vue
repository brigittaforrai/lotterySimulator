<template>
  <div class="checkbox">
    <label for="checkbox">Play with random numbers</label>
    <input type="checkbox" id="checkbox" v-model="isChecked" />
  </div>
</template>


<script>
export default {
  name: 'Checkbox',
  computed: {
    isChecked: {
      get() {
        return this.$store.state.usingRandom
      },
      set(value) {
        this.$store.commit('setRandom', value)
        if(value) {
          this.$store.dispatch('generatePlayerNumbers')
        }
      }
    }
  }
}

</script>


<style scoped lang="scss">

</style>

