function mergeArrays(a, b) {
    const arr = a.concat(b).sort((a, b) => a - b )

    console.log(Array.from(new Set(arr)))
    return Array.from(new Set(arr))
}

mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]