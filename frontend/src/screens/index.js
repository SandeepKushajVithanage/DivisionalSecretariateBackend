import React from 'react'
import { Routes, Route } from "react-router-dom"
import { useMediaQuery } from '@mui/material'

import Home from './Home'
import Dashboard from './Dashboard'
import SignIn from './SignIn'
import News from './News'

const MainRoutes = () => {

    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'))

    return (
        <div style={{
            minHeight: 'calc(100vh - 125px)'
        }}>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/sign-in'} element={<SignIn />} />
                <Route path={'/dashboard/*'} element={<Dashboard />} />
                <Route path={'/news'} element={<News />} />
            </Routes>
        </div>
    )
}

export default MainRoutes