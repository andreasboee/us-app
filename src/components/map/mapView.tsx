
import React, { useEffect, useRef, useState } from "react";
import { gbfsArea } from "../../models/gbfsArea";
import GoogleMapReact from "google-map-react";
import { Station } from "../../models/stations";
import StationInfoPupup from "../stationInfoPopup";
import StationMarker from "../markers/stationMarker";

const Marker = ({ children, lat, lng }: { children: any, lat: number, lng: number }) => children

export default function MapView(props: { area: gbfsArea; stations: Station[]; }) {
    const [openStationDialog, setOpenStationDialog] = useState(false)
    const mapRef = useRef<any>()

    const { area, stations } = props


    useEffect(() => {
        console.log("stations", stations)
    }, [stations])

    useEffect(() => {
        mapRef.current?.setCenter({ lat: area.pos.lat, lng: area.pos.lng })
    }, [area]);


    function handleCloseStationInformation() {
        setOpenStationDialog(false)
    }

    function handleOpenStationInformation() {
        setOpenStationDialog(true)

    }

    const mapConf = {
        center: {
            lat: area.pos.lat,
            lng: area.pos.lng,
        },
        zoom: area.zoom,
    }
    const maxZoom = 20

    function DisplayMarkers({ onClick, capacity }: { onClick: any, capacity: number }) {
        if (stations.length) {
            return (
                <Marker
                    key={`station-1`}
                    lat={stations[0].lat}
                    lng={stations[0].lon}>

                    <StationMarker onClick={handleOpenStationInformation} capacity={10} />
                </Marker>)
        }
        return <div />
    }





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
                <DisplayMarkers onClick={handleOpenStationInformation} capacity={20} />
                <Marker
                    key={`station-1`}
                    lat={59.92}
                    lng={10.748226613489681}>

                    <StationMarker onClick={handleOpenStationInformation} capacity={10} />
                </Marker>

                {/* {stations.length &&
                    stations.map((station) => {
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
                    })} */}

                {/* {stations.map(station => {
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
                })} */}
            </GoogleMapReact>
        </div >
    )
}
