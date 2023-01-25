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
import MainMenu from "../comps/MainMenu";

export default function MainMenuItem({ title, icon, onMenuItemClicked }) {
  return (
    <Box
      onClick={(e) => onMenuItemClicked(title)}
      className="main-menu-item"
      sx={{ width: 90, height: 90, textAlign: "center", m: 2 }}
    >
      <img src={icon} alt={title} />
      <Typography>{title}</Typography>
    </Box>
  );
}
