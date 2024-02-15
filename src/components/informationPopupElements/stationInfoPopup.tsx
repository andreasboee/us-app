import React from "react"
import Dialog from "@mui/material/Dialog"
import { Box, DialogActions, DialogContent, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { DialogTitle } from "../dialogTitle"
import { Station } from "../../models/stations"
import { CustomTextField } from "./textfield"
import { AvailableVehicles } from "./availableVehicles"


const CustomDialog = styled(Dialog)(({ theme }) => ({
    minWidth: "580px",
}))

export default function StationInfoPupup(props: { handleClose: () => void; open: boolean, station?: Station }) {





    return (
        <div>
            <Box style={{
                zIndex: 10,
                backgroundColor: "#DCDCDC",
                opacity: 0.6,
                maxWidth: "100vw",
                minWidth: "560px",

                border: "1px",
            }}>

                <CustomDialog
                    style={{
                        zIndex: 10,

                        opacity: 0.98,
                        maxWidth: "100vw",
                        minWidth: "560px",
                        padding: "10px",
                        border: "1px",
                    }}
                    onClose={props.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={props.open}

                >
                    <DialogTitle id="customized-dialog-title" onClose={props.handleClose} {...props}>
                        <Grid
                            container
                            alignItems={"center"}
                            justifyContent="center"
                            direction="row"
                            marginTop={5}


                        >
                            <Grid item xs>
                                <Typography variant="inherit" align="left">
                                    {props?.station?.name} Station Information
                                </Typography>
                            </Grid>

                        </Grid>
                    </DialogTitle>


                    <DialogContent
                        style={{
                            alignItems: "stretch",
                            marginTop: 10,
                            flexDirection: "column",
                            display: "flex",
                            paddingTop: "20px",
                            paddingBottom: "20px",
                            paddingLeft: "40px",
                            paddingRight: "40px"
                        }}
                        sx={{
                            alignItems: "stretch",
                            flexDirection: "column",
                            display: "flex",


                        }}
                    >
                        <form
                            style={{
                                flex: 1,
                                display: "block",
                            }}
                        >

                        </form>
                        <DialogActions
                            style={{
                                marginTop: "auto",
                                justifyContent: "center",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Grid container direction="column" spacing={2}>
                                <AvailableVehicles station={props.station} />
                                <CustomTextField color="#000" text={"Address: " + props.station?.address} />
                                <CustomTextField color="#000" text={"Capacity: " + props.station?.capacity} />
                                <CustomTextField color="#000" text={"Available Bikes: " + props.station?.num_vehicles_available} />
                                <CustomTextField color="#000" text={"Station ID: " + props.station?.station_id} />
                                <CustomTextField color="#000" text={"Cross Street: " + props.station?.cross_street} />
                                <CustomTextField color="#000" text={"Rental URI Android: " + props.station?.rental_uris.android} />
                                <CustomTextField color="#000" text={"Rental URI iOS: " + props.station?.rental_uris.ios} />
                                <CustomTextField color="#000" text={"Lat: " + props.station?.lat} />
                                <CustomTextField color="#000" text={"Lng: " + props.station?.lon} />




                            </Grid>



                        </DialogActions>
                    </DialogContent>
                </CustomDialog>
            </Box>
        </div>
    )

}
