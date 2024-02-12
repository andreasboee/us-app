

import React, { useState } from "react";
import MapContainer from "../components/map/mapView";
import { Grid, Select, SelectChangeEvent } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { BergenArea } from "../constants/bergenArea";
import { TrondheimArea } from "../constants/trondheimArea";
import { OsloArea } from "../constants/osloArea";
import getStationsOfArea from "../api/getStationsOfArea";
import { gbfsArea } from "../models/gbfsArea";


export default function MapScreen() {
    const [area, setArea] = useState<gbfsArea>()

    function handleChangeArea(area: gbfsArea) {
        console.log(area)
        setArea(area)
        getStationsOfArea(area)

    }

    const areas = [BergenArea, OsloArea, TrondheimArea]

    const handleChange = (event: SelectChangeEvent<gbfsArea>) => {
        handleChangeArea(event.target.value as gbfsArea);
    };


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
                                label="No selected area"
                                onChange={handleChange}
                            >
                                {Object.keys(areas).length
                                    ? areas.map((mItem) => (
                                        <MenuItem key={mItem.key}>
                                            {mItem.areaName}
                                        </MenuItem>
                                    ))
                                    : null}

                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
                <MapContainer />
            </Grid>

        </>
    )
}