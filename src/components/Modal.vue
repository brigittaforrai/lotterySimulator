<template>
  <div class="modal">
    <h1>Result</h1>
    <section>
        <div>
            <p>Number of tickets</p>
            <p>0</p>
        </div>
        <div>
            <p>Yeras spent</p>
            <p>0</p>
        </div>    
        <div>
            <p>Cost of tickets</p>
            <p>0</p>
        </div>    
    </section>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>


<style scoped lang="scss">
// @import "@/styles/variables.scss";

    .modal {
        width : 80%;
        height: auto;
        margin: 48px auto;
        padding: 48px 78px;
        background: $white;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 24px;

        section {
          padding: 18px 24px;
          margin: 32px 0;
          background: $base-color;
          border-radius: 10px;
          div {
            display: flex;
            flex-direction: row;
          }
        }
    }
</style>
