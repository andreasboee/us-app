

import { Box, Typography } from "@mui/material"
import React from "react"


export const CustomTextField = (props: { text: string, color: string }) => {
    return (
        <Box marginTop={1} marginBottom={1}>
            <Typography variant="body2" color={props.color}>
                {props.text}
            </Typography>
        </Box>
    )
}
