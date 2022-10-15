import { Box, Stack, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Sidebar, DashboardContainer } from '../../components'
import Contacts from './Contacts'
import MainDashboard from './MainDashboard'
import NewsAndEvents from './NewsAndEvents'
import Organizations from './Organizations'
import Services from './Services'
import SubDivisions from './SubDivisions'
import Users from './Users'

const Dashboard = () => {

  const user = useSelector(state => state.auth.user)

  const matches = useMediaQuery('(min-width:800px)')

  if (!user) {
    return <Navigate to="/sign-in" replace />
  }

  return (
    <Box>
      <Stack direction={'row'} spacing={matches ? 2 : 0} justifyContent={'space-between'}>
        <Sidebar />
        <DashboardContainer>
          <Routes>
            {/* <Route path={'/'} element={<MainDashboard />} /> */}
            <Route path={'/'} element={<Users />} />
            <Route path={'/sub-divisions'} element={<SubDivisions />} />
            <Route path={'/news-and-events'} element={<NewsAndEvents />} />
            <Route path={'/services'} element={<Services />} />
            <Route path={'/organizations'} element={<Organizations />} />
            <Route path={'/contacts'} element={<Contacts />} />
          </Routes>
        </DashboardContainer>
      </Stack>
    </Box>
  )
}

export default Dashboard