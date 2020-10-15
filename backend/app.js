const express = require('express')
const app = express()
const port = 5000
let request = require ('request')

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/getAPI', (req, res) => {
    request('https://rickandmortyapi.com/api/character',
     function (error, response, body){
        if (!error && response.statusCode == 200) {
            let parseBody = JSON.parse(body)
            let character = parseBody["results"]
            res.send({character})
        }
      }
    )
  })







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})