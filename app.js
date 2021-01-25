const lugar = require('./lugar/lugar.js');
const axios = require("axios");

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);
// argv.direccion

lugar.getLugarLatLng(argv.direccion)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));