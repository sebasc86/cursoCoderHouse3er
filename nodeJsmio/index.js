const fs = require('fs')

const file = fs.readFileSync(`${__dirname}/archivo.txt`)
//el sync es modo bloqueante no lo va a poder usar otro se bloquea
// la forma correcta es readFile 

const fileAsync = fs.readFile(`${__dirname}/archivo.txt`, (err, data) => {
    console.log(data.toString())
})

console.log('hola chicos')

console.log(file.toString(fileAsync))

// en node el segundo parametro a pasar una funcion es un error 


let fsWatch = fs.watch(`${__dirname}/archivo.txt`, (event, filename) => {
    console.log(event);
    fs.readFile(`${__dirname}/archivo.txt`, (err, data) => {
        if (err) {
            throw err
        }
        console.log(filename)
        console.log(data.toString())
    })
})