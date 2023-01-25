import { Container, Typography, Box } from "@mui/material";

export default function SectionHeader({ data }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDiection: "row",
        justifyContent: "flex-start",
        gap: 2
      }}
    >
      <img src={data.i} width="90" height="90" />

      <Box>
        <Typography variant="h4">{data.n}</Typography>
        <Typography>Store an check all meds</Typography>
      </Box>
    </Box>
  );
}
