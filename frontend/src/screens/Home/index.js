import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const items = [
  {
    name: '',
    image: 'http://dompe.ds.gov.lk/images/sliders/dompe_slider8.jpg'
  },
  {
    name: '',
    image: 'http://dompe.ds.gov.lk/images/sliders/Auditorum.jpg'
  },
  {
    name: '',
    image: 'http://dompe.ds.gov.lk/images/sliders/dompe_lily.jpg'
  },
  {
    name: '',
    image: 'http://dompe.ds.gov.lk/images/sliders/dompe_slider3.jpg'
  },
]

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: 'center',
  },
  textBoxContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
    padding: 50,
    borderRadius: 5,
    maxWidth: 1000,
    margin: 'auto',
  },
}))

const Item = ({ item }) => {
  return (
    <img src={item.image} style={{ height: '50vh', width: '100%', objectFit: 'cover' }} />
  )
}

const Home = () => {

  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Carousel>
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
      <Box className={classes.textBoxContainer} marginTop={5}>
        <Typography color={'primary'} variant={'h2'} align={'center'}>Our Vision</Typography>
        <Typography align={'center'} marginTop={2}>{VISION}</Typography>
      </Box>
      <Box className={classes.textBoxContainer} marginTop={5} marginBottom={10}>
        <Typography color={'primary'} variant={'h2'} align={'center'}>Our Mission</Typography>
        <Typography align={'center'} marginTop={2}>{MISSION}</Typography>
      </Box>
    </Box>
  )
}

export default Home

const VISION = 'To provide efficient and fruitful state service to the customer.'
const MISSION = 'To assure an efficient and fruitful state service which fulfill the desires of the people according to the government policy and the provincial administrational structure with a genuine resources coordination.'