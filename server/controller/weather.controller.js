const data = require('../data/db.json');

const cityIndexMap = {
    'central': 0,
    'boqueron': 1,
    'caaguazu': 2
}
const getCityData = (city) => {

    const index = cityIndexMap[city]
    return data.departamento_list[index]

}
module.exports = {
    weatherCity: (req, res) => {
        const city = req.params.city
        res.status(200).send(getCityData(city))
    },
    weatherCityExt: (req, res) => {
        const city = req.params.city
        res.status(200).send(getCityData(city).pronostico_extendido_list)
    },
}