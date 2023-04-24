const choice = (arr) => arr[Math.floor(Math.random() * arr.length)]


const remove = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1)
      return arr[i]
    }
  }
}

export { choice, remove }
