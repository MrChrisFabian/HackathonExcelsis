const express = require('express')
const { weatherCity, weatherCityExt, weatherGetAlert } = require("../controller/weather.controller")
const weatherRouter = express.Router();

weatherRouter.get("/:city", weatherCity)
weatherRouter.get("/:city/data", weatherCityExt)
weatherRouter.get("/:city/:day/alert", weatherGetAlert)
module.exports = weatherRouter