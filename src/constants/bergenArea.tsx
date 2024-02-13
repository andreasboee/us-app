import { gbfsArea } from "../models/gbfsArea";

export const BergenArea: gbfsArea = {
    areaName: "Bergen",
    baseUrl: "https://gbfs.urbansharing.com/bergenbysykkel.no/",
    stationInfoSubUrl: "station_information.json",
    stationStatusUrl: "station_status.json",
    systemInformationUrl: "system_information.json",
    identifier: "IDENTIFIER",
    key: "1",
    pos: {
        lat: 60.391328912259645,
        lng: 5.324309228179251
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