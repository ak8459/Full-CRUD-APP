import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Contact from '../Components/Contact'
import Appointment from '../Components/Appointment'

const MainRoutes = () => {
    return (

        <Routes>
            <Route path="/" index={true} element={<Contact />} />
            <Route path="/appointment" element={< Appointment />} />

        </Routes>
    )
}

export default MainRoutes