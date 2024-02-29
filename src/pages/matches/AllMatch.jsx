
import React from "react";
import { Typography, Stack,Pagination } from "@mui/material";
import { useAllMatch } from "../../context/matches/allMatchList";
import Loader from "../loader/Loader";
import AllMatchCard from "../../components/matchesCards/AllMatchCard";

const CurrentM = () => {
  const {allMatch,pageHandler} = useAllMatch();

  return (
    <div>
      <Typography variant="h4" sx={{ textTransform: "uppercase", marginBottom: "1rem", padding: { xs: "20px ", sm: "80px 40px" },textAlign:"center" }}>
        All Matches 🏏
      </Typography>
      {allMatch.length === 0 ? (
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
          {allMatch.map(item => (
            <React.Fragment key={item.id}>
              <AllMatchCard name={item.name} matchType={item.matchType} date={item.date} team1_name={item.teamInfo[0].name} team2_name={item.teamInfo[1].name} venue={item.venue}/>
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


// name,
// matchType,
// date,
// team1_name,
// team2_name,
// venue,