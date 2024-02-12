import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { Modify } from "ol/interaction";
import { OSM, Vector as VectorSource } from "ol/source";
import React, { useEffect, useRef } from "react";
import VectorLayer from "ol/layer/Vector";
import { Icon, Style } from "ol/style";
import { Grid } from "@mui/material";



export default function MapView() {
    const mapEl = useRef(null);



    const source = new VectorSource();

    // var kmlLayer = new VectorLayer({
    //     source: new VectorSource({
    //         url:
    //             "https://earthquake.usgs.gov/fdsnws/event/1/query?format=kml&minmagnitude=5.8",
    //         format: new KML()
    //     })
    // });

    var modify = new Modify({ source: source });

    var vectorLayer = new VectorLayer({
        source: source,
        style: new Style({
            image: new Icon({
                anchor: [0.5, 46],
                size: [50, 50],

                src:
                    "https://www.flaticon.com/svg/vstatic/svg/841/841345.svg?token=exp=1619212955~hmac=d2377618f3d4e4a81697c3acdb83b8f8"
            })
        })
    });

    const map = new Map({
        layers: [
            new TileLayer({
                source: new OSM()
            }),
            vectorLayer
        ],
        view: new View({
            center: [0, 0],
            zoom: 0
        })
    });

    map.addInteraction(modify);

    useEffect(() => {
        map.setTarget(mapEl.current!!);
    },);




    return (
        <Grid container direction="column">
            <Grid container item xs alignContent="flex-end" display="flex" alignItems="flex-end" direction="row">



            </Grid>
            <Grid item xs={6}>
                <div ref={mapEl} style={{ height: "100vh" }}></div>
            </Grid>
        </Grid>
    );
}
