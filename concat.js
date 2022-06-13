const lodash=require('lodash')
const numbers = require('./numbers');
const jsonconverted = require('./Converted');


const combined = lodash.concat(jsonconverted.data,numbers)
console.log(combined)

module.exports=combined;