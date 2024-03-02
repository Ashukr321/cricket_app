import React from "react";
import { usePlayer } from "../../context/players/allplyerslist";
import Loader from "../../pages/loader/Loader";
import { Stack, Box, Pagination } from "@mui/material";
import PlayersCard from "../../components/players/PlayersCard";

const Players = () => {
  const { players, pageHandler } = usePlayer();
  return (
    <>
      <Box>
        {players.length === 0 ? (
          <Loader />
        ) : (
          <Stack
            gap={2}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
            flexDirection={"row"}
            sx={{ padding: { xs: "80px 0px 40px 0px ", sm: "100px 40px" } }}
          >
            {players.map(data => (
              <PlayersCard
                key={data.id}
                name={data.name}
                country={data.country}
              />
            ))}
          </Stack>
        )}
      </Box>
      <Stack flexDirection={"row"} sx={{marginBottom:"1.5rem"}} justifyContent={"center"}>
      <Pagination count={10} color="primary" onChange={(e,value)=>{pageHandler(value)}} />
      </Stack>
    </>
  );
};

export default Players;
