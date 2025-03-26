import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/images/osai.png";

import { useNavigate } from "react-router";
import sub1 from "../assets/images/sub1.png"; // Ensure the image is imported correctly

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        backgroundImage:{xs:`linear-gradient(180deg, rgba(0, 0, 0, 0.50) 4.05%, #000 95.64%), url(${backgroundImage})` , md :`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${backgroundImage})` } ,
        backgroundSize: { xs: "cover", md: "130%", lg: "120%", xl: "cover" }, // Adjust background size for responsiveness
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Responsive Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Stack on small screens, row on larger screens
          alignItems: "center",
          justifyContent: "space-between",
          width: "fit-content", // Adjust width for responsiveness
          padding: "16px",
        }}
      >
        {/* Typography */}
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "'1942 Report', sans-serif",
            fontSize: { xs: "32px",sm: "32px", md: "40px", lg: "48px", xl: "52px" }, // Responsive font size
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "86px",
            textAlign: "center",
            flex: 1, // Allow text to take up available space
          }}
        >
          Osai Kekkudho
        </Typography>

        {/* Image */}
        <Box
          component="img"
          src={sub1} // Use the imported image
          alt="Under Text"
          sx={{
            width: { xs: "60%", md: "60%", lg: "50%", xl: "50%" }, // Responsive image size", // Responsive image size
            alignSelf: "flex-end", // Add spacing on larger screens
            marginTop: "-16px", // Add spacing on smaller screens
          }}
        />

        {/* Button */}
        <Button
          onClick={handleClick}
          sx={{
            marginTop: { xs: "16px", xl: "35px" }, // Adjust spacing for responsiveness
            color: "#FFF",
            backgroundColor: "transparent",
            border: "none",
            fontFamily: "Montserrat, sans-serif",
            fontSize:{ xs: "14px",sm: "16px", md: "18px", lg: "18px", xl: "18px"},
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "26px",
            letterSpacing: "7px",
            textTransform: "uppercase",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          Enter The Journey
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
