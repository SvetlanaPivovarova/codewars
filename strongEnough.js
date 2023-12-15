function strongEnough(earthquake, age) {
let strength = 1000
    let sila = []
    for (let i = 0; i < earthquake.length; i++) {
        const sum = earthquake[i].reduce(function (currentSum, currentNumber) {
            return currentSum + currentNumber
        }, 0)
        sila = [...sum]
        console.log(sila)
    }
}

strongEnough([[5,3,7],[3,3,1],[4,1,2]], 2)