import {
  Container,
  Divider,
  Typography,
  FormControl,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from "@mui/material";
import SectionHeader from "../comps/SectionHeader";
import { useState } from "react";
import { STFY, MAIN_MENU_ITEMS } from "../Consts";

export default function SecFinance({ sectionData }) {
  const [dep, setDep] = useState("");
  const [curDep, setCurDep] = useState({});
  const [facture, setFacture] = useState("");

  const onSetDep = (val) => {
    setDep(val);
    const res = MAIN_MENU_ITEMS.find(({ n }) => n === val);
    setCurDep(res);
    console.log(res);
  };

  return (
    <Container>
      <SectionHeader data={sectionData} />
      <Divider />
      <Typography variant="h6" sx={{ my: 2 }}>
        Insertion De Facture{" "}
        {dep !== "" && (
          <Typography sx={{ display: "inline", fontWeight: "bold" }}>
            {" / "}
            {dep}
          </Typography>
        )}
      </Typography>
      <Divider />

      <Box>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Departement
          </InputLabel>

          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={dep}
            label="Departement"
            onChange={(e) => onSetDep(e.target.value)}
          >
            {MAIN_MENU_ITEMS.map(
              (it, idx) =>
                it.hasInvoice && (
                  <MenuItem key={idx} value={it.n}>
                    {it.n}
                  </MenuItem>
                )
            )}
          </Select>
          <FormHelperText>
            Veuillez choisir un departement pour voir la liste des factures a
            inserer.
          </FormHelperText>
        </FormControl>
      </Box>
    </Container>
  );
}
