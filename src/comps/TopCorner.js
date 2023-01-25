import {
  Container,
  Button,
  Box,
  Typography,
  TextField,
  Link
} from "@mui/material";
import user from "../assets/user.png";

export default function Footer({}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        position: "absolute",
        m: 2,
        top: 0,
        right: 0
      }}
    >
      <Box>
        <Typography variant="h6" color="black">
          @DoctaRhyf
        </Typography>
        <Typography color="gray">0892125049</Typography>
      </Box>
      <Box>
        <img src={user} />
      </Box>
    </Box>
  );
}
