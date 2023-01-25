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

import { PAGES } from "./Consts";

export default function App() {
  const [curPage, setCurPage] = useState(PAGES.MAIN_MENU);

  const GotoPage = (page) => {
    setCurPage(page);

    alert(`going to ${page}`);
  };

  return (
    <Container sx={{ p: 4 }}>
      {curPage === PAGES.LOGIN && <PageLogin GotoPage={GotoPage} />}
      {curPage === PAGES.MAIN_MENU && <PageMainMenu GotoPage={GotoPage} />}

      <Footer />
    </Container>
  );
}
