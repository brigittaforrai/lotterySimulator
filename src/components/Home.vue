<template>
  <div class="home">
    <MyButton name="Start simulator" @click="openModal"></MyButton>
    <Modal v-if="showModal"></Modal>
    
  </div>
</template>

<script>
import Modal from './Modal.vue'
import MyButton from './MyButton.vue'

export default {
  name: 'Home',
  components: { Modal, MyButton },

  data () {
    return {
      showModal: false
    }
  },

  methods: {
    openModal() {
      this.showModal = true
    }
  },

  computed: {

  }
}
</script>


<style scoped lang="scss">

</style>
