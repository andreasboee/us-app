import React from "react"
import Dialog from "@mui/material/Dialog"
import { Box, DialogActions, DialogContent, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"
import { gbfsArea } from "../../models/gbfsArea"
import { DialogTitle } from "../dialogTitle"
import { CustomTextField } from "./textfield"


const CustomDialog = styled(Dialog)(({ theme }) => ({
    minWidth: "580px",
}))

export default function AreaInformationPopup(props: { handleClose: () => void; open: boolean, area: gbfsArea }) {

    // const name = useRef("")
    // const tlf = useRef("")
    // const note = useRef("")

    const handleClose = () => {
        props.handleClose()
    }



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
                        maxWidth: "1000vw",
                        minWidth: "560px",

                        border: "1px",
                    }}
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={props.open}

                >
                    <DialogTitle id="customized-dialog-title" onClose={handleClose} {...props} >
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
                            paddingRight: "40px",
                            opacity: "1"
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

                                <CustomTextField color="#000" text={"System ID: " + props.area.system_id} />
                                <CustomTextField color="#000" text={"Operator: " + props.area.operator} />
                                <CustomTextField color="#000" text={"Phone Number: " + props.area.phone_number} />
                                <CustomTextField color="#000" text={"Last updated: " + props.area.last_updated} />
                                <CustomTextField color="#000" text={"TTL: " + props.area.ttl} />
                                <CustomTextField color="#000" text={"Rental Url Android: " + props.area.rental_apps.android.store_uri} />
                                <CustomTextField color="#000" text={"Rental Url iOS: " + props.area.rental_apps.ios.store_uri} />

                            </Grid>



                        </DialogActions>
                    </DialogContent>
                </CustomDialog>
            </Box>
        </div>
    )

}
