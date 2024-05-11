const express = require('express')
const { weatherCity, weatherCityExt } = require('../controller/weather.controller')

const weatherRouter = express.Router();

weatherRouter.get("/:city", weatherCity)
weatherRouter.get("/:city/data", weatherCityExt)
weatherRouter.get("/:city/alert")
module.exports = weatherRouter