import {
  Container,
  Button,
  Box,
  Typography,
  TextField,
  Link
} from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ position: "absolute", mb: 2, mr: 2, bottom: 0, right: 0 }}>
      <Button variant="outlined" color="error">
        SE CONNECTER
      </Button>
      <Typography>
        <Link>@LaLouise</Link> 2023
      </Typography>
    </Box>
  );
}
