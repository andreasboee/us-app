import { gbfsArea } from "../models/gbfsArea";

export default function getAreaInformation(area: gbfsArea) {

    const axios = require('axios');

    // instance.defaults.headers.common['Authorization'] = area.identifier;
    // axios.defaults.headers.post['Client-Identifier'] = area.identifier;
    const getSystemInformation = async () => axios.get(area.baseUrl + area.systemInformationUrl, {
        headers: {
            'Client-Identifier': area.identifier,
        }
    })
        .then((res: { data: any; }) => console.log(res.data))
        .catch((err: any) => console.error(err));


    return getSystemInformation

}