import React, { useState } from "react";
import { Box, TextField, Grid, Typography, Button, Dialog } from "@mui/material";
import backgroundImage from "../assets/images/osai.png";
import logout from "../assets/images/logout.png";
import frontSide from "../assets/images/FrontSide.png";
import "../App.css";

function Library() {
  const [isMinted, setIsMinted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleMintClick = () => {
    setDialogOpen(true);
  };

  const handleSignInClick = () => {
    setDialogOpen(false);
    setIsMinted(true);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: {
          xs: `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 4.05%, #000 95.64%), url(${backgroundImage}) center / cover no-repeat`,
          md: `linear-gradient(180deg, rgba(0, 0, 0, 0.75) 4.05%, #000 69.69%), url(${backgroundImage}) lightgray 50% / cover no-repeat`,
        },
        
        display: "flex",
        flexDirection: "column",
        ...(dialogOpen && {
          backdropFilter: "blur(40.7px)", // Apply blur only when dialog is open
        }),
      }}
    >
      {/* Top-Right Section */}
      <Box
        sx={{
          width: "98%",
          marginTop: "50px",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Box
          sx={{
            width: "180px",
            height: "50px",
            backgroundColor: "#03211D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFF",
            fontSize: "14px",
            borderRadius: "12px",
            fontWeight: 700,
          }}
        >
          0x6c4...FFF9
        </Box>
        <Box
          component="img"
          src={logout}
          alt="Icon"
          sx={{
            backgroundColor: "transparent",
            width: "20px",
            height: "20px",
            objectFit: "contain",
          }}
        />
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on xs, row on md and above
          alignItems: "flex-start", // Align both grids to the top
          justifyContent: "flex-start", // Align grids to the start
          gap: "20px",
          paddingLeft: { xs: "0", md: "80px" },
          paddingTop: { xs: "10px", md: "20px" },
        }}
      >
        {/* First Grid Item */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: { xs: "100%", md: "80%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: "10px",
            }}
          >
            <Box
              component="img"
              src={frontSide}
              alt="Image"
              sx={{
                width: { xs: "90%",sm:"60%", md: "80%" },
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Typography
              className="montserrat-normal"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
                fontSize: "24px",
                fontWeight: 400,
                paddingTop: "40px",
                paddingBottom: "20px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                lineHeight: "35px",
              }}
            >
              Osai Kekkudho
            </Typography>
            <Button
              className="montserrat-normal"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E7F152",
                border: "1px solid #E7F152",
                borderRadius: "12px",
                color: "#033734",
                fontSize: "20px",
                fontWeight: 400,
                fontFamily: "Montserrat",
                fontStyle: "normal",
                width: { xs: "90%",sm:"60%", md: "190px" },
                height: "60px",
              }}
              onClick={isMinted ? undefined : handleMintClick}
            >
              {isMinted ? "Listen Here" : "Mint SBT"}
            </Button>
            <Typography
              className="montserrat-normal"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                color: "rgba(255, 255, 255, 0.40)",
                fontSize: "16px",
                fontWeight: 400,
                textAlign: "center", 
                paddingTop: "20px",
                paddingBottom: "20px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                lineHeight: "26px",
                width: { xs: "90%",sm:"60%", md: "80%" },
              }}
            >
Access to this will allow you to listen to the album anywhere you want, with your wallet!            </Typography>
          </Box>
        </Grid>

        {/* Second Grid Item */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: { xs: "100%", md: "80%" },
          }}
        >
          <Box
            sx={{
              width: { xs: "90%",sm:"60%", md: "80%" },
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.43)",
              borderRadius: "8px",
              fontSize: "64px",
              color: "#363636",
            }}
          >
            +
          </Box>
        </Grid>
      </Grid>

      {/* Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            backdropFilter: "blur(40.7px)", // Apply blur to the entire page
          },
        }}
        PaperProps={{
          sx: {
            background: "rgba(0, 0, 0, 0.40)",
            // backdropFilter: "blur(40.7px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "400px",
            height: "160px",
            padding: "20px",
            overflow: "hidden",
          },
        }}
      >
        <Box>
          <Typography
            className="montserrat-normal"

            sx={{
              color: "#FFF",

              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontSize: "32px",
              fontWeight: 400,
              marginBottom: "30px",
              lineHeight: "24px",
            }}
          >
            Successfully Minted!
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 400,
              marginBottom: "30px",
            }}
          >
            Sign in to Listen to the Album
          </Typography>
          <Button
            sx={{
              backgroundColor: "#E7F152",
              width: "400px",
              color: "#033734",
              fontSize: "16px",
              fontWeight: 400,
              borderRadius: "12px",
              padding: "10px 20px",
            }}
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Library;