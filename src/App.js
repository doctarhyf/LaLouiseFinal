import "./styles.css";
import { useState } from "react";
import { PAGES } from "./Consts";
import LaLouise from "./LaLouise";

export default function App() {
  const [curPage, setCurPage] = useState(PAGES.MAIN_MENU);

  const GotoPage = (page) => {
    setCurPage(page);

    alert(`going to ${page}`);
  };

  const onLogout = (e) => {
    setCurPage(PAGES.LOGIN);
  };

  return <LaLouise curPage={curPage} GotoPage={GotoPage} onLogout={onLogout} />;
}
