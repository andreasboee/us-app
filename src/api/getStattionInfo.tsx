import { gbfsStation } from "../models/stations";


export default function getStationInfo(station: gbfsStation) {

    const axios = require('axios');

    const response = axios.get(station.stationId, {
        headers: {
            "Client-Identifier": "IDENTIFIER"
        }

    })
        .then(function (response: any) {
            console.log(response);
        })
        .catch(function (error: any) {
            console.log(error);
        });

}