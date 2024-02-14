import React from "react"
import { Box, Typography, styled } from "@mui/material"

const CLUSTER_SIZE = 50

const Marker = styled("div")(() => ({
    position: "absolute",
    top: -CLUSTER_SIZE / 2,
    left: -CLUSTER_SIZE / 2,
    height: CLUSTER_SIZE + "px",
    width: CLUSTER_SIZE + "px",
    textAlign: "center",
    backgroundColor: "#897df5",
    borderRadius: CLUSTER_SIZE + "px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "2px solid",
    borderColor: "#897df5",
    boxShadow:
        `inset 0 0 0 2px #237729,` +
        `0 0 0 2px #237729`,
    "&:hover": {
        borderColor: "#FFF",
    },
}))


const StationMarker = ({ onClick, capacity }: { onClick: any, capacity: number }) => (

    <Marker onClick={onClick}>
        <div>
            <Box >
                <Typography color="#fff" fontSize={"16pt"} fontWeight={600} >
                    {capacity}
                </Typography>
            </Box>
        </div>
    </Marker>
)

export default StationMarker
