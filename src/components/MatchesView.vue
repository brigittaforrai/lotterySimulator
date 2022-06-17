<template>
<div class="matches-view">

  <section>
    <p>2 matches</p>
    <p>{{matches.two.toLocaleString()}}</p>
  </section>
  <section>
    <p>3 matches</p>
    <p>{{matches.three.toLocaleString()}}</p>
  </section>
  <section>
    <p>4 matches</p>
    <p>{{matches.four.toLocaleString()}}</p>
  </section>
  <section>
    <p>5 matches</p>
    <p>{{matches.five.toLocaleString()}}</p>
  </section>

</div>
</template>

<script>
export default {
  name: 'MatchesView',
  computed: {
    matches() {
      return this.$store.state.matches
    }
  }
}
</script>

<style scoped lang="scss">
.matches-view {
    display: flex;

    @include phone {
        flex-wrap: wrap;
        width: 100%;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 72px;
        border: 1px solid $secondary-color;
        padding: 12px;
        width: 127px;
        box-shadow: $shadow;

        &:first-of-type {
            border-radius: 10px 0 0 10px;
        }

        &:last-of-type {
            border-radius: 0 10px 10px 0;
        }

        p:first-of-type {
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
        }

        p:nth-of-type(2) {
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            line-height: 22px;
            text-transform: uppercase;
            margin-top: 9px;
        }

        @include phone {
            width: calc((100% - 3px) / 2);

            &:first-of-type {
                border-radius: 10px 0 0 0;
            }
            &:last-of-type {
                border-radius: 0 0 10px 0;
            }
            &:nth-of-type(2) {
                border-radius: 0 10px 0 0;
            }
            &:nth-of-type(3) {
                border-radius: 0 0 0 10px;
            }
        }
    }
}
</style>
