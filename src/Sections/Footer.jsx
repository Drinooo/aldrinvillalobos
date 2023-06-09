import React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, IconButton, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CTA from "../MuiComponents/CTA";

const pages = ["Home", "About", "Projects", "Skills", "Contact"];

export const Footer = () => {
  return (
    <>
      <Box sx={{ borderTop: "2px solid white" }}>
        <CTA />
        <Box sx={{ padding: "0px" }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs>
              <Typography variant="h6" align="center">
                <Link href="/">
                  <img
                    src="av 1.png"
                    style={{ width: "100px", marginBottom: "10px" }}
                  />
                </Link>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" align="center">
                {"© "}
                <Link
                  href="https://example.com"
                  color="inherit"
                  underline="none"
                >
                  Aldrin Villalobos. I built this website using Material UI and React JS
                </Link>
                {/* {new Date().getFullYear()}{" "} */}
              </Typography>
            </Grid>
            <Grid item xs>
              <Box sx={{ textAlign: "center" }}>
                <IconButton aria-label="Facebook" href="">
                  <FacebookIcon color="tertiary" />
                </IconButton>
                <IconButton aria-label="Twitter" href="">
                  <InstagramIcon color="tertiary" />
                </IconButton>
                <IconButton aria-label="Instagram" href="">
                  <TwitterIcon color="tertiary" />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/aldrin-villalobos-a59785242/"
                >
                  <LinkedInIcon color="tertiary" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
