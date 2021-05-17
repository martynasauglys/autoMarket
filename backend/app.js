const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')
var bodyParser = require('body-parser')
var cors = require('cors')

const port = 3001

mongoose.connect(
    'mongodb+srv://martynas:MDTFWNTM9zJJOu5B@cluster0.tzxa4.mongodb.net/auto-market-webapp?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
)

app.use(cors())

app.use(bodyParser.json())
app.use('/v1', routes)
app.use('/images', express.static('images'))

app.listen(port, () => {
    console.log(`server running on ${port} and yo mama is phat`)
})
