import logo from "./assets/logo.jpg";
import pharmacie from "./assets/pharmacie.jpg";
import acoucheuse from "./assets/acoucheuse.png";
import finance from "./assets/finance.png";
import gynecology from "./assets/gynecology.png";
import labo from "./assets/labo.png";
import rdv from "./assets/rdv.png";
import reception from "./assets/reception.png";
import meds from "./assets/meds.png";
import inf from "./assets/inf.png";
import lpat from "./assets/hosp.png";

const COLLECTIONS = {
  PATIENTS: "patients",
  MEDS: "meds"
};

const PAGES = {
  LOGIN: "login",
  MAIN_MENU: "mainMenu"
};

const MAIN_MENU_ITEMS = [
  { n: "Acoucheuse", i: acoucheuse, hasInvoice: true, visible: false },
  {
    n: "Finance",
    i: finance,
    sub: "This were you manage all finances.",
    hasInvoice: false,
    visible: true,
    facture: ["fact1", "fact2", "fact3"]
  },
  { n: "Gynecology", i: gynecology, hasInvoice: true, visible: false },
  { n: "Labo", i: labo, hasInvoice: true, visible: false },
  {
    n: "Pharmacie",
    sub: "Check all meds stored",
    i: pharmacie,
    hasInvoice: true,
    visible: true
  },
  { n: "Rendez-vous", i: rdv, hasInvoice: false, visible: true },
  {
    n: "Reception",
    sub: "Enregistrement d'un nouveau patient.",
    i: reception,
    hasInvoice: true,
    visible: true
  },
  { n: "Medecins", i: meds, hasInvoice: false, visible: true },
  { n: "Infirmiers", i: inf, hasInvoice: false, visible: true },
  {
    n: "Liste des patients",
    sub: "Affiche la liste de tous les patients",
    i: lpat,
    visible: true,
    hasInvoice: false
  }
];

/*
,
  {
    n: "Liste des patients",
    sub: "Affiche la liste de tous les patients",
    i: lpat,
    visible: true,
  }
*/

const MED_FORM = [
  "Solution Buvale",
  "Comprime",
  "Sirop",
  "Injectable",
  "Perfusion",
  "Suspense"
];

const STFY = (obj) => {
  return JSON.stringify(obj);
};

export { logo, PAGES, MAIN_MENU_ITEMS, COLLECTIONS, STFY, MED_FORM };
