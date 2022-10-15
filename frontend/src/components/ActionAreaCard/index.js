import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, CardHeader, Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ActionAreaCard = ({ item }) => {
    return (
        <Container maxWidth={'md'}>
            <Card sx={{ marginTop: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={item?.image}
                        alt="green iguana"
                    />
                    <CardHeader
                        avatar={
                            <Avatar sx={{  }} aria-label="recipe" alt={'Grama Niladhari'} src={'https://drive.google.com/uc?export=view&id=1r9PvYShxwSmAsdWZDbncW41jmMvov-LW'} />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={`Grama Niladhari (${item.visibility})` }
                        subheader="September 04, 2022"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item?.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    )
}

export default ActionAreaCard