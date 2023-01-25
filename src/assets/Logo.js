import {
  Container,
  Button,
  Box,
  Typography,
  TextField,
  Link
} from "@mui/material";
import { logo } from "../Consts";

export default function Logo() {
  return (
    <Box
      sx={{
        width: 306,
        height: 270,
        alignSelf: { xs: "center", md: "left" }
      }}
    >
      <img src={logo} alt="La Louise" />
    </Box>
  );
}
