import React from "react"
import Dialog from "@mui/material/Dialog"
import { DialogActions, DialogContent, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { gbfsArea } from "../models/gbfsArea"
import { DialogTitle } from "./dialogTitle"


const CustomDialog = styled(Dialog)(({ theme }) => ({
    minWidth: "580px",
}))

export default function BookingDialog(props: { handleClose: () => void; open: boolean, area: gbfsArea }) {

    // const name = useRef("")
    // const tlf = useRef("")
    // const note = useRef("")

    const handleClose = () => {
        props.handleClose()
    }



    return (
        <div>

            <CustomDialog
                style={{
                    zIndex: 10,
                    backgroundColor: "#a9e6c2",
                    opacity: 0.7,
                    maxWidth: "100vw",
                    minWidth: "560px",

                    border: "1px",
                }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.open}

            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose} {...props}>
                    <Grid
                        container
                        alignItems={"center"}
                        justifyContent="center"
                        direction="row"
                        marginTop={5}


                    >
                        <Grid item xs>
                            <Typography variant="inherit" align="left">
                                {props?.area.areaName} GBFS System Information
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
                                System Name: {props.area.areaName}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Operator: {props.area.operator}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Phone Number: {props.area.phone_number}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Last updated: {props.area.last_updated}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                TTL: {props.area.ttl}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Rental Url Android: {props.area.rental_apps.android.store_uri}
                            </Typography>
                            <Typography variant="body2" color="#000">
                                Rental Url iOS: {props.area.rental_apps.ios.store_uri}
                            </Typography>
                        </Grid>



                    </DialogActions>
                </DialogContent>
            </CustomDialog>
        </div>
    )

}
