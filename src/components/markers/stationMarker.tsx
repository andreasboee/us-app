import React from "react"
import { Typography, styled } from "@mui/material"

const CLUSTER_SIZE = 80

const Marker = styled("div")(() => ({
    position: "absolute",
    top: -CLUSTER_SIZE / 2,
    left: -CLUSTER_SIZE / 2,
    height: CLUSTER_SIZE + "px",
    width: CLUSTER_SIZE + "px",
    textAlign: "center",
    backgroundColor: "#",
    borderRadius: CLUSTER_SIZE + "px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "5px solid",
    borderColor: "#897df5",
    boxShadow:
        `inset 0 0 0 2px #237729,` +
        `0 0 0 2px #237729`,
    "&:hover": {
        borderColor: "#FFF",
    },
}))


const StationMarker = ({ onClick }: { onClick: any }) => (

    <Marker onClick={onClick}>
        <div>
            <Typography color="#DCDCDC" fontSize={"8pt"} fontWeight={600}>
                Bicycles
            </Typography>
        </div>
    </Marker>
)

export default StationMarker
