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
import { Home } from "@mui/icons-material";
import { MAIN_MENU_ITEMS } from "../Consts";
import MainMenuItem from "./MainMenuItem";
import { useState } from "react";
import SecPharmacy from "../sections/SecPharmacy";
import SecReception from "../sections/SecReception";
import SecPatList from "../sections/SecPatList";
import SecFinance from "../sections/SecFinance";

export default function MainMenu() {
  const [curSection, setCurSection] = useState("");

  const onMenuItemClicked = (pg) => {
    showSection(pg);
  };

  const gotoMainMenu = () => {
    setCurSection("");
  };

  const showListePatients = (e) => {
    showSection("Liste des patients");
  };

  const showReception = (e) => {
    showSection("Reception");
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
        {curSection !== "" && (
          <Button onClick={gotoMainMenu}>
            <Home />
            HOME
          </Button>
        )}

        {MAIN_MENU_ITEMS.map(
          (it, idx) =>
            curSection === "" &&
            it.visible && (
              <MainMenuItem
                onMenuItemClicked={onMenuItemClicked}
                icon={it.i}
                title={it.n}
              />
            )
        )}

        {curSection.n === "Pharmacie" && (
          <SecPharmacy
            sectionData={curSection}
            sub="Check All meds available"
          />
        )}
        {curSection.n === "Reception" && (
          <SecReception
            sectionData={curSection}
            showListePatients={showListePatients}
          />
        )}
        {curSection.n === "Liste des patients" && (
          <SecPatList sectionData={curSection} showReception={showReception} />
        )}

        {curSection.n === "Finance" && <SecFinance sectionData={curSection} />}
      </Box>
    </Box>
  );
}
