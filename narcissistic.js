function narcissistic(value) {
    let arr = Array.from(value.toString())
    const length = arr.length
    let sum = 0
    for (let i = 0; i < length; i++) {
        sum = sum + arr[i] ** length
    }
     return (value === sum)
}

narcissistic(1652)

function narcissisticBest(value) {
    return value.toString()
            .split('')
            .map( (x,i,arr) => x ** arr.length)
            .reduce( (a,b)=> +a + +b)
        === value
}
