import { Box, Typography } from '@mui/material'
import React from 'react'

const DashboardContainer = ({ children }) => {
  return (
    <Box flex={1} p={2}>
      { children }
    </Box>
  )
}

export default DashboardContainer