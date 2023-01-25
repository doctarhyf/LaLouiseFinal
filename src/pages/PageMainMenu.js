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

function MainMenuItem({ title, icon }) {
  const onDepClicked = (e) => {
    alert(title);
  };

  return (
    <Box
      onClick={onDepClicked}
      className="main-menu-item"
      sx={{ width: 90, height: 90, textAlign: "center", m: 2,
      
    
    }}

    >
      <img src={icon} />
      <Typography>{title}</Typography>
    </Box>
  );
}

export default function PageMainMenu() {
  return (
    <Box
      sx={{
        backgroundColor: "transparant",
        width: { md: "auto", xs: 1, sm: 1 },
        gap: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "column", md: "row" }
      }}
    >
      <Logo sx={{}} />

      <Paper
        elevation={3}
        sx={{ width: {xs:'100%'}, justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ backgroundColor: "transparant" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              backgroundColor: "transparant",
              textAlign: "center",
              p: 2
            }}
          >
            MAIN MENU
          </Typography>

          <Typography sx={{ textAlign: "center" }}>
            Bienvenue chez la louise, veuillez cliquer sur un departement.
          </Typography>

          <Box sx={{ p: 2, display: "flex", justifyContent:'center', alignItems:'center', flexDirection:{xs:'column', md:'row'}, flexWrap: "wrap" }}>
            {MAIN_MENU_ITEMS.map((it, idx) => (
              <MainMenuItem icon={it.i} title={it.n} />
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
