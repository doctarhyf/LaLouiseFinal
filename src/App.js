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
import PageLogin from "./pages/PageLogin";
import PageMainMenu from "./pages/PageMainMenu";
import Footer from "./comps/Footer";
import TopCorner from "./comps/TopCorner";

import { PAGES } from "./Consts";

export default function App() {
  const [curPage, setCurPage] = useState(PAGES.MAIN_MENU);

  const GotoPage = (page) => {
    setCurPage(page);

    alert(`going to ${page}`);
  };

  const onLogout = (e) => {
    setCurPage(PAGES.LOGIN);
  };

  return (
    <Container sx={{ p: 4, mt: 8 }}>
      {curPage !== PAGES.LOGIN && <TopCorner />}

      {curPage === PAGES.LOGIN && <PageLogin GotoPage={GotoPage} />}
      {curPage === PAGES.MAIN_MENU && <PageMainMenu GotoPage={GotoPage} />}

      {curPage !== PAGES.LOGIN && <Footer onLogout={onLogout} />}
      <Typography sx={{ position: "sticky", mb: 2, ml: 2, bottom: 0, left: 0 }}>
        <Link>@LaLouise</Link> 2023
      </Typography>
    </Container>
  );
}
