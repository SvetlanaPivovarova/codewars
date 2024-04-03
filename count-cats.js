function countCats(arg) {
    const arr = arg.flat()
    const result = arr.filter((word) => word === '^^');
    let cats = result.length ? result.length : 0
    console.log(cats)
    return cats
}

countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
])