import { createStore } from 'vuex'
import { generateRandomNumbers, getNumberOfMatches } from '../helperFuctions.js'

const TICKET_PRICE = 300
const WEEKS_PER_YEAR = 52

export default createStore({
  state: {
    drawingInterval: null,
    numberOfTickets: 0,
    yearsSpent: 0,
    costOfTickets: 0,
    usingRandom: true,
    speed: 300,
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

  mutations: {
    pause(state) {
      clearInterval(state.drawingInterval)
      state.isDrawing = false
    },
    // stop(state) {
    //   clearInterval(state.drawingInterval)
    //   state.isDrawing = false
    //   state.numberOfTickets = 0
    //   state.costOfTickets = 0
    //   state.yearsSpent = 0
    //   for (const [key, value] of Object.entries(state.matches)) {
    //     state.matches[key] = 0
    //   }
    // },
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
    updateData(state) {
      const n = state.numberOfTickets
      state.costOfTickets = n * TICKET_PRICE
      state.yearsSpent = Math.floor(n/WEEKS_PER_YEAR)
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
          // todo
          state.matches.five += 1
          state.hitTheJackPot = true
          state.isDrawing = false
          clearInterval(state.drawingInterval)
          break
      }
    }
  },

  actions: {
    generatePlayerNumbers({ commit }) {
      commit('setUserNumbers', generateRandomNumbers())
    },
    drawing({ commit, state }) {
      if (state.isDrawing) {
        return
      }

      let maxSpeedVal = 1000
      let speedReversed = maxSpeedVal - state.speed

      state.isDrawing = true
      state.drawingInterval = setInterval(() => {
        state.winningNumbers = generateRandomNumbers()
        state.playerNumbers = state.usingRandom ? generateRandomNumbers() : state.playerNumbers
        state.numberOfTickets++
        commit('updateData')
        commit('setMatches')
      }, speedReversed)
    }
  },

  getters: {
  },
  
  modules: {
  }
})
