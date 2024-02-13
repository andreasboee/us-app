import { gbfsArea } from "../models/gbfsArea";
import axios from 'axios';

export default function getAreaInformation(area: gbfsArea) {

    const getStationStatus = async () => axios.get(area.baseUrl + area.stationStatusUrl,)
        .then((res: { data: any; }) => console.log(res.data))
        .catch((err: any) => console.error(err));

    return getStationStatus()

}
