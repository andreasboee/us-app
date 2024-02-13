import { makeStyles } from "@mui/material"


export const mapStyle = makeStyles((theme: any) => ({
    root: {
        height: "100vh",
        width: "auto",
        position: "relative",
    },
    overlay: {
        top: "12px",
        right: "12px",
        opacity: 0.97,
        width: "20%",
        minWidth: 325,
        zIndex: 1,
        position: "absolute",
        maxHeight: "90vh",
    },
}))