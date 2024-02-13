

import React, { useState } from "react";
import MapContainer from "../components/map/mapView";
import { Button, Grid, Box, Select, SelectChangeEvent } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { BergenArea } from "../constants/bergenArea";
import { TrondheimArea } from "../constants/trondheimArea";

import { MilanoArea } from "../constants/milanoArea";
import getStationsOfArea from "../api/getStationsOfArea";
import { gbfsArea } from "../models/gbfsArea";
import getAreaInformation from "../api/getStationsOfArea";
import BookingDialog from "../components/areaInformationPopup";
import getSystemInformation from "../api/getSystemInformation";
import { OsloArea } from "../constants/osloArea";


export default function MapScreen() {
    const [area, setArea] = useState<gbfsArea>(OsloArea)
    const [openDialog, setOpenDialog] = useState(false)

    function handleChangeArea(area: gbfsArea) {
        setArea(area)
        getSystemInformation(area)
        getStationsOfArea(area)
        getAreaInformation(area)

    }

    const areas = [BergenArea, OsloArea, TrondheimArea, MilanoArea]

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
        getAreaInformation(area)
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }


    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Box style={{ position: "absolute", top: 0, right: 0, width: "500px", borderRadius: "20px", zIndex: 1, backgroundColor: "white" }}>
                <Grid container
                    direction="row" alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={8}>
                        <FormControl fullWidth style={{ alignSelf: "stretch" }}>
                            <InputLabel id="demo-simple-select-label">Area</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={area}
                                defaultValue={area}
                                label="No selected area"
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
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" style={{ alignSelf: "stretch" }} onClick={handleShowAreaInformation}>See
                            area info</Button>
                    </Grid>

                    <BookingDialog
                        handleClose={handleClose}
                        open={openDialog} area={area}
                    />

                </Grid>
            </Box>
            <MapContainer
                {...area} />
        </div>
    )
}
