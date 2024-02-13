import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { Modify } from "ol/interaction";
import { Vector as VectorSource } from "ol/source";
import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { gbfsArea } from "../../models/gbfsArea";
import XYZ from 'ol/source/XYZ';




export default function MapView(area: gbfsArea) {
    const mapEl = useRef(null);

    // const [currentArea, setCurrentArea] = useState<gbfsArea>(area)



    const source = new VectorSource();

    // var kmlLayer = new VectorLayer({
    //     source: new VectorSource({
    //         url:
    //             "https://earthquake.usgs.gov/fdsnws/event/1/query?format=kml&minmagnitude=5.8",
    //         format: new KML()
    //     })
    // });

    var modify = new Modify({ source: source });

    // var vectorLayer = new VectorLayer({
    //     source: source,
    //     style: new Style({
    //         image: new Icon({
    //             anchor: [0.5, 46],
    //             size: [50, 50],

    //             src:
    //                 "https://www.flaticon.com/svg/vstatic/svg/841/841345.svg?token=exp=1619212955~hmac=d2377618f3d4e4a81697c3acdb83b8f8"
    //         })
    //     })
    // });

    // const openCycleMapLayer = new TileLayer({
    //     source: new OSM({
    //         attributions: [
    //             'All maps © <a href="https://www.opencyclemap.org/">OpenCycleMap</a>',
    //             ATTRIBUTION,
    //         ],
    //         url:
    //             'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
    //             '?apikey=Your API key from https://www.thunderforest.com/docs/apikeys/ here',
    //     }),
    // });

    // const openSeaMapLayer = new TileLayer({
    //     source: new OSM({
    //         attributions: [
    //             'All maps © <a href="https://www.openseamap.org/">OpenSeaMap</a>',
    //             ATTRIBUTION,
    //         ],
    //         opaque: false,
    //         url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
    //     }),
    // });



    const map = new Map({
        layers: [
            new TileLayer({
                source: new XYZ({
                    url: 'http://mt1.google.com/vt/lyrs=m@113&hl=en&&x={x}&y={y}&z={z}&key=AIzaSyCwgclt0TWLK3i0safWmFOJYpwwuGHwQkA',
                })
            })
        ],
        target: 'map',
        view: new View({
            maxZoom: 18,
            center: [area.pos.lat, area.pos.lng],
            zoom: 10,
        }),
    });


    // const map = new Map({
    //     layers: [
    //         new TileLayer({
    //             source: new OSM()
    //         }),
    //         vectorLayer
    //     ],
    //     view: new View({
    //         center: [area.pos.lat, area.pos.lng],
    //         zoom: area.zoom
    //     })
    // });

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
