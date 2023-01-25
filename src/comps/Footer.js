import {
  Container,
  Button,
  Box,
  Typography,
  TextField,
  Link
} from "@mui/material";

export default function Footer({ onLogout }) {
  return (
    <Box sx={{ position: "sticky", mb: 2, mr: 2, bottom: 0, right: 0, mt: 2 }}>
      <Button onClick={onLogout} variant="contained" color="error">
        SE CONNECTER
      </Button>
    </Box>
  );
}
