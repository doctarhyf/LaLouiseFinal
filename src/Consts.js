import logo from "./assets/logo.jpg";
import pharmacie from "./assets/pharmacie.jpg";
import acoucheuse from "./assets/acoucheuse.png";
import finance from "./assets/finance.png";
import gynecology from "./assets/gynecology.png";
import labo from "./assets/labo.png";
import rdv from "./assets/rdv.png";
import reception from "./assets/reception.png";

const PAGES = {
  LOGIN: "login",
  MAIN_MENU: "mainMenu"
};

const MAIN_MENU_ITEMS = [
  { n: "Acoucheuse", i: acoucheuse },
  { n: "Finance", i: finance },
  { n: "Gynecology", i: gynecology },
  { n: "Labo", i: labo },
  { n: "Pharmacie", i: pharmacie },
  { n: "Rendez-vous", i: rdv },
  { n: "Reception", i: reception }
];

export { logo, PAGES, MAIN_MENU_ITEMS };
