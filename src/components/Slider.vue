<template>
    <div class="slider">
        <label for="slider">Speed</label>
        <input
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
    .slider {
        width: 100%;
        
        input[type='range'] {
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 100%;
            height: 4px;
            border-radius: 5px;  
            background-color: $base-color;
            outline: none;
            -webkit-transition: .2s;
            transition: opacity .2s;

            &::-webkit-slider-thumb {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                width: 14px;
                height: 14px;
                border-radius: 50%; 
                background-color: white;
                border: 1px solid $base-color;
                cursor: pointer;

                &:focus {
                    background-color: red;
                }
            }

            &::-moz-range-thumb {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: $base-color;
                cursor: pointer;
            }
        }
    }
</style>