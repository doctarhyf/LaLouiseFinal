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
import { useState } from "react";

export default function SecReception({ sectionData }) {
  const [age, setAge] = useState(30);
  const [etatCivil, setEtatCivil] = useState("marie");
  const [sex, setSex] = useState("m");
  const [cat, setCat] = useState("a");
  const [zone, setZone] = useState("AS");

  const handleChange = (e) => {
    alert(JSON.stringify(e.target.value));
  };

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
        <TextField sx={{ width: 1 / 4 }} label={"Nom"} />
        <TextField sx={{ width: 1 / 3 }} label={"Prenom"} />

        <TextField
          type="number"
          defaultValue="10"
          sx={{ width: 1 / 3 }}
          label={"Age"}
        />

        <TextField label={"Adresse"} />
        <FormControl sx={{ width: 1 / 3.6 }}>
          <InputLabel id="demo-simple-select-label">Etat-Civil</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={etatCivil}
            label="Etat-Civil"
            onChange={handleChange}
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
            onChange={handleChange}
          >
            <MenuItem value={"m"}>M</MenuItem>
            <MenuItem value={"f"}>F</MenuItem>
          </Select>
        </FormControl>

        <TextField label={"Profession"} />

        <FormControl sx={{ width: 1 / 3.6 }}>
          <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cat}
            label="Etat-Civil"
            onChange={handleChange}
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
            onChange={handleChange}
          >
            <MenuItem value={"AS"}>AS</MenuItem>
            <MenuItem value={"HA"}>HA</MenuItem>
            <MenuItem value={"Hors Zone"}>Hors Zone</MenuItem>
          </Select>
        </FormControl>
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
        <TextField type="number" label={"Poids"} sx={{ width: 1 / 2 }} />
        <TextField
          type="number"
          label={"Temperature"}
          sx={{ width: 1 / 2.2 }}
        />
        <TextField label={"T.A/T.P"} sx={{ width: 1 / 2 }} />
      </Box>

      <Button sx={{ my: 2, width: 1 }} variant="contained">
        ENREGISTRER PATIENT
      </Button>
    </Container>
  );
}
