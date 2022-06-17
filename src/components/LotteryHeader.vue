<template>
  <div class="lottery-header">
    <img src="@/assets/plus.svg" alt=""/>
    <h1>Lottery Simulator</h1>
  </div>
</template>

<script>
export default {
  name: 'LotteryHeader'
}
</script>


<style scoped lang="scss">
  .lottery-header {
    height: 60px;
    width: 100%;
    background: $gradient;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    img {
      width: 28px;
      height: 29px;
    }
    h1 {
      margin: 3px 2px 0 32px;
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 55px;
      text-transform: capitalize;
      color: $white;

      @include phone {
        font-size: 20px;
        line-height: 27px;
        margin: 3px 2px 0 16px;
      }
    }
  }
</style>
