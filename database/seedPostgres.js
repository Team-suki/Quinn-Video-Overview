const fs = require('fs')

var read = fs.createReadStream('./finaldata.json', { start: 0, end: 99 }).on('open', ()=>{
})

//read.read(0).then((data)=> console.log(data))

read.close()

