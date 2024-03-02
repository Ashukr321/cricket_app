import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Aos from 'aos';
import 'aos/dist/aos.css';

const CurrentMatchesCard = ({
  name,
  matchType,
  date,
  team1_name,
  status,
  venue,
  t2
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

          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: "bold", color: "black" }}>
              {team1_name}{" "}
            </span>{" "}
          
          </Typography>
          <Typography variant="body1">
            {venue}
          </Typography>
          <Typography variant="h6" sx={{ color: "orange" }} fontWeight={"bold"} color="text.secondary">
            {status}
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
};

export default CurrentMatchesCard;
