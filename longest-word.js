function longestWord(stringOfWords){
    const arr = stringOfWords.split(' ')
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length >= result.length) {
            result = arr[i]
        }
    }
    console.log(result)
    return result
}

longestWord('qtzpttbwczcgj gpwpx crxndqmhbkd df yylualy gubomzdjxicx')