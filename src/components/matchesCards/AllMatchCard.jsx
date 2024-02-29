import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Aos from 'aos';
import 'aos/dist/aos.css';

const AllMatchCard = ({
  name,
  matchType,
  date,
  team1_name,
  team2_name,
  venue,
}) => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box>
      <Card sx={{ width: 350, height: "100%" }} data-aos="zoom-in">
        <CardContent>
          <Typography
            textAlign={"center"}
            gutterBottom
            variant="body1"
            component="div"
          >
            {date}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            MatchType:{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>
              {matchType}{" "}
            </span>
          </Typography>

          <Typography gutterBottom variant="body1" component="div">
            {team1_name} vs {team2_name}
          </Typography>

          
          <Typography variant="body1">
            {venue}
          </Typography>
         

        </CardContent>
      </Card>
    </Box>
  );
};

export default AllMatchCard;
