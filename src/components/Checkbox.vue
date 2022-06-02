<template>
  <div class="checkbox">
    <p>Play with random numbers: </p>
    <label class="container">
      <input type="checkbox" v-model="isChecked" />
      <div class="checkmark"></div>
    </label>
    
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
  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 32px;

    .container {
      position: relative;
      width: 32px;
      margin-left: 50px;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      input {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .checkmark {
        background-color: white;
        border: 1px solid $dark-color;
        border-radius: 5px;
        width: 32px;
        height: 32px;
      }
    }

    .container:hover input ~ .checkmark {
      background-color: #E9F5F1;
      border: 1px solid $base-color
    }

    .container input:checked ~ .checkmark {
      background-image: url('@/assets/tick.svg');
      background-repeat: no-repeat;
      background-position: center;
    }
  }

</style>

