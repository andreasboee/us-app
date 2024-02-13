import { gbfsArea } from "../models/gbfsArea";
import axios from 'axios';


interface Station {
    address: string,
    capacity: number,
    cross_street: string,
    is_virtual_station: boolean,
    lat: number,
    lon: number,
    name: string,
    rental_uris: {
        android: string,
        ios: string
    }
    station_area: {
        type: string,
        coordinates: [[number, number]]
    }
    station_id: string
}

/*
  address: "Valle Vision"
  capacity: 21
  cross_street: "Valle"
  is_virtual_station: false
  lat: 59.91606483663281
  lon: 10.807177606311825
  name: "Valle Vision"
  rental_uris: Object { android: "oslobysykkel://stations/4683", ios: "oslobysykkel://stations/4683" }
  station_area: Object { type: "MultiPolygon", coordinates: (1) […] }
  station_id: "4683"


 */

interface ResponseStructure {
    last_updated: number,
    ttl: number,
    version: string,
    data: {
        stations: Station[]
    }
}

export default async function getSystemInformation(area: gbfsArea) {
    const result = await axios.get(area.baseUrl + area.systemInformationUrl).then(res => res.data as ResponseStructure)
        .catch((err: any) => {
            console.error(err)
            return null
        });
    console.log(result)
    return result

}
