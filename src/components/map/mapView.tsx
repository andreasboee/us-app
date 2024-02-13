
import React, { useRef } from "react";
import { gbfsArea } from "../../models/gbfsArea";
import GoogleMapReact from "google-map-react";



export default function MapView(area: gbfsArea) {
    const mapRef = useRef()
    // const [bounds, setBounds] = useState(null)
    // const [zoom, setZoom] = useState(area.zoom)

    const mapConf = {
        center: {
            lat: area.pos.lat,
            lng: area.pos.lng,
        },
        zoom: area.zoom,
    }
    const maxZoom = 20
    // const points =
    //     Carts &&
    //     Object.keys(Carts).length &&
    //     Object.keys(Carts).map((key, index) => {
    //         const cart = Carts[key]
    //         const { boardId } = cart
    //         if (cart.LOC === undefined)
    //             return {
    //                 cartDocId: key,
    //             }
    //         return {
    //             type: "Feature",
    //             properties: {
    //                 cluster: false,
    //                 cartId: boardId,
    //                 cartDocId: key,
    //                 category: "vehicles",
    //             },
    //             geometry: {
    //                 type: "Point",
    //                 coordinates: [cart.LOC.longitude, cart.LOC.latitude],
    //             },
    //         }
    //     })
    // const { clusters, supercluster } = useSupercluster({
    //     points: points ?? [],
    //     bounds,
    //     zoom,
    //     options: {
    //         radius: 500,
    //         maxZoom,
    //     },
    // })

    return (
        <div>

            <GoogleMapReact
                defaultCenter={mapConf.center}
                defaultZoom={mapConf.zoom}
                options={(map) => ({
                    mapTypeId: map.MapTypeId.HYBRID,
                    fullscreenControl: false,
                    zoomControl: false,
                    maxZoom,
                })}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map }) => {
                    mapRef.current = map
                }}

            >

            </GoogleMapReact>
        </div>
    )
}
