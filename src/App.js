import "./styles.css";
import { Container, Button, Box, Typography, TextField } from "@mui/material";
import logo from "./assets/logo.jpg";

export default function App() {
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
              backgroundColor: "tomato",
              alignSelf: { xs: "center", md: "left" }
            }}
          >
            <img src={logo} alt="La Louise" />
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <TextField id="filled-basic" label="Phone" variant="filled" />
            <TextField id="filled-basic" label="Password" variant="filled" />
            <Typography sx={{ textAlign: "center" }}>
              Bienvenue sur le systeme de gestion de LaLouise . Veuillez vous
              connectez avec votre numero de telephone et votre mot de passe
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
          <Button variant="contained">SE CONNECTER</Button>
          <Button color="error">Mot de passe oublie?</Button>
        </Box>
      </Box>
    </Container>
  );
}
