

import { Box, Grid, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Station } from "../../models/stations"


export const AvailableVehicles = (props: { station?: Station }) => {

    const [vehicleTypes, setTypes] = useState<VehicleType[]>([])

    interface VehicleType {
        vehicle_type_id: string,
        count: number
    }

    useEffect(() => {
        GetVehicleTypes()
    })

    function GetVehicleTypes() {
        const types: VehicleType[] = []
        if (props.station?.vehicle_types_available) {
            props.station?.vehicle_types_available.forEach((type: VehicleType) => types.push(type));
            setTypes(types)
        }
    }

    return (
        <Box marginTop={1} marginBottom={1}>
            {(vehicleTypes.length !== 0) ? (
                <Typography variant="h6" color="000">
                    Available Vehicle Types
                </Typography>) : <div />
            }
            {
                vehicleTypes.length !== 0 && vehicleTypes.map((type) => {
                    return (

                        <Box style={{ borderRadius: 6, zIndex: 1, backgroundColor: "#DCDCDC", marginTop: 20, marginBottom: 20, padding: 20 }}>

                            <Grid container direction="row" spacing={1} padding={0.5}>
                                <Grid item xs >
                                    <Typography variant="body2" color="#000">
                                        {type.vehicle_type_id} :
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2" color="#000">
                                        {type.count}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                })
            }



        </Box >)
}
