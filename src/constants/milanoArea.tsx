import { gbfsArea } from "../models/gbfsArea";

export const MilanoArea: gbfsArea = {
    areaName: "Milano",
    baseUrl: " https://gbfs.urbansharing.com/bikemi.com/",
    stationInfoSubUrl: "station_information.json",
    stationStatusUrl: "station_status.json",
    systemInformationUrl: "system_information.json",
    identifier: "IDENTIFIER",
    key: "3",
    pos: {
        lat: 45.468001526736174,
        lng: 9.187342216048727
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