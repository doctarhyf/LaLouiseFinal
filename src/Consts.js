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
import lpat from "./assets/inf.png";

const COLLECTIONS = {
  PATIENTS: "patients"
};

const PAGES = {
  LOGIN: "login",
  MAIN_MENU: "mainMenu"
};



const MAIN_MENU_ITEMS = [
  { n: "Acoucheuse", i: acoucheuse, hasInvoice:true },
  { n: "Finance", i: finance, sub:"This were you manage all finances.", hasInvoice:false },
  { n: "Gynecology", i: gynecology, hasInvoice:true },
  { n: "Labo", i: labo, hasInvoice:true },
  { n: "Pharmacie", sub: "Check all meds stored", i: pharmacie, hasInvoice:true },
  { n: "Rendez-vous", i: rdv, hasInvoice:false },
  { n: "Reception", sub: "Enregistrement d'un nouveau patient.", i: reception, hasInvoice:true },
  { n: "Medecins", i: meds, hasInvoice:false },
  { n: "Infirmiers", i: inf , hasInvoice:false },
  {
    n: "Liste des patients",
    sub: "Affiche la liste de tous les patients",
    i: lpat
  }
];

const MED_FORM = [
  'Solution Buvale',
  'Comprime',
  'Sirop',
  'Injectable',
  'Perfusion',
  'Suspense',
  
]

const STFY = (obj) => {
  return JSON.stringify(obj);
}

export { logo, PAGES, MAIN_MENU_ITEMS, COLLECTIONS, STFY, MED_FORM };
