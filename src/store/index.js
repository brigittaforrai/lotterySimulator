import { createStore } from 'vuex'

export default createStore({
  state: {
    numberOfTickets: 0,
    yearsSpent: 0,
    costOfTickets: 0,
    usingRandom: true,
    speed: 1.0,
    playerNumbers: [],
    hitTheJackPot: false,
    drawing: false,
    matches: {
      two: 0,
      three: 0,
      four: 0,
      five: 0
    }
  },

  getters: {
    getTwoMatches () {
       return this.$store.state.matches.two
    },
    getThreeMatches () {
      return this.$store.state.matches.three
    },
    getFourMatches () {
      return this.$store.state.matches.four
    },
    getFiveMatches () {
      return this.$store.state.matches.five
    }
  },

  mutations: {
  },

  actions: {
  },
  
  modules: {

  }

})
