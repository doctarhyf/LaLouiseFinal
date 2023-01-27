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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { ArrowRight, Camera, AddIcon } from "@mui/icons-material";

import pharmacy from "../assets/pharmacie.jpg";
import SectionHeader from "../comps/SectionHeader";

const patl = [
  {
    prenom: "prenom",
    age: "age",
    addresse: "addresse",
    profession: "profession",
    sex: "sex",
    zone: "zone",
    cat: "cat",
    HA: "heureArrivee",
    DA: "dateArrivee",
    poids: "poids",
    temp: "temp"
  },
  {
    prenom: "prenom",
    age: "age",
    addresse: "addresse",
    profession: "profession",
    sex: "sex",
    zone: "zone",
    cat: "cat",
    HA: "heureArrivee",
    DA: "dateArrivee",
    poids: "poids",
    temp: "temp"
  }
];

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

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </Container>
  );
}
