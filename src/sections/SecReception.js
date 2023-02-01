import {
  Container,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Divider,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl
} from "@mui/material";

import { ArrowRight, Camera, AddIcon } from "@mui/icons-material";

import pharmacy from "../assets/pharmacie.jpg";
import SectionHeader from "../comps/SectionHeader";
import { useState, useEffect } from "react";
import { handleSaveNewPatient } from "../handles/handlesSave";

export default function SecReception({ sectionData }) {
  const [age, setAge] = useState(30);
  const [etatCivil, setEtatCivil] = useState("marie");
  const [sex, setSex] = useState("m");
  const [cat, setCat] = useState("a");
  const [zone, setZone] = useState("AS");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [addresse, setAddresse] = useState("");
  const [profession, setProfession] = useState("");
  const [heureArrivee, setHeureArrivee] = useState("");
  const [dateArrivee, setDateArrivee] = useState("");
  const [poids, setPoids] = useState(0);
  const [temp, setTemp] = useState(0);
  const [ficheData, setFicheData] = useState({});

  const onSaveNewPatient = (e) => {
    let fiche = `1.Personal Info\n\nnom:${nom}\n`;
    fiche = fiche.concat(`prenom:${prenom}\n`);
    fiche = fiche.concat(`age:${age}\n`);
    fiche = fiche.concat(`addresse:${addresse}\n`);
    fiche = fiche.concat(`profession:${profession}\n`);
    fiche = fiche.concat(`sex:${sex}\n`);
    fiche = fiche.concat(`zone:${zone}\n`);
    fiche = fiche.concat(`cat:${cat}\n`);
    fiche = fiche.concat(`HA:${heureArrivee}\n`);
    fiche = fiche.concat(`DA:${dateArrivee}\n`);
    fiche = fiche.concat(`3. Antecedents\n\n`);
    fiche = fiche.concat(`Poids:${poids}\n`);
    fiche = fiche.concat(`temp:${temp}\n`);

    setFicheData({
      prenom: prenom,
      age: age,
      addresse: addresse,
      profession: profession,
      sex: sex,
      zone: zone,
      cat: cat,
      HA: heureArrivee,
      DA: dateArrivee,
      poids: poids,
      temp: temp
    });

    handleSaveNewPatient(ficheData);
  };

  useEffect(() => {}, [ficheData]);

  return (
    <Container>
      <SectionHeader data={sectionData} />
      <Divider />
      <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
        FICHE DE CONSULTATION
      </Typography>
      <Divider />

      <Typography variant="h6" sx={{ my: 2 }}>
        1. PERSONAL INFO
      </Typography>

      <Box
        sx={{
          py: 2,
          gap: 2,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <TextField
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          sx={{ width: 1 / 4 }}
          label={"Nom"}
        />
        <TextField
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          sx={{ width: 1 / 3 }}
          label={"Prenom"}
        />

        <TextField
          type="number"
          defaultValue="10"
          sx={{ width: 1 / 3 }}
          label={"Age"}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <TextField
          value={addresse}
          onChange={(e) => setAddresse(e.target.value)}
          label={"Adresse"}
        />
        <FormControl sx={{ width: 1 / 3.6 }}>
          <InputLabel id="demo-simple-select-label">Etat-Civil</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={etatCivil}
            label="Etat-Civil"
            onChange={(e) => setEtatCivil(e.target.value)}
          >
            <MenuItem value={"marie"}>Marie</MenuItem>
            <MenuItem value={"celib"}>Celibataire</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: 1 / 3 }}>
          <InputLabel id="demo-simple-select-label">Sex</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sex}
            label="Age"
            onChange={(e) => setSex(e.target.value)}
          >
            <MenuItem value={"m"}>M</MenuItem>
            <MenuItem value={"f"}>F</MenuItem>
          </Select>
        </FormControl>

        <TextField
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          label={"Profession"}
        />

        <FormControl sx={{ width: 1 / 3.6 }}>
          <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cat}
            label="Etat-Civil"
            onChange={(e) => setCat(e.target.value)}
          >
            <MenuItem value={"a"}>a</MenuItem>
            <MenuItem value={"b"}>b</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: 1 / 3 }}>
          <InputLabel id="demo-simple-select-label">Zone</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={zone}
            label="Etat-Civil"
            onChange={(e) => setZone(e.target.value)}
          >
            <MenuItem value={"AS"}>AS</MenuItem>
            <MenuItem value={"HA"}>HA</MenuItem>
            <MenuItem value={"Hors Zone"}>Hors Zone</MenuItem>
          </Select>
        </FormControl>

        <TextField
          type="time"
          value={heureArrivee}
          onChange={(e) => setHeureArrivee(e.target.value)}
          label={"HEURE D'ARRIVEE"}
          sx={{ width: 1 / 2 }}
        />
        <TextField
          type="date"
          value={dateArrivee}
          onChange={(e) => setDateArrivee(e.target.value)}
          label={"Date D'ARRIVEE"}
          sx={{ width: 1 / 2.2 }}
        />
      </Box>

      <Typography variant="h6" sx={{ my: 2 }}>
        2. VACCINS
      </Typography>

      <Typography variant="h6" sx={{ my: 2 }}>
        3. ANTECEDANTS
      </Typography>

      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" }}
      >
        <TextField type="date" label={"Date"} sx={{ width: 1 / 2.2 }} />
        <TextField
          value={poids}
          onChange={(e) => setPoids(e.target.value)}
          type="number"
          label={"Poids"}
          sx={{ width: 1 / 2 }}
        />
        <TextField
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          type="number"
          label={"Temperature"}
          sx={{ width: 1 / 2.2 }}
        />
        <TextField label={"T.A/T.P"} sx={{ width: 1 / 2 }} />
      </Box>

      <Button
        onClick={onSaveNewPatient}
        sx={{ my: 2, width: 1 }}
        variant="contained"
      >
        ENREGISTRER PATIENT
      </Button>
    </Container>
  );
}
