const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    try {
        const instance = axios.create({
            baseURL: "http://api.weatherapi.com/v1/current.json",
            // headers: { 'acces_token': 'pk.eyJ1IjoiamFjb29ibXIiLCJhIjoiY2trOGxneGtjMG91NDJ0bnk0NmY4NGFoOSJ9.JSYXnh6LG60sYI20_EzWpQ' }
            params: {
                key: "d7425a8f110846eaae7182125212501",
                q: encodedUrl,
            }
        });

        const resp = await instance.get()

        if (resp.data.error) {
            throw (`No hay resultads para ${ dir }`);
        }
        const data = resp.data.current;
        const direccion = resp.data.location;
        const respuesta = {
            lat: direccion.lat,
            long: direccion.lon,
            direccion: `${direccion.name}, ${direccion.region}, ${direccion.country}`,
            weather: data.temp_c,
        };

        return {
            respuesta
        };

    } catch (error) {
        return 'la direccion que intentas ingresar, no es valida'
    }

}

module.exports = {
    getLugarLatLng
}