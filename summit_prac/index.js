const fs = require('fs');

const ourreadstrem = fs.createReadStream(`${__dirname}/data.txt`);
ourreadstrem.on('data',(chunk)=>{
    console.log(chunk.toString()); // " utf8 "parameter use na korle  "data.toString()" 

})

console.log('hello');