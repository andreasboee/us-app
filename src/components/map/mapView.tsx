
import React, { useRef, useState } from "react";
import { gbfsArea } from "../../models/gbfsArea";
import GoogleMapReact from "google-map-react";
import StationMarker from "../markers/stationMarker";
import { Station } from "../../models/stations";
import StationInfoPupup from "../stationInfoPopup";


const Marker = ({ children, lat, lng }: { children: any, lat: number, lng: number }) => children

export default function MapView(area: Readonly<gbfsArea>, stations: Station[]) {
    const [openStationDialog, setOpenStationDialog] = useState(false)

    function handleCloseStationInformation() {

        setOpenStationDialog(false)

    }

    function handleOpenStationInformation() {
        setOpenStationDialog(true)
        console.log("2set to true")
    }

    const mapRef = useRef()

    const mapConf = {
        center: {
            lat: area.pos.lat,
            lng: area.pos.lng,
        },
        zoom: area.zoom,
    }
    const maxZoom = 20






    return (
        <div>
            {
                <StationInfoPupup
                    handleClose={handleCloseStationInformation}
                    open={openStationDialog} />}
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
                <Marker
                    key={`station-1`}
                    lat={59.91259870038957}
                    lng={10.748226613489681}>

                    <StationMarker onClick={handleOpenStationInformation} capacity={10} />
                </Marker>


                {stations.length &&
                    stations.map(station => {
                        console.log("has length")
                        const latitude = station.lat
                        const longitude = station.lon
                        return (
                            <Marker
                                key={`station-${station.station_id}`}
                                lat={latitude}
                                lng={longitude}>
                                {station.capacity}
                                <StationMarker onClick={handleOpenStationInformation} capacity={station.capacity} />
                            </Marker>
                        )
                    })}
            </GoogleMapReact>
        </div >
    )
}
