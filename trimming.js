function trim(str, size) {
    let arr = Array.from(str)
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i])


        if (size <= 3) {
            if (i === size - 1) {
                res.push('...')
                break
            }
        }
        else if(i === (size - 1 - 3)) {
            res.push('...')
            break
        }
    }

    console.log(res.join(''))
    return res.join('');
}

trim("Creating kata is fun", 14)
trim("Code Wars is pretty rad", 50)
trim("He", 1)