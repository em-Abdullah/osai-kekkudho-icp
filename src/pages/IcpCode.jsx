import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import backgroundImage from "../assets/images/osai.png"; // Replace with the correct path to your background image
import { useNavigate } from "react-router";
import "../App.css";

function IcpCode() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  const handlecodeButtonClick = () => {
    navigate("/library");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minheight: "100vh",
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
      {/* Centered Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        //   backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
          padding: "40px",
          borderRadius: "16px",
          width: { xs: "90%",md:"40%", xl: "25%" },
          textAlign: "center",
        }}
      >
        {/* Title */}
        <Typography
        className="montserrat-normal"
          sx={{
            color: "#FFF",
            fontFamily: "Montserrat",
            fontSize: { xs: "24px", md: "24px" },
            fontWeight: 400,
            marginBottom: "16px",
          }}
        >
          Enter the Code
        </Typography>

        {/* Subtitle */}
        <Typography
        className="montserrat-normal"
          sx={{
            color: "rgba(255, 255, 255, 0.40)",
            fontFamily: "Montserrat",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 400,
            marginBottom: "44px",
          }}
        >
          Enter the code contained within the sleeve here. This mints your Vinyl
          as an asset within your own virtual space.
        </Typography>

        {/* Input Field */}
        <TextField
          variant="outlined"
          placeholder="Enter Code"
          fullWidth
          onKeyDown={(e) => {

            if (e.key === "Enter") {
              handlecodeButtonClick(); // Call the function when Enter is pressed
              
              console.log(e.target.value);
              e.target.value = "";   // Log the entered value
            }
          }}
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "100px",
            marginBottom: "24px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            //   textAlign: "center", // Center align text
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#919191",
            //   textAlign: "center",
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

        {/* Submit Button */}
        {/* <Button
          onClick={handleGoHome}
          sx={{
            padding: "12px 24px",
            backgroundColor: "#03211D",
            border: "1px solid #03211D",
            borderRadius: "45px",
            "&:hover": {
              backgroundColor: "#03211D",
            },
          }}
        >
          <Typography
            sx={{
              color: "#E7F152",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 400,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Enter Code
          </Typography>
        </Button> */}
      </Box>
    </Box>
  );
}

export default IcpCode;
