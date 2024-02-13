import { makeStyles } from "@mui/material";


const optionsColor = "#333D48"

export const useDialogStyles = makeStyles(() => ({
    overlay: {
        zIndex: 10,
        backgroundColor: "#a9e6c2",
        opacity: 0.98,
        maxWidth: "100vw",
        minWidth: "560px",
        padding: 0,
        border: "1px",
    },
    rainOverlay: {
        zIndex: 10,
        backgroundColor: "#a9e6c2",
        opacity: 0.98,
        maxWidth: "100vw",
        minWidth: "560px",
        padding: 0,
        border: "1px",
    },
    input: {
        color: "white",
        borderColor: "white",
    },
    grayInput: {
        color: "gray",
    },

    marginLeft: {
        marginLeft: "auto",
    },
    dropdownOpen: {
        transform: "rotate(-90deg)",
    },
    dropdownClosed: {
        transform: "rotate(0)",
    },
    expandTypography: {
        fontWeight: "bold",
        margin: "0px",
    },
    expandHeaderBox: {
        backgroundColor: optionsColor,
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
    },
    optionsBox: {
        borderColor: optionsColor,
        backgroundColor: optionsColor,
        border: "10px",
        borderStyle: "solid",
        borderRadius: "10px",
    },
    note: {
        height: "150px",
    },
}))
