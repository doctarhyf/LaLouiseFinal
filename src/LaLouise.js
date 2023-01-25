import {
  Container,
  Button,
  Box,
  Typography,
  TextField,
  Link
} from "@mui/material";
import PageLogin from "./pages/PageLogin";
import PageMainMenu from "./pages/PageMainMenu";
import Footer from "./comps/Footer";
import TopCorner from "./comps/TopCorner";
import { PAGES, MAIN_MENU_ITEMS } from "./Consts";
import { useState } from "react";

export default function LaLouise({ curPage, GotoPage, onLogout }) {
  const [curSection, setCurSection] = useState(MAIN_MENU_ITEMS[4]);

  const onMenuItemClicked = (pg) => {
    showSection(pg);
  };

  const showSection = (pg) => {
    let cpg = undefined;

    MAIN_MENU_ITEMS.map((it, idx) => {
      if (pg === it.n) {
        cpg = it;
      }
    });

    if (cpg !== undefined) {
      alert(JSON.stringify(cpg));
      return;
    }

    alert("Page not found");
  };

  return (
    <Container sx={{ p: 4, mt: 8 }}>
      {curPage !== PAGES.LOGIN && <TopCorner />}

      {curPage === PAGES.LOGIN && <PageLogin GotoPage={GotoPage} />}
      {curPage === PAGES.MAIN_MENU && (
        <PageMainMenu
          onMenuItemClicked={onMenuItemClicked}
          GotoPage={GotoPage}
        />
      )}

      {curPage !== PAGES.LOGIN && <Footer onLogout={onLogout} />}
      <Typography sx={{ position: "sticky", mb: 2, ml: 2, bottom: 0, left: 0 }}>
        <Link>@LaLouise</Link> 2023
      </Typography>
    </Container>
  );
}
