import React from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import MapScreen from "../screens/mapScreen"


export default function ProtectedRoutes() {
    // const {
    //     authIsLoaded,
    //     userIsLoaded,
    //     userHasAnyViewPermissions,
    //     courseDocId,
    //     authUid,
    //     courseLoaded,
    //     authError,
    //     authIsEmpty,
    //     uidExists,
    // } = SigninStatus()

    // if (!authIsLoaded) {
    //     return <CircleLoader fillScreen />
    // }

    // if (userIsLoaded && courseDocId === "" && !userHasAnyViewPermissions()) {
    //     console.log("user loaded, no view permissions", courseDocId)
    //     return <Navigate to="/nopermission" replace />
    // }
    // if (
    //     (authIsLoaded && authIsEmpty) ||
    //     (authIsLoaded && !uidExists) ||
    //     (authIsLoaded && authError)
    // ) {
    //     return <Navigate to="/login" />
    // }

    // return (
    //     <UserWrap uid={authUid} field={courseDocId}>
    //         <MapWrap field={courseDocId} fieldLoaded={courseLoaded}>
    //             <RoutesToRender />
    //         </MapWrap>
    //     </UserWrap>
    // )
    return (

        <Routes>
            <Route path="/" element={<MapScreen />} />
            {/* <Route path="/settings" element={<Settings />} />
            <Route path="/statistics" element={<Statistics />} /> */}
        </Routes>
    )
}
