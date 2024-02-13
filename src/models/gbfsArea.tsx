
export interface gbfsArea {
    ttl: number,
    last_updated: number,
    system_id: string,
    language: string,
    areaName: string,
    baseUrl: string,
    operator: string,
    phone_number: string,
    timezone: string,
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
    stationInfoSubUrl: string,
    stationStatusUrl: string,
    systemInformationUrl: string,
    identifier: string,
    key: string,
    pos: {
        lat: number,
        lng: number
    },
    zoom: number
}