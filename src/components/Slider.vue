<template>
    <div class="slider">
        <label for="slider">Speed</label>
        <input
          ref="input"
          id="slider"
          v-model.number="value"
          type="range"
          :min="min"
          :max="max"
          :disabled="isDisabled"
          @input="onInput">
    </div>
</template>

<script>
export default {
    name: 'Slider',
    data () {
        return {
            min: 1,
            max: 1000
        }
    },
    computed: {
        isDisabled() {
            return this.$store.state.isDrawing
        },
        value: {
            get() {
                return this.$store.state.speed
            }, 
            set(value) {
                this.$store.commit('setSpeed', value)
            }
        }
    }
}

</script>

<style lang="scss">
    
</style>