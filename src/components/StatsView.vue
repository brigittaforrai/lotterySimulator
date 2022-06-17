<template>
    <div class="stats-view">
        <div>
            <p>Number of tickets</p>
            <p>{{numOfTickets}}</p>
        </div>
        <div>
            <p>Years spent</p>
            <p>{{years}}</p>
        </div>    
        <div>
            <p>Cost of tickets</p>
            <p>{{cost}}</p>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'StatsView',
    computed: {
        numOfTickets () {
            return this.$store.state.numberOfTickets.toLocaleString()
        },
        years () {
            return this.$store.state.yearsSpent.toLocaleString()
        },
        cost () {
            return this.$store.state.costOfTickets.toLocaleString()
        }
    }
}
</script>

<style scoped lang="scss">
    .stats-view {
        padding: 12px 24px;
        margin: 32px 0;
        background: $base-color;
        border-radius: 10px;
        color: $white;
        max-width: 50%;
        min-width: 220px;

        @include tablet {
            max-width: 75%;
        }

        @include phone {    
            width: 100%;
            max-width: 100%;
            min-width: 200px;
            margin: 24px 0;
        }
        div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
            p {
                margin: 3px 0;
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 19px;
            }
        }
    }
</style>