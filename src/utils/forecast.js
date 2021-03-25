const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5ca02ac8f023d34d84de5ccb0df4de2e&query=' + latitude + ',' + longitude
    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.feelslike + '% chance of rain.')
        }
    })
}

module.exports = forecast