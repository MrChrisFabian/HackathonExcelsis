const fetch = require('node-fetch');

let data;

fetch('https://excelsisdev.github.io/desafiocode/db.json')
    .then(response => response.json())
    .then(json => data = json);

const cityIndexMap = {
    'central': 0,
    'boqueron': 1,
    'caaguazu': 2
}
const dayIndexMap = {
    'hoy': 0,
    'domingo': 1,
    'lunes': 2,
    'martes': 3
}

const getCityDayData = (city, day) => {
    const indexDay = dayIndexMap[day]
    return (getCityData(city).pronostico_extendido_list[indexDay])


}
const getCityData = (city) => {

    const index = cityIndexMap[city]
    return data.departamento_list[index]

}

const conditionTemp = (day) => {
    return (day.main.temp >= 10 && day.main.temp <= 25)
}

const conditionWeather = (day) => {
    return (day.clima[0].id > 1 && day.clima[0].id < 5)
}

const conditionWind = (day) => {
    return (day.viento.velocidad < 40)
}

const getAlertType = (day) => {
    if (conditionWeather(day) && conditionTemp(day) && conditionWind(day)) {
        return "optimo"
    }
    if (conditionWeather(day) && (conditionWind(day) || conditionTemp(day))) {
        return "precaucion"
    }
    if (!conditionWeather(day)) {
        return "precaucion"
    }
    if (!conditionWeather(day) && !conditionTemp(day) && !conditionWind(day)) {
        return "peligroso"
    }
}

const celsiusToFarenheit = (cel) => {
    return far(cel * 9 / 5) + 32
}

module.exports = {
    weatherCity: (req, res) => {
        const city = req.params.city
        res.send(getCityData(city))
    },
    weatherCityExt: (req, res) => {
        const city = req.params.city
        res.status(200).send(getCityData(city).pronostico_extendido_list)
    },
    weatherGetAlert: (req, res) => {
        const city = req.params.city
        const day = req.params.day
        const dataDay = getCityDayData(city, day)
        if (dataDay != null) {
            res.send(getAlertType(dataDay));
        } else {
            res.status(404).send('No pudimos encontrar información lo sentimos')
        }
    }
}
