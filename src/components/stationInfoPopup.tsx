import React from "react"
import Dialog from "@mui/material/Dialog"
import { DialogActions, DialogContent, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { DialogTitle } from "./dialogTitle"
import { Station } from "../models/stations"


const CustomDialog = styled(Dialog)(({ theme }) => ({
    minWidth: "580px",
}))

export default function StationInfoPupup(props: { handleClose: () => void; open: boolean, station?: Station }) {



    // const name = useRef("")
    // const tlf = useRef("")
    // const note = useRef("")






    return (
        <div>

            <CustomDialog
                style={{
                    zIndex: 10,
                    backgroundColor: "#DCDCDC",
                    opacity: 0.95,
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

                            <Typography variant="body2" color="#000">
                                Address: {props.station?.address}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Capacity: {props.station?.capacity}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Available Bikes: ""
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Station ID: {props.station?.station_id}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Cross Street: {props.station?.cross_street}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Rental URI Android: {props.station?.rental_uris.android}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Rental URI Android: {props.station?.rental_uris.ios}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Station Coordinates: {props.station?.station_area.coordinates}
                            </Typography>


                        </Grid>



                    </DialogActions>
                </DialogContent>
            </CustomDialog>
        </div>
    )

}
