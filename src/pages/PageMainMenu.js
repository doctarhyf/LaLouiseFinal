import "../styles.css";
import {
  Container,
  Button,
  Box,
  Typography,
  TextField,
  Link,
  Grid,
  Paper
} from "@mui/material";
import { useState } from "react";
import { logo } from "../Consts";
import Logo from "../assets/Logo";
import pharmacie from "../assets/pharmacie.jpg";
import { MAIN_MENU_ITEMS } from "../Consts";
import MainMenuItem from "../comps/MainMenuItem";
import MainMenu from "../comps/MainMenu";
import SecPharmacy from "../sections/SecPharmacy";

export default function PageMainMenu() {
  return (
    <Box
      sx={{
        backgroundColor: "transparant",
        width: { md: "auto", xs: 1, sm: 1 },
        gap: 4,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: { xs: "column", sm: "column", md: "row" }
      }}
    >
      <Logo sx={{}} />

      <Paper
        elevation={3}
        sx={{
          width: { xs: "100%" },
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <MainMenu />
      </Paper>
    </Box>
  );
}
