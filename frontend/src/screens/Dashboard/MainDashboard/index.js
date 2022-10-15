import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

import { Search, SearchIconWrapper, StyledInputBase } from '../../../components'

const MainDashboard = () => {
  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography variant={'h3'} sx={{ textAlign: 'center' }}>Welcome to Divisional Secretariate Dashboard</Typography>
      </Stack>
    </Box>
  )
}

export default MainDashboard