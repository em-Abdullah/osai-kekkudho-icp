import React from "react";
import { Box, TextField } from "@mui/material";
import backgroundImage from "../assets/images/osai.png"; // Replace with the correct path to your background image

function Library() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: {
          xs: `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 4.05%, #000 95.64%), url(${backgroundImage}) center / cover no-repeat`,
          md: `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 4.05%, #000 69.69%), url(${backgroundImage}) lightgray 50% / cover no-repeat`,
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Top-Right Section */}
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search"
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#919191",
              fontFamily: "DM Sans",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "26px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            },
          }}
        />
        <Box
          component="img"
          src={backgroundImage} // Replace with the correct image
          alt="Icon"
          sx={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: { xs: "90%", md: "60%" },
        }}
      >
        {/* Row 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: "10px",
          }}
        >
          <Box
            component="img"
            src={backgroundImage} // Replace with the correct image
            alt="Image"
            sx={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <Box
            sx={{
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              fontSize: "32px",
              color: "#FFF",
            }}
          >
            +
          </Box>
        </Box>

        {/* Row 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: "10px",
          }}
        >
          <Box
            component="img"
            src={backgroundImage} // Replace with the correct image
            alt="Image"
            sx={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <Box
            sx={{
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              fontSize: "32px",
              color: "#FFF",
            }}
          >
            +
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Library;
