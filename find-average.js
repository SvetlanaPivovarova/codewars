const findAverage = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        console.log(sum)
    }
    console.log(sum / nums.length )
    return (sum / (nums.length - 1))
}

findAverage([1])
