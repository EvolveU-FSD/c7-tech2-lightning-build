const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let count = 0

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/countEndpoint', (req, res) => {
    res.send(''+count)
})

app.get('/incrementEndpoint', (req, res) => {
    count++
    console.log('Incremented server count to ', count)
    res.send(''+count)
})

app.get('/decrementEndpoint', (req, res) => {

    if (count > 0) {
        count --
    }
    
    console.log('Decremented server count to ', count)
    res.send(''+count)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
