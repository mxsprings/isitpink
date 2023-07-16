var namer = require('color-namer')

// console.log(names.basic)

function isItPink(hex) {
    if (!hex) {
        throw new Error('bffr.')
    }

    const result = namer(hex).basic.find(e => e.name === 'pink')

    const answer = result.distance <= 25 ? 'yes!' : 'no D:'

    console.log('is ' + hex + ' pink?\n', answer)
    console.log(result.distance)
}

isItPink('#FF9999')