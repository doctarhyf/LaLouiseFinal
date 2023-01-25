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
  Button
} from "@mui/material";

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
  return (
    <Container>
      <SectionHeader data={sectionData} />
      <Divider />
      <Box sx={{ my: 2 }}>
        <Button variant="contained">ARRIVAGE</Button>
      </Box>
      <TableMeds meds={[]} />
    </Container>
  );
}
