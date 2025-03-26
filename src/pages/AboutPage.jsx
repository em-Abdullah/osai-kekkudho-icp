import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import backgroundImage from "../assets/images/osai.png"; // Replace with the correct path to your background image
import sub1 from "../assets/images/sub1.png";
import vinyl from "../assets/images/vinyl.png";
import mint from "../assets/images/mint.png";
import person from "../assets/images/icon-person.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../App.css";
import { useNavigate } from "react-router";


function AboutPage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/movie");
  };
  const handleButtonClick2 = () => {
    navigate("/");
  }
  const handleButtonClickBuy = () => {
    navigate("/contact");
  }
  const handleButtonClickicp = () => {
    navigate("/icp");
  }
  return (
    <Box
    sx={{
      backgroundImage:{xs:`linear-gradient(180deg, rgba(0, 0, 0, 0.50) 4.05%, #000 95.64%), url(${backgroundImage})` , md :`linear-gradient(270deg, rgba(0, 0, 0, 0.00) 4.05%, #000 69.69%), url(${backgroundImage})` } ,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      // height: "100dvh",
      minHeight: "100vh",
    }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: { xs: "none", md: "blur(2px)" },
          color: "white",
          width: { xs: "60px", md: "480px" }, // Small square box for xs
          height: { xs: "60px", md: "50px" }, // Small square box for xs
          flexDirection: "row",
          borderRadius: "8px",
          position: "absolute",
          top:{xs:"20px", md:"30px"},
          right: {xs:"20px", md:"30px"},
          padding: { xs: "0", md: "10px" }, // No padding for xs
          backgroundColor: { xs: "transparent", md: "rgba(0, 0, 0, 0.27)" }, // Transparent for xs
          cursor: "pointer",
          zIndex: 10, // Ensure it's clickable
          pointerEvents: "auto", // Ensure pointer interactions work
        }}
        onClick={handleButtonClickicp}

      > 
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "80%",
          height: "80%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#033734",
          opacity: "0.87",
          borderRadius: "8px",
         
        }}
      >
        <Box
          component="img"
          src={person}
          alt="Mint Icon"
          sx={{
            width: "40%", // Adjust image size within the square box
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      <React.Fragment>
        <Typography
className="dm-sans-bold"
          sx={{
            display: { xs: "none", md: "block" },
            color: "#FFF",
            fontFamily: "DM Sans",
            fontWeight: 500,
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          Received the Vinyl? Sign In to Mint your SBT
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: "110px",
            height: "50px",
            backgroundColor:{ xs: "#033734", md: "#E7F152" } ,
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Box
            component="img"
            src={mint}
            alt="Mint Icon"
            sx={{
              width: "40%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </React.Fragment>
      </Box>
    <Box
      sx={{
        position: "relative",
     
   
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // padding: "32px",
      }}
    >

      {/* Grid Container */}
      <Grid
        container
        spacing={0}
        sx={{
          width: "100%",
          paddingTop: { xs: "40px", md: "60px" }, // Adjust padding for smaller screens
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on xs, row on md and above
        }}
      >
        {/* First Grid Item */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { md: "center", xl: "flex-start" }, // Center items on xs
            width: "100%", // Full width on xs
            padding: { xs: "16px", md: "160px 120px 0 120px" }, // Adjust padding for smaller screens
          }}
        >
          {/* Box for Osai Title and Sub1 Image */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { md: "center", xl: "flex-start" }, // Center items on xs
              width: { md: "100%", xl: "fit-content" }, // Full width on xs
              marginBottom: { xs: "16px", md: "0" }, // Add spacing on xs
            }}
          >
            {/* Typography */}
            <Typography
              onClick={handleButtonClick2}
              sx={{
                cursor: "pointer",
                color: "var(--Colors-White, #FFF)",
                fontFamily: "'1942 Report'",
                fontSize: { xs: "40px",md: "33px", lg: "50px", xl: "64px" }, // Adjust font size for responsiveness
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "86px",
                textAlign: "center", // Center text on xs
                letterSpacing: "-1px",
                // marginBottom: { xs: "16px", md: "0" }, // Add spacing on xs
              }}
            >
              Osai Kekkudho
            </Typography>

            {/* Image */}
            <Box
              component="img"
              src={sub1}
              alt="Under Text"
              sx={{
                width: { xs: "50%", sm: "30%", md: "50%", lg: "40%", xl: "30%" }, // Adjust width for responsiveness
                alignSelf: "flex-end", // Center image on xs
                // marginTop: { xs: "16px", md: "0" },
                marginRight: { xs: "40px",sm:"200px",md: "0", xl: "0px" }, // Add spacing on xs
              }}
            />
          </Box>
          <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: {xs:"flex", md:"none"},
            justifyContent: "center", // Center the vinyl image on xs
            marginTop: { xs: "16px", md: "0" }, // Add spacing on xs
          }}
        >
          <Box
            component="img"
            src={vinyl}
            alt="Vinyl Image"
            sx={{
              width: { xs: "80%", sm: "100%" }, // Adjust width for responsiveness
              height: "auto",
            }}
          />
        </Grid>
          {/* Description */}
          <Typography
            className="nanum-myeongjo-regular"
            sx={{
              color: " #FFF",
              fontFamily: "Nanum Myeongjo",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "16px" }, // Adjust font size for responsiveness
              lineHeight: "22px",
              textAlign:{md:"left", xl:"left"} , // Center text on xs
              marginTop: { xs: "16px", md: "56px" }, // Add spacing on xs
              paddingRight: { md: "0", xl: "200px" }, // Remove padding on xs
            }}
          >
            Osai Kekkudho is a pure, intimate vinyl album by Pradeep Kumar,
            recorded as an AAA analog production. Featuring only his voice and
            guitar, it strips music to its bare soul, capturing raw emotion
            and authenticity. The album feels like a personal performance,
            inviting listeners to experience sound in its most honest form.
          </Typography>

          {/* Pre Order Button */}
          <Button
            onClick={handleButtonClickBuy}
            sx={{
              display: "flex",
              padding: "16px 10px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              width: { xs: "100%", md: "19rem" }, // Adjust width for responsiveness
              marginTop: { xs: "16px", md: "60px" }, // Add spacing on xs
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
                fontFamily: "Montserrat",
                fontSize: { xs: "18px", md: "24px" }, // Adjust font size for responsiveness
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
                letterSpacing: "7px",
                textTransform: "uppercase",
              }}
            >
              Buy Now
            </Typography>
    
          </Button>
          <Typography
            className="dm-sans-light"
            sx={{
              color: " #FFF",
              fontFamily: "DM Sans",
              fontWeight: 200,
              fontSize: { xs: "12px", md: "14px" }, // Adjust font size for responsiveness
              lineHeight: "22px",
              textAlign:{md:"left", xl:"left"} , // Center text on xs
              marginTop: { xs: "16px", md: "16px" }, // Add spacing on xs
              paddingRight: { md: "0", xl: "200px" }, // Remove padding on xs
            }}
          >
          All further updates will be received in mail. Ensure to Keep track of the dates to purchase the vinyl!
          </Typography>

        </Grid>

        {/* Second Grid Item */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: {xs:"none", md:"flex"},
            alignItems: "center",
            justifyContent: "center", // Center the vinyl image on xs
            marginTop: { xs: "16px", md: "16px" }, // Add spacing on xs
          }}
        >
          <Box
            component="img"
            src={vinyl}
            alt="Vinyl Image"
            sx={{

              width: { xs: "80%", sm: "100%" }, // Adjust width for responsiveness
              height:{xs:"auto",md:"70%", xl:"80%"} 
            }}
          />
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <Button
          onClick={handleButtonClick}
          sx={{
            display: "inline-flex",
            flexDirection: "column", // Stack text and icon vertically
            padding: "16px 48px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            width: "fit-content",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: {xs:"14px", md:"16px"},
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "26px",
              letterSpacing: "7px",
              textTransform: "uppercase",
            }}
          >
            Explore the Journey
          </Typography>
          <KeyboardArrowDownIcon
            sx={{
              color: "#FFF",
              fontSize: "32px",
              marginTop: "2px",
            }}
          />
        </Button>
      </Box>

    </Box>
    </Box>
  );
}

export default AboutPage;
