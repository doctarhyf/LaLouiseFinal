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
  Chip,
  Avatar
} from "@mui/material";
import { useState } from "react";

import { ArrowRight, Camera, AddIcon } from "@mui/icons-material";

import pharmacy from "../assets/pharmacie.jpg";
import SectionHeader from "../comps/SectionHeader";

let m = [];

for (let i = 0; i < 10; i++) {
  m.push({ id: i, n: "medicame " + i });
}

function TableMeds({ meds }) {
  meds = m;

  return (
    <>
      <TableContainer sx={{ mt: 2 }} component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NUM.</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>En Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {meds.map((med) => (
              <TableRow
                key={med.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {med.id}
                </TableCell>
                <TableCell>{med.n}</TableCell>
                <TableCell>{med.id}</TableCell>
              </TableRow>
            ))}

            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell component="th" scope="row">
                TOTAL ({meds.length} )
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default function SecPharmacy({ sectionData }) {
  const [showOnlyNotEnStock, setShowOnlyNotEnStock] = useState(false);

  const handleShowOnlyNotEnStock = () => {
    setShowOnlyNotEnStock(!showOnlyNotEnStock);
    alert(showOnlyNotEnStock);
  };

  const onAjoutInventaire = (e) => {
    alert("onAjoutInventaire ...");
  };

  return (
    <Container>
      <SectionHeader data={sectionData} />
      <Divider />

      <Box sx={{ py: 2, display: "flex", flexDirection: "row", gap: 2 }}>
        <Chip
          onClick={onAjoutInventaire}
          label="AJOUT ARRIVAGE"
          color="secondary"
          avatar={<Avatar>+</Avatar>}
        />

        <Chip
          className="pointer"
          onClick={handleShowOnlyNotEnStock}
          label="VOIR MANQUE EN STOCK"
          color="primary"
          variant={showOnlyNotEnStock === true ? "outlined" : "filled"}
        />
      </Box>
      <Divider />
      <TableMeds meds={[]} />
    </Container>
  );
}
