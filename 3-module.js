//  Modules
// commonjs, every file is module (by default)
// Modules - encapsulated code (only share minimum)
// require will run then function calls

const sayHi = (Personname) => {
    console.log(`Hello there ${Personname}`)
}

module.exports = sayHi

const data = require('./6-alternative-flavor')
console.log(data)