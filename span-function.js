//The Span Function

function isEven (x) {
    return Math.abs(x) % 2 === 0;
}

var arr = [13, 17, 19, 11, 21];

function span(arr, predicate) {
    let arr1 = []
    let arr2 = []
    let lastIndex = 0

    for (let i = 0; i < arr.length; i++) {
        if( predicate(arr[i]) ) {
            arr1.push(arr[i])
        }
        else {
            lastIndex = i
            break
        }
    }
    if (lastIndex === 0) {
        arr1 = arr
    } else {
        arr2 = arr.slice(lastIndex)
    }
    return [arr1, arr2]
}

span(arr, isEven)

// This is true
//span(arr, isEven) === [[2,4,6],[1,8,10]]

function spanBest(arr, predicate) {
    for (var i = 0; i < arr.length; i++) {
        if (!predicate(arr[i])) break
    }

    return [
        arr.slice(0, i),
        arr.slice(i)
    ]
}
