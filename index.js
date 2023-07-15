const appName = 'isitpink.com'
console.log('This is ' + appName + '!') 
console.log(`This is ${appName}`)

function isItPink(color) {
  if (!color){
    throw new Error('be fucking for real')
  }

  const _color = color.toLowerCase()

  const isPink = _color === 'pink' 

  console.log(`is it pink? ${_color} : ${isPink ? 'Yes!' : 'no :('}`)

  if (isPink) {
    return true
  }
  else {
    return false
  }
  

}

const isPinkPink = isItPink('pInK')

console.log(isPinkPink)