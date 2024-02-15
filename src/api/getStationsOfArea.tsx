import { gbfsArea } from "../models/gbfsArea";
import axios from 'axios';
import { Station } from "../models/stations";



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
    return result



}
