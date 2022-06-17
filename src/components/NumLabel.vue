<template>
<div class="numLabel"> <p>{{ number }}</p></div>
</template>

<script>
    export default {
        name: 'Modal',
        props: ['number']
    }
</script>

<style scoped lang="scss">
    .numLabel {
        background: $white;
        border: 1px solid $base-color;
        border-radius: 10px;
        width: 34px;
        height: 38px;
        padding: 8px 5px;
        margin: 0 8px;
        text-align: center;
        box-shadow: $shadow;

        @include phone {    
            width: 22px;
            height: 25px;
            padding: 4px 2px;
            border-radius: 5px;
            margin: 0 4px;
        }

        p {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            text-transform: uppercase;
            width: 100%;
            heigth: 100%;

            @include phone {    
                font-size: 12px;
                line-height: 16px;
            }
        }
    }
</style>