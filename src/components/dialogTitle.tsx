
import MuiDialogTitle from "@mui/material/DialogTitle"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import React from "react"


export const DialogTitle = (props: any) => {
    const { children, onClose, ...other } = props
    return (
        <MuiDialogTitle {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    style={{
                        position: "absolute",
                        right: 2,
                        top: 2,
                        marginLeft: `${20}px`,
                        color: "#232729",
                    }}
                    onClick={onClose}
                    size="large"
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
}
