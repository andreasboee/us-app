import { gbfsArea } from "../models/gbfsArea";
import axios from 'axios';

interface ResponseStructure {
    last_updated: number,
    ttl: number,
    version: string,
    data: {
        system_id: string,
        language: string,
        name: string,
        operator: string,
        timezone: string,
        phone_number: string,
        email: string,
        rental_apps: {
            android: {
                discovery_uri: string,
                store_uri: string
            },
            ios: {
                discovery_uri: string,
                store_uri: string
            }
        }
    }

}

export default async function getSystemInformation(area: gbfsArea) {
    const result = await axios.get(area.baseUrl + area.systemInformationUrl).then(res => res.data as ResponseStructure)
        .catch((err: any) => {
            console.error(err)
            return null
        });

    return result

}
