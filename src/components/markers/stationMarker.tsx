import React from "react"
import { Box, Typography, styled } from "@mui/material"
import { Station } from "../../models/stations"

const CLUSTER_SIZE = 70

const Marker = styled("div")(() => ({
    position: "absolute",
    top: -CLUSTER_SIZE / 2,
    left: -CLUSTER_SIZE / 2,
    height: CLUSTER_SIZE + "px",
    width: CLUSTER_SIZE + "px",
    textAlign: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: CLUSTER_SIZE + "px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "2px solid",
    borderColor: "#000",
    boxShadow:
        `inset 0 0 0 2px #237729,` +
        `0 0 0 2px #237729`,
    "&:hover": {
        borderColor: "#FFF",
    },
}))

//TODO: Set color of border to red if no vehicles available


const StationMarker = ({ onClick, station }: { onClick: any, station: Station }) => (

    <Marker onClick={onClick}>
        <div>
            <Box >
                <Typography color="#000" fontSize={"12pt"} fontWeight={600} >
                    {station.capacity}
                </Typography>
                <Typography color="#008000" fontSize={"12pt"} fontWeight={600} >
                    {station.num_vehicles_available}
                </Typography>

            </Box>
        </div>
    </Marker>
)

export default StationMarker
