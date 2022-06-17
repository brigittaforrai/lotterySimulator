<template>
<div class="number-editor">

  <div class="checkbox" :class="{disabled: ticketNum > 0}">
    <p>Play with random numbers:</p>
    <label class="container">
      <input type="checkbox" v-model="useRandoms" :disabled="ticketNum > 0" />
      <div class="checkmark"></div>
    </label>
  </div>

  <div class="manual" :class="{disabled: (useRandoms || ticketNum > 0)}">
    <p>Add your numbers:</p>
    <div class="input-cont">
      <div v-for="(n, i) in manualPlayerNumbers">
        <input :id="i" :disabled="useRandoms || ticketNum > 0" :class="(outOfRangeError.includes(i) || duplicatedError.includes(i)) ? 'error' : 'valid'" v-model.number="manualPlayerNumbers[i]" v-on:input="checkErrors(i)" />
      </div>
    </div>
  </div>
</div>
<div class="error-msgs">
  <span v-if="duplicatedError.length" class="error-msg">{{duplicatedMessage}}</span>
  <span v-if="outOfRangeError.length" class="error-msg">{{outOfRangeMessage}}</span>
</div>
</template>


<script>
export default {
  name: 'NumberEditor',
  data() {
    return {
      manualPlayerNumbers: new Array(5),
      outOfRangeError: [],
      outOfRangeMessage: 'Number must be between 1 and 90.',
      duplicatedError: [],
      duplicatedMessage: 'Duplicated number. '
    }
  },
  computed: {
    ticketNum() {
      return this.$store.state.numberOfTickets
    },
    useRandoms: {
      get() {
        return this.$store.state.usingRandom
      },
      set(value) {
        this.$store.commit('setRandom', value)
        if (value) {
          this.$store.dispatch('generatePlayerNumbers')
        } else {
          this.$store.commit('setUserNumbers', [])
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

      const hasError = d.outOfRangeError.length || d.duplicatedError.length
      this.$store.commit('setError', hasError)
      this.$store.commit('setUserNumbers', d.manualPlayerNumbers)
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

        &.disabled {
            color: $disabled-color;
            .checkmark {
                border: 1px solid $disabled-color;
            }
        }
    }

    .container:hover input ~ .checkmark {
        background-color: #E9F5F1;
        border: 1px solid $base-color;
    }

    .container input:checked ~ .checkmark {
        background-image: url("@/assets/tick.svg");
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

                &:active,
                &:focus {
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

        &.disabled {
            color: $disabled-color;
            input {
                border: 1px solid $disabled-color;
            }
        }
    }
}

.error-msg {
    color: red;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 26px;
}
</style>
