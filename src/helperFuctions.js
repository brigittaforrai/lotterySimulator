const generateRandomNumbers = (n = 5) => {
    const min = 1
    const max = 90
    let result = []

    while (result.length < n) {
        const arr = crypto.getRandomValues(new Uint32Array(1))
        const fixed = min + (max - min + 1) * arr[0] /2**32 | 0

        if (result.indexOf(fixed) === -1) {
            result.push(fixed)
        }
    }
    return result
  }

  const getNumberOfMatches = (winning, player) => {
    // to simulate hitTheJackpot return 5
    // return 5 
    return winning.filter((n) => player.indexOf(n) !== -1).length
  }

  export {
    generateRandomNumbers,
    getNumberOfMatches
  }