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

const FACTURES = {
  acc: ["Reception", "Bon de traitement", "Soins nouveau ne"],
  gyn: ["Premier Soin", "Traitement"],
  pha: ["Sortie Medicaments"],
  rec: ["Fiche de consultation"]
};

const MAIN_MENU_ITEMS = [
  {
    code: "acc",
    n: "Acoucheuse",
    i: acoucheuse,
    hasInvoice: true,
    visible: false
  },
  {
    code: "fin",
    n: "Finance",
    i: finance,
    sub: "This were you manage all finances.",
    hasInvoice: false,
    visible: true,
    facture: ["fact1", "fact2", "fact3"]
  },
  {
    code: "gyn",
    n: "Gynecology",
    i: gynecology,
    hasInvoice: true,
    visible: false
  },
  { code: "lab", n: "Labo", i: labo, hasInvoice: true, visible: false },
  {
    code: "pha",
    n: "Pharmacie",
    sub: "Check all meds stored",
    i: pharmacie,
    hasInvoice: true,
    visible: true
  },
  { code: "rdv", n: "Rendez-vous", i: rdv, hasInvoice: false, visible: true },
  {
    code: "rec",
    n: "Reception",
    sub: "Enregistrement d'un nouveau patient.",
    i: reception,
    hasInvoice: true,
    visible: true
  },
  { code: "med", n: "Medecins", i: meds, hasInvoice: false, visible: true },
  { code: "inf", n: "Infirmiers", i: inf, hasInvoice: false, visible: true },
  {
    code: "pat",
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
