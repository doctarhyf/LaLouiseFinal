import "../styles.css";
import {
  Container,
  Button,
  Box,
  Typography,
  TextField,
  Link
} from "@mui/material";
import { useState } from "react";
import { PAGES } from "../Consts";
import Logo from "../assets/Logo";

export default function PageLogin({ GotoPage }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    GotoPage(PAGES.MAIN_MENU);
  };

  const onPasswordLost = (e) => {
    alert("password will be recovered ...");
  };

  return (
    <Box sx={{ gap: 4, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" }
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="filled-basic"
            label="Phone"
            variant="outlined"
          />
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="filled-basic"
            label="Password"
            variant="outlined"
          />
          <Typography sx={{ textAlign: "center" }}>
            Bienvenue sur le systeme de gestion de LaLouise @2023 . Veuillez
            vous connectez avec votre numero de telephone et votre mot de passe
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <Button
          onClick={onLogin}
          variant="contained"
          sx={{ width: 1 / 3, alignSelf: "center" }}
        >
          SE CONNECTER
        </Button>
        <Button
          onClick={onPasswordLost}
          color="error"
          sx={{ width: 1 / 3, alignSelf: "center" }}
        >
          Mot de passe oublie?
        </Button>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          pb: 2,
          pt: 4,
          alignSelf: "center"
        }}
      ></Box>
    </Box>
  );
}
