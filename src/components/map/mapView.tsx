
import React, { useRef } from "react";
import { gbfsArea } from "../../models/gbfsArea";
import GoogleMapReact from "google-map-react";
import StationMarker from "../markers/stationMarker";
import { Station } from "../../api/getStationsOfArea";



export default function MapView(area: Readonly<gbfsArea>, stations: Readonly<Station>[]) {
    const mapRef = useRef()

    const mapConf = {
        center: {
            lat: area.pos.lat,
            lng: area.pos.lng,
        },
        zoom: area.zoom,
    }
    const maxZoom = 20

    const Marker = (props: any) => {
        return <div className="SuperAwesomePin"></div>
    }





    return (
        <div>
            <GoogleMapReact
                bootstrapURLKeys={{ "key": "AIzaSyDvw2J0bsXCGiodf8aT4rQxbKoWTOmCwGA" }}
                defaultCenter={mapConf.center}
                defaultZoom={mapConf.zoom}
                options={(map) => ({
                    mapTypeId: map.MapTypeId.HYBRID,
                    fullscreenControl: false,
                    zoomControl: false,
                    maxZoom,
                })}
                style={{ height: "100%", width: "100vw" }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map }) => {
                    mapRef.current = map
                }}

            >
                {/* {stations.map((station) => {
                    const latitude = station.lat
                    const longitude = station.lon
                    return (
                        <Marker latitude={latitude} longitude={longitude}>
                            <StationMarker onClick={console.log("click")} />
                        </Marker>
                    )
                }
                )} */}
                <Marker lat={59.92259870038957} lng={10.748226613489681} />
                <StationMarker onClick={console.log("click")} />



            </GoogleMapReact>
        </div >
    )
}
