import { gbfsArea } from "../models/gbfsArea";
import axios from 'axios';

interface ResponseStructure {
    last_updated: string,
    data: {
        stations: [
            is_installed: number,
            is_renting: number,
            num_bikes_available: number,
            num_docks_available: number,
            last_reported: number,
            is_returning: number,
            station_id: number
        ]
    }
}

export default async function getStationStatus(area: gbfsArea) {

    const result = await axios.get(area.baseUrl + area.stationStatusUrl).then(res => res.data as ResponseStructure)
        .catch((err: any) => {
            console.error(err)
            return null
        });
    console.log(result)
    return result

}

