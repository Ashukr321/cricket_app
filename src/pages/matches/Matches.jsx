import React from 'react'
import CurrentM from './CurrentM'
import { Box } from '@mui/material'
import AllMatch from './AllMatch'

const Matches = () => {
  return (
    <Box sx={{padding:{xs:"80px 40px",sm:"100px 40px"}}}>
      <CurrentM/>
      <AllMatch/>
    </Box>
  )
}

export default Matches