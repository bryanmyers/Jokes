const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')

app.use(express.json())

require('./config/mongoose.config.js')

require('./routes/joke.routes')(app) //the joke.routes controller uses app and this is how you send it over

app.listen(port, () => console.log(`Server running on port ${port}`))