function aspectRatio(x,y){
    const ratio = Math.ceil((y * 16) / 9)
    console.log(`${ratio}:${y}`)
    return `${ratio}:${y}`
}

aspectRatio(640, 480);