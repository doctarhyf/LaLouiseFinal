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
import { useState } from "react";
import SecPharmacy from "../sections/SecPharmacy";

export default function MainMenu() {
  const [curSection, setCurSection] = useState("");

  const onMenuItemClicked = (pg) => {
    showSection(pg);
  };

  const gotoMainMenu = () => {
    setCurSection("");
    alert(JSON.stringify(curSection));
  };

  const showSection = (pg) => {
    let cpg = undefined;

    MAIN_MENU_ITEMS.map((it, idx) => {
      if (pg === it.n) {
        cpg = it;
      }
    });

    if (cpg !== undefined) {
      setCurSection(cpg);
      alert(JSON.stringify(cpg));
      return;
    }
    setCurSection("");
    alert("Page not found");
  };

  return (
    <Box sx={{ backgroundColor: "transparant" }}>
      {curSection === "" && (
        <Box>
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
        </Box>
      )}

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
        {curSection !== "" && <Button onClick={gotoMainMenu}>MAIN MENU</Button>}

        {MAIN_MENU_ITEMS.map(
          (it, idx) =>
            curSection === "" && (
              <MainMenuItem
                onMenuItemClicked={onMenuItemClicked}
                icon={it.i}
                title={it.n}
              />
            )
        )}

        {curSection.n === "Pharmacie" && <SecPharmacy />}
      </Box>
    </Box>
  );
}
