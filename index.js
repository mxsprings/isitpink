const namer = require('color-namer')


// for (let i = 0; i < names.basic.length; i++) {
//   const element = names.basic[i];
  
//   if (element.name === 'pink'){
//     console.log(element)
//   }
// }

// for (const element of names.basic) {
//   if (element.name === 'pink'){
//     console.log(element)
//   }
// }

// names.basic.forEach((element) => {
//   if (element.name === 'pink'){
//     console.log(element)
//   }
// })

const appName = 'isitpink.com'
console.log('This is ' + appName + '!') 
// console.log(`This is ${appName}`)

function isItPink(hex) {
  if (!hex){
    throw new Error('be fucking for real')
  }

  const result = namer(hex).basic.find((e) => (e.name === 'pink'))
  
  const isPink = result.distance <= 10

  console.log(`is it pink? ${hex} : ${isPink ? 'Yes!' : 'no :('}`)

  return isPink
  
}
isItPink('#FFC0CC')
// const isPinkPink = isItPink('pInK')

//console.log(isPinkPink)
