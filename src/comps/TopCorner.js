import {
  Container,
  Button,
  Box,
  Typography,
  TextField,
  Link
} from "@mui/material";
import user from "../assets/user.png";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const LoggedInUser = (userData) => {
  return (
    <Typography variant="subtitle1" color="success" sx={{ fontWeight: "bold" }}>
      @DoctaRhyf
    </Typography>
  );
};

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
      <Chip
        color="success"
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label={<LoggedInUser />}
      />
    </Box>
  );
}
