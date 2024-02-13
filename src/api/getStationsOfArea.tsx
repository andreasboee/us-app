import { gbfsArea } from "../models/gbfsArea";
import axios from 'axios';

export interface Station {
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

interface ResponseStructure {
    last_updated: number,
    ttl: number,
    version: string,
    data: {
        stations: Station[]
    }
}

export default async function getStationInformation(area: gbfsArea) {

    const result = await axios.get(area.baseUrl + area.stationInfoSubUrl).then(res => res.data as ResponseStructure)
        .catch((err: any) => {
            console.error(err)
            return null
        });
    // console.log(result?.data.stations[0])
    return result



}
