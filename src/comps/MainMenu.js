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
import { MAIN_MENU_ITEMS } from "../Consts";
import MainMenuItem from "./MainMenuItem";

export default function MainMenu({ onMenuItemClicked }) {
  return (
    <Box sx={{ backgroundColor: "transparant" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          backgroundColor: "transparant",
          textAlign: "center",
          p: 2,
          color: "secondary"
        }}
      >
        Bienvenue!
      </Typography>

      <Typography sx={{ textAlign: "center" }}>
        Bienvenue chez la louise, veuillez cliquer sur un departement.
      </Typography>

      <Box
        className="main-menu-items-cont"
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap"
        }}
      >
        {MAIN_MENU_ITEMS.map((it, idx) => (
          <MainMenuItem
            onMenuItemClicked={onMenuItemClicked}
            icon={it.i}
            title={it.n}
          />
        ))}
      </Box>
    </Box>
  );
}
