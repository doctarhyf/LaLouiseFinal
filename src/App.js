import "./styles.css";
import { useState } from "react";
import {
  Container,
  Button,
  Box,
  Typography,
  TextField,
  Link
} from "@mui/material";
import logo from "./assets/logo.jpg";

export default function App() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    alert(e);
  };

  const onPasswordLost = (e) => {
    alert(e);
  };

  return (
    <Container sx={{ p: 4 }}>
      <Box sx={{ gap: 4, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" }
          }}
        >
          <Box
            sx={{
              width: 306,
              height: 270,
              alignSelf: { xs: "center", md: "left" }
            }}
          >
            <img src={logo} alt="La Louise" />
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="filled-basic"
              label="Phone"
              variant="filled"
            />
            <TextField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="filled-basic"
              label="Password"
              variant="filled"
            />
            <Typography sx={{ textAlign: "center" }}>
              Bienvenue sur le systeme de gestion de LaLouise . Veuillez vous
              connectez avec votre numero de telephone et votre mot de passe
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
        >
          <Typography>
            <Link>@DoctaRhyf</Link> 2023
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
