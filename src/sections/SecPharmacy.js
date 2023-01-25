import { Container, Typography, Box } from "@mui/material";
import pharmacy from "../assets/pharmacie.jpg";
import SectionHeader from "../comps/SectionHeader";

export default function SecPharmacy({ sectionData }) {
  return (
    <Container>
      <SectionHeader data={sectionData} />
    </Container>
  );
}
