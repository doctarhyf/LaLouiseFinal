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

export default function SecReception({ sectionData }) {
  return (
    <Container>
      <SectionHeader data={sectionData} />
      <Divider />
    </Container>
  );
}
