import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Alert,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    setOpen(true); // Set the state to show the success alert
    setTimeout(() => {
      setOpen(false);
      setMessage("");
    }, 2000);
  };

  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Stack padding={2} gap={1}>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "1.5rem",
                color: "white",
                lineHeight: "1.5",
                letterSpacing: ".1em",
              }}
            >
              Explore cricket scores, player profiles, and match schedules on
              our user-friendly website. Enjoy real-time updates, intuitive
              navigation, and a seamless experience for cricket enthusiasts
              worldwide.
            </Typography>

            <Stack
              flexDirection={"row"}
              gap={2}
              sx={{ xs: { flexDirection: "row" } }}
            >
              <Link to="/cricket">
                <Button
                  variant="outlined"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1565C0",
                      color: "white",
                    },
                  }}
                >
                  Explore cricket
                </Button>
              </Link>

              <Link to="/matches">
                <Button
                  variant="outlined"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1565C0",
                      color: "white",
                    },
                  }}
                >
                  Explore matches
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={4} sm={2}>
          <Stack
            padding={2}
            gap={1}
            sx={{ alignItems: { xs: "flex-start", sm: "center" } }}
          >
            <Link to="/">
              <Button
                variant="none"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1565C0",
                    color: "white",
                  },
                }}
              >
                home
              </Button>
            </Link>

            <Link to="/about">
              <Button
                variant="none"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1565C0",
                    color: "white",
                  },
                }}
              >
                about
              </Button>
            </Link>

            <Link to="/players">
              <Button
                variant="none"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1565C0",
                    color: "white",
                  },
                }}
              >
                players
              </Button>
            </Link>

            <Link to="/squad">
              <Button
                variant="none"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1565C0",
                    color: "white",
                  },
                }}
              >
                squad
              </Button>
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={8} height={"100%"} sm={6}>
          <form onSubmit={submitHandler}>
            <Stack
              sx={{ padding: { xs: "60px 10px 60px 0px", sm: "60px" } }}
              height={"100%"}
              gap={1}
              alignItems={"center"}
              flexDirection={"row"}
            >
              <TextField
                fullWidth
                id="message"
                type="text"
                label="send message"
                required
                value={message}
                onChange={e => {
                  setMessage(e.target.value);
                }}
                variant="outlined"
                inputProps={{
                  style: {
                    color: "black",
                    backgroundColor: "white",
                  },
                }}
              />
              <Button
                type="submit"
                sx={{
                  padding: "18px 20px",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1565C0",
                    color: "white",
                  },
                }}
              >
                submit
                <SendIcon sx={{ marginLeft: "10px", color: "white" }} />
              </Button>
            </Stack>
          </form>

          {/* Display the Alert component based on the 'open' state */}
          {open && (
            <Alert
              open={open}
              onClose={() => setOpen(false)}
              icon={<CheckIcon fontSize="inherit" />}
              severity="success"
            >
              <Typography variant="body1">
                Message Sent Successfully! <strong>{message}</strong>
              </Typography>
            </Alert>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
