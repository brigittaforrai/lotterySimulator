<template>
  <div class="number-editor">

    <div class="checkbox">
      <p>{{label}}:</p>
      <label class="container">
        <input type="checkbox" v-model="useRandoms" />
        <div class="checkmark"></div>
      </label>
    </div>
    

    <div class="manual">
      <p>Add your numbers:</p>
      <div class="input-cont">
        <div v-for="(n, i) in manualPlayerNumbers">
          <input :id="i" 
                  :class="(outOfRangeError.includes(i) || duplicatedError.includes(i)) ? 'error' : 'valid'"
                  v-model.number="manualPlayerNumbers[i]" 
                  v-on:input="checkErrors(i)"/>
        </div>
        
      </div>
      <span v-if="(outOfRangeError.length || duplicatedError.length)" class="error-msg">Error</span>
    </div>

  </div>
</template>


<script>
export default {
  name: 'Checkbox',
  props: ['label'],
  data () {
    return {
      manualPlayerNumbers: new Array(5),
      outOfRangeError: [],
      outOfRangeMessage: 'Number must be between 1 and 90.',
      duplicatedError: [],
      duplicatedMessage: 'Duplicated number.'
    }
  },
  computed: {
    useRandoms: {
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
  },
  methods: {
    checkErrors(i) {
      const d = this.$data
      d.outOfRangeError = []
      d.duplicatedError = []

      if (typeof d.manualPlayerNumbers[i] !== 'number') {
        d.manualPlayerNumbers[i] = undefined
      }

      d.manualPlayerNumbers.forEach((num, k) => {
        if (num < 1 || num > 90) {
          d.outOfRangeError.push(k)
        }
        if (d.manualPlayerNumbers.filter(n => n === num).length > 1) {
          d.duplicatedError.push(k)
        }
      })
    }
  }
}

</script>


<style scoped lang="scss">
  .number-editor {
    display: flex;
    justify-content: space-between;
    align-items: start;
    // margin-top: 32px;

    @include tablet {
      flex-wrap: wrap;
    }

    @include phone {
      flex-wrap: wrap;
    }

    .checkbox {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 38px;
      .container {
        position: relative;
        width: 32px;
        margin-left: 10px;

        @include phone {
          width: 20px;
        }
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
          box-shadow: $shadow;

          @include phone {
            width: 24px;
            height: 24px;
            border-radius: 5px;
            padding: 3px;
          }
        }
      }

      @include tablet {
        width: 100%;
        margin-bottom: 24px;
      }

      @include phone {
        width: 100%;
        margin-bottom: 18px;
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

    .manual {
      display: grid;
      grid-template-columns: 150px auto;
      align-items: center;
      position: relative;

      @include phone {
        grid-template-columns: auto auto;
      }

      @include mini-phone {
        display: block;
      }

      .error-msg {
        position: absolute;
        left: 156px;
        bottom: -25px;
        color: red;
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 26px;
      }
      .input-cont {
        display: flex;

        @include mini-phone {
          margin-top: 8px;
        }
        input {
          box-sizing: border-box;
          background-color: white;
          border: 1px solid $dark-color;
          border-radius: 5px;
          width: 32px;
          height: 32px;
          box-shadow: $shadow;
          margin: 0 8px;
          text-align: center;

          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-transform: uppercase;
          color: $dark-color;

          @include mini-phone {
            margin: 0 8px 0 0;
          }

          @include phone {
            width: 24px;
            height: 24px;
            border-radius: 5px;
            padding: 3px;
            font-size: 12px;
            line-height: 16px;
          }

          &:active, &:focus {
            outline: 2px solid $base-color;
          }

          &.error {
            outline: 2px solid red;
          }
        }
      }

      @include phone {
        width: 100%;
      }
    }
  }

</style>

