<template>
<button>{{ title }}</button>
</template>

<script>
export default {
  name: 'MyButton',
  props: ['title']
}
</script>


<style scoped lang="scss">
button {
    width: 140px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid $base-color;
    background-color: $white;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;
    box-shadow: $shadow;
    color: $dark-color;

    @include mini-phone {
        width: 100px;
    }

    &:active {
        background: $base-color;
        color: $white;
    }
    &:disabled {
      color: $disabled-color;
    }
}
</style>
