import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import Cookies from 'js-cookie'
const ProtectedRoute = ({element}) => {
    const jwtToken = Cookies.get("jwt_token");
    if(jwtToken === undefined) return <Navigate to = "/login" replace />
    return element ? element : <Outlet/>
}

export default ProtectedRoute