import { createStore } from 'vuex'
import { generateRandomNumbers, getNumberOfMatches } from '../helperFuctions.js'

const TICKET_PRICE = 300

export default createStore({
  state: {
    timeOut: null, // todo rename
    numberOfTickets: 0,
    yearsSpent: 0,
    costOfTickets: 0,
    usingRandom: true,
    speed: 1,
    playerNumbers: [6, 8, 23, 72, 60],
    winningNumbers: [],
    hitTheJackPot: false,
    isDrawing: false,
    matches: {
      two: 0,
      three: 0,
      four: 0,
      five: 0
    }
  },

  getters: {
    getTwoMatches (state) {
       return state.matches.two
    },
    getThreeMatches (state) {
      return state.matches.three
    },
    getFourMatches (state) {
      return state.matches.four
    },
    getFiveMatches (state) {
      return state.matches.five
    }
  },

  mutations: {
    setRandom(state, val) {
      state.usingRandom = val
    },
    setSpeed(state, val) {
      state.speed = val
    },
    setUserNumbers(state, array) {
      state.playerNumbers = array
    },
    setWinningNumbers(state, array) {
      state.winningNumbers = array
    },
    changeSpeed(state, val) {
      state.speed = val
    },
    updateData(state, data) {
      const n = data.ticketsNum
      state.numberOfTickets = n
      state.costOfTickets = n * TICKET_PRICE
      state.yearsSpent = Math.floor(n/52)

      state.winningNumbers = data.winningNums
    },
    setMatches(state) {
      const n = getNumberOfMatches(state.winningNumbers, state.playerNumbers)
      switch (n) {
        case 2: 
          state.matches.two += 1
          break
        case 3: 
          state.matches.three += 1
          break
        case 4: 
          state.matches.four += 1
          break
        case 5: 
          state.matches.five += 1
          state.hitTheJackPot = true
          state.isDrawing = false
          clearInterval(state.timeOut)
          // todo
          break
      }
    }
  },

  actions: {
    generatePlayerNumbers({ commit }) {
      const arr = generateRandomNumbers() // todo
      commit('setUserNumbers', arr)
    },
    drawing({ commit, state }) {
      state.isDrawing = true
      let counter = 0
      state.timeOut = setInterval(() => {
        const nums = generateRandomNumbers()
        counter++

        commit('updateData', {winningNums: nums, ticketsNum: counter})
        commit('setMatches')
        
      }, state.speed)
    }
  },
  
  modules: {
  }
})
