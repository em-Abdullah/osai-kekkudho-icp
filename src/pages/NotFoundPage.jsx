import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/images/osai.png"; // Replace with the correct path to your background image
import { useNavigate } from "react-router";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 4.05%, #000 95.64%), url(${backgroundImage}) center / cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "'1942 Report', sans-serif",
          fontSize: { xs: "40px", md: "64px" },
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "86px",
          textAlign: "center",
          letterSpacing: "-1px",
          marginBottom: "20px",
        }}
      >
        404 - Page Not Found
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          color: "#FFF",
          fontFamily: "Montserrat, sans-serif",
          fontSize: { xs: "16px", md: "20px" },
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "26px",
          textAlign: "center",
          letterSpacing: "7px",
          textTransform: "uppercase",
          marginBottom: "40px",
        }}
      >
        The page you are looking for does not exist.
      </Typography>

      {/* Go Home Button */}
      <Button
        onClick={handleGoHome}
        sx={{
          padding: "16px 48px",
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
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
            fontSize: { xs: "16px", md: "18px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "26px",
            letterSpacing: "7px",
            textTransform: "uppercase",
          }}
        >
          Go Home
        </Typography>
      </Button>
    </Box>
  );
}

export default NotFoundPage;
