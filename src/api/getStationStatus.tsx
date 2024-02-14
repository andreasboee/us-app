import { gbfsArea } from "../models/gbfsArea";
import axios from 'axios';

export interface StationResponseStructure {
    last_updated: string,
    data: {
        stations: [
            {
                is_installed: boolean,
                is_renting: boolean,
                num_bikes_available: number,
                num_docks_available: number,
                last_reported: number,
                is_returning: boolean,
                station_id: string,
                vehicle_types_available: [
                    {
                        vehicle_type_id: string,
                        count: number
                    }
                ]
            }
        ]
    }
}

export default async function getStationStatus(area: gbfsArea) {

    const result = await axios.get(area.baseUrl + area.stationStatusUrl).then(res => res.data as StationResponseStructure)
        .catch((err: any) => {
            console.error(err)
            return null
        });

    // console.log(result?.last_updated)
    return result

}

