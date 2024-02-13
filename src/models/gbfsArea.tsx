
export interface gbfsArea {
    areaName: string,
    baseUrl: string,
    operator: string,
    phoneNumber: string,
    email: string,
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