import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material'

import './App.css'
import theme from './themes/theme'
import MainRoutes from './screens'
import Home from './screens/Home'
import { Footer, Header } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserApi } from './apis/auth'
import { getValue } from './utils/localStorage'
import { Keys } from './constants'
import { setAccessTokenAction, setInitialLoadingAction, setUserAction } from './store/actions/authActions'

function App() {
  
  const dispatch = useDispatch()

  const accessToken = useSelector(state => state.auth.accessToken)

  const getUserData = () => {
    getCurrentUserApi()
      .then(response => {
        dispatch(setUserAction(response.data))
      })
      .catch(error => {
        alert(error.message)
        dispatch(setUserAction(null))
      })
      .finally(() => {

      })
  }

  const getStoredAccessToken = async () => {
    const accessToken = await getValue(Keys.ACCESS_TOKEN)
    dispatch(setAccessTokenAction(accessToken))
  }

  useEffect(() => {
    if (accessToken) {
      getUserData()
    } else {
      dispatch(setUserAction(null))
    }
  }, [accessToken])

  useEffect(() => {
    getStoredAccessToken()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <DashboardSidebar open={sideBarOpen} onClose={() => setSideBarrOpen(false)} /> */}
      <MainRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App
