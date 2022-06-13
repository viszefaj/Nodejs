const data = require('./data.json');
const fs = require('fs');


const  jsonconverted = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

module.exports=jsonconverted;