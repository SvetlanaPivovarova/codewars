const bearFur = (bears) => {
    const furColors = {
        black: {
            black: 'black',
            brown: 'dark brown',
            white: 'grey'
        },
        brown: {
            black: 'dark brown',
            brown: 'brown',
            white: 'light brown'
        },
        white: {
            black: 'grey',
            brown: 'light brown',
            white: 'white'
        }
    }

    if (furColors[bears[0]] && furColors[bears[0]][bears[1]]) {
        return furColors[bears[0]][bears[1]]
    } else return 'unknown'
};

console.log(bearFur(['brown', 'white']))