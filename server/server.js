const express = require('express')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT

const ROUTES = require('../server/routes/weather.routes')
app.use('/weather', ROUTES)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));