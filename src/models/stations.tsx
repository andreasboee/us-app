
export interface Station {
    address: string,
    capacity: number,
    cross_street: string,
    is_virtual_station: boolean,
    lat: number,
    lon: number,
    name: string,
    rental_uris: {
        android: string,
        ios: string
    }
    station_area: {
        type: string,
        coordinates: [[number, number]]
    }
    station_id: string,
    is_installed: boolean,
    is_renting: boolean,
    is_returning: boolean,
    last_reported: number,
    num_vehicles_available: number
    num_docks_available: number,
    vehicle_types_available: [
        {
            vehicle_type_id: string,
            count: number
        }
    ]
}