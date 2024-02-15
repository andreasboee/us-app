
import React, { useEffect, useRef, useState } from "react";
import { gbfsArea } from "../../models/gbfsArea";
import GoogleMapReact from "google-map-react";
import { Station } from "../../models/stations";
import StationInfoPupup from "../informationPopupElements/stationInfoPopup";
import StationMarker from "../markers/stationMarker";

const Marker = ({ children, lat, lng }: { children: any, lat: number, lng: number }) => children

export default function MapView(props: { area: gbfsArea; stations: Station[]; }) {
    const [openStationDialog, setOpenStationDialog] = useState(false)
    const [selectedStation, setSelectedStation] = useState<Station>()
    const mapRef = useRef<any>()

    const { area, stations } = props


    useEffect(() => {

    }, [stations])

    useEffect(() => {
        mapRef.current?.setCenter({ lat: area.pos.lat, lng: area.pos.lng })
    }, [area]);


    function handleCloseStationInformation() {
        setOpenStationDialog(false)
    }


    const handleOpenStationInformation = (station: Station) => {

        setSelectedStation(station)
        setOpenStationDialog(true)
    };

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
                    open={openStationDialog}
                    station={selectedStation} />}
            <GoogleMapReact
                bootstrapURLKeys={{ "key": "AIzaSyDvw2J0bsXCGiodf8aT4rQxbKoWTOmCwGA" }}
                center={mapConf.center}
                zoom={mapConf.zoom}
                options={(map) => ({
                    mapTypeId: map.MapTypeId.HYBRID,
                    fullscreenControl: false,
                    zoomControl: true,
                    maxZoom,
                })}
                style={{ height: "100%", width: "100vw" }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map }) => {
                    mapRef.current = map
                }}


            >

                {stations.length &&
                    stations.map((station) => {
                        const latitude = station.lat
                        const longitude = station.lon

                        return (
                            <Marker

                                key={`station-${station.station_id}`}
                                lat={latitude}
                                lng={longitude}>
                                {station.capacity}
                                <StationMarker station={station} onClick={() => { handleOpenStationInformation(station) }} />
                            </Marker>
                        )
                    })}


            </GoogleMapReact>
        </div >
    )
}
