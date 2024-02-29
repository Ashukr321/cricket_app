import { Typography, Stack,Pagination } from "@mui/material";
import React from "react";
import { useCurrentMatch } from "../../context/matches/currentMatches";
import CurrentMatchesCard from "../../components/matchesCards/CurrentMatchesCard";
import Loader from "../loader/Loader";

const CurrentM = () => {
  const { currentMatch, pageHandler } = useCurrentMatch();

  return (
    <div>
      <Typography variant="h4" sx={{ textTransform: "uppercase", marginBottom: "1rem", padding: { xs: "20px ", sm: "80px 40px" },textAlign:"center" }}>
        Current Matches 🏏
      </Typography>
      {currentMatch.length === 0 ? (
        <Loader />
      ) : (
        <Stack
          gap={4}
          sx={{
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {currentMatch.map(item => (
            <React.Fragment key={item.id}>
              <CurrentMatchesCard
                name={item.name}
                matchType={item.matchType}
                date={item.date}
                status={item.status}
                venue={item.venue}
                team1_name={item.teamInfo[0].name}
                team1_score={item.score[0]}
                team2_name={item.teamInfo[1].name}
                t2={item.score[1]}
              />
            </React.Fragment>
          ))}
        </Stack>
      )}
      
      <Stack sx={{marginTop:"2rem"}} justifyContent={"center"} flexDirection={'row'}>
        <Pagination count={10} onChange={(e,value)=>{pageHandler(value)}} color="primary" />
      </Stack>
    </div>
  );
};

export default CurrentM;
