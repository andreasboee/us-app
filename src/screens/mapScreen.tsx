

import React, { useState, useEffect } from "react";
import MapContainer from "../components/map/mapView";
import { Button, Grid, Box, Select, SelectChangeEvent, Typography, CircularProgress } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { BergenArea } from "../constants/bergenArea";
import { TrondheimArea } from "../constants/trondheimArea";

import { MilanoArea } from "../constants/milanoArea";
import getStationsOfArea from "../api/getStationsOfArea";
import { gbfsArea } from "../models/gbfsArea";
import getAreaInformation from "../api/getStationsOfArea";
import AreaInformationPopup from "../components/informationPopupElements/areaInformationPopup";
import getSystemInformation from "../api/getSystemInformation";
import { Station } from "../models/stations";
import getStationStatus from "../api/getStationStatus";
import { OsloArea } from "../constants/osloArea";

export default function MapScreen() {
    const [area, setArea] = useState<gbfsArea>(OsloArea)
    const [openDialog, setOpenDialog] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setIsLoaded(false)
            await updateStations(area)
            await getAreaInformation(area)
            setIsLoaded(true)
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [stations, setStations] = useState<Station[]>()

    async function handleChangeArea(area: gbfsArea) {

        setArea(area)
        await updateArea(area)
        await getAreaInformation(area)
        setIsLoaded(false)
        await updateStations(area)
        setIsLoaded(true)
    }

    async function updateStations(newArea: gbfsArea) {
        let newArray: Station[] = []
        const res = await getStationsOfArea(newArea)
        if (res?.data.stations.length) {
            newArray = (res.data.stations)
        }

        await getStationInfo(newArray, newArea)

    }

    async function updateArea(newArea: gbfsArea) {
        const res = await getSystemInformation(newArea)
        if (res) {
            setArea({
                ...newArea, system_id: res.data.system_id, language: res.data.language,
                operator: res.data.operator, timezone: res.data.timezone, phone_number: res.data.phone_number,
                rental_apps: res.data.rental_apps, last_updated: res.last_updated, ttl: res.ttl
            });
        }

    }

    async function getStationInfo(inputArray: Station[], newArea: gbfsArea) {
        if (inputArray?.length) {

            let newArray: Station[] = inputArray
            await getStationStatus(newArea).then(res => {
                if (res?.data.stations.length) {
                    newArray?.forEach((station) => {
                        const correspondingStationData = res.data.stations.find(function (i) {
                            return i.station_id === station.station_id
                        });
                        let num_vehicles_available = 0
                        let num_docks_available = 0
                        let is_renting = false
                        let is_returning = false
                        let vehicle_types_available: [{ vehicle_type_id: string, count: number }] = [
                            {
                                vehicle_type_id: "",
                                count: 0
                            }
                        ]
                        let last_reported = 0
                        if (correspondingStationData) {
                            num_vehicles_available = correspondingStationData.num_bikes_available
                            num_docks_available = correspondingStationData.num_docks_available
                            is_renting = correspondingStationData.is_renting
                            is_returning = correspondingStationData.is_returning
                            vehicle_types_available = correspondingStationData.vehicle_types_available
                            last_reported = correspondingStationData.last_reported

                        }
                        station.num_vehicles_available = num_vehicles_available
                        station.num_docks_available = num_docks_available
                        station.is_renting = is_renting
                        station.is_returning = is_returning
                        station.vehicle_types_available = vehicle_types_available
                        station.last_reported = last_reported

                        newArray = inputArray
                    });

                }

                setStations(newArray)



            })
        }
    }


    const areas = [
        BergenArea,
        OsloArea,
        TrondheimArea,
        MilanoArea]

    const handleChange = (event: SelectChangeEvent<gbfsArea>) => {


        const area = event.target.value;
        const areaObject = areas.find(areaObject => areaObject.areaName === area)

        if (!areaObject) {
            console.error("Area not found")
            return
        }

        handleChangeArea(areaObject);
    };

    const handleShowAreaInformation = () => {
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }




    return (
        <div style={{ height: "90vh", width: "90vw" }}>
            <Box style={{ position: "absolute", top: 5, right: 5, width: "700px", borderRadius: 6, zIndex: 1, backgroundColor: "#333333" }}>
                <Grid container
                    direction="row" alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={8}>
                        <Box style={{}}>
                            <FormControl fullWidth style={{ alignSelf: "stretch", backgroundColor: "#EEEEEE", opacity: 0.8, borderRadius: 6, border: "none" }}>
                                <InputLabel id="demo-simple-select-label">
                                    <Box marginLeft={2} marginTop={4} >
                                        <Typography align="left" variant="h5" color="#222222">
                                            {area.areaName}
                                        </Typography>
                                    </Box>
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={area}
                                    defaultValue={area}
                                    label="Area"
                                    onChange={handleChange}

                                >

                                    {areas.map(area => {
                                        return (
                                            <MenuItem key={area.key} value={area.areaName}>
                                                {area.areaName}
                                            </MenuItem>
                                        )
                                    })}

                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={2} margin={2}>
                        <Button style={{
                            borderRadius: 6,
                            backgroundColor: "#",
                            padding: "16px 16px",
                            fontSize: "14px",
                            width: "120px"

                        }} variant="contained" onClick={handleShowAreaInformation}>
                            Area info</Button>
                    </Grid>
                    <AreaInformationPopup
                        handleClose={handleClose}
                        open={openDialog} area={area}
                    />
                </Grid>
            </Box>
            {!isLoaded &&
                <Box sx={{
                    display: 'flex', alignItems: "center", justifyContent: "center", height: "100vh",
                }}>
                    <CircularProgress />
                </Box>}
            {isLoaded &&
                <MapContainer area={area}
                    stations={stations || [] as Station[]}
                />}

        </div >
    )
}
