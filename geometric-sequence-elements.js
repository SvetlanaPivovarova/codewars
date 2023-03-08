function geometricSequenceElements(a, r, n){
    let arr = [a]
    for (let i = 1; i < n; i++) {
        let element = arr[i-1] * r
        arr.push(element)
    }

    return arr.join(', ')
}

geometricSequenceElements(2, 3, 5)
