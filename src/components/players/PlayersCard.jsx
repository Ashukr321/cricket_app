import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Aos from 'aos'
import 'aos/dist/aos.css'
const PlayersCard = ({name,country}) => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <Box sx={{width:"260px",height:"110px"}} data-aos="zoom-in">
     <Card sx={{ width:"100%",height:"100%",backgroundColor:"#c7ecee" }}>
      <CardContent>

        <Typography variant="h6" component="div">
        name: {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         coutntry: {country}
        </Typography>
      </CardContent>
     
    </Card>
    </Box>
  )
}

export default PlayersCard


