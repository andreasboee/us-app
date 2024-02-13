

import React, { useState } from "react";
import MapContainer from "../components/map/mapView";
import { Button, Grid, Select, SelectChangeEvent } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { BergenArea } from "../constants/bergenArea";
import { TrondheimArea } from "../constants/trondheimArea";
import { OsloArea } from "../constants/osloArea";
import { MilanoArea } from "../constants/milanoArea";
import getStationsOfArea from "../api/getStationsOfArea";
import { gbfsArea } from "../models/gbfsArea";
import getAreaInformation from "../api/getStationsOfArea";
import BookingDialog from "../components/areaInformationPopup";


export default function MapScreen() {
    const [area, setArea] = useState<gbfsArea>(OsloArea)
    const [openDialog, setOpenDialog] = useState(false)

    function handleChangeArea(area: gbfsArea) {
        console.log(area)
        setArea(area)
        getStationsOfArea(area)

    }

    const areas = [BergenArea, OsloArea, TrondheimArea, MilanoArea]

    const handleChange = (event: SelectChangeEvent<gbfsArea>) => {
        handleChangeArea(event.target.value as gbfsArea);
    };

    const handleShowAreaInformation = () => {
        getAreaInformation(area)
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }


    return (
        <>
            <Grid container direction="column" margin={2} >
                <Grid container direction="row" justifyContent="flex-end">

                    <Grid item xs={2} margin={4}>

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
                    <Grid item xs={2} margin={4}>
                        <Button variant="contained" style={{ alignSelf: "stretch" }} onClick={handleShowAreaInformation}>See area info</Button>
                    </Grid>

                </Grid>
                <BookingDialog
                    handleClose={handleClose}
                    open={openDialog} area={area}
                />
                <MapContainer
                    {...area} />
            </Grid>

        </>
    )
}