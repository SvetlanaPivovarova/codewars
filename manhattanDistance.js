function manhattanDistance(pointA, pointB){
    let distance = 0
    distance = Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1])
    console.log(distance)
    return distance

    // или в одну строку
    // return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1])
}

manhattanDistance([1, 1], [0, 3])
