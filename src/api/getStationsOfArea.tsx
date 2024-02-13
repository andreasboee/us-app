import { gbfsArea } from "../models/gbfsArea";
import axios from 'axios';

export default function getAreaInformation(area: gbfsArea) {

    const getStations = async () => axios.get(area.baseUrl + area.stationInfoSubUrl)
        .then((res: { data: any; }) => console.log(res.data))
        .catch((err: any) => console.error(err));

    return getStations()


}
