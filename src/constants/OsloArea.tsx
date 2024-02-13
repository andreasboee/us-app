import { gbfsArea } from "../models/gbfsArea";

export const OsloArea: gbfsArea = {
    areaName: "Oslo",
    baseUrl: " https://gbfs.urbansharing.com/oslobysykkel.no/",
    stationInfoSubUrl: "station_information.json",
    stationStatusUrl: "station_status.json",
    systemInformationUrl: "system_information.json",
    identifier: "IDENTIFIER",
    key: "2",
    pos: {
        lat: 59.92259870038957,
        lng: 10.748226613489681
    },
    zoom: 12,
    operator: "",
    phone_number: "",
    email: "",
    system_id: "",
    language: "",
    timezone: "",
    rental_apps: {
        android: {
            discovery_uri: "",
            store_uri: ""
        },
        ios: {
            discovery_uri: "",
            store_uri: ""
        }
    },
    last_updated: 0,
    ttl: 0
}