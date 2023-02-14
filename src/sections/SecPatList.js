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

import { getDocs, collection, getFirestore } from "@firebase/firestore";

import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import {
  ArrowRight,
  Camera,
  AddIcon,
  Home,
  DangerousSharp
} from "@mui/icons-material";

import { MED_FORM, STFY, COLLECTIONS } from "../Consts";
import { db } from "../firebase_setup/firebase";
import pharmacy from "../assets/pharmacie.jpg";
import SectionHeader from "../comps/SectionHeader";
import { async } from "@firebase/util";

function PatItem({ prenom, DA }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={prenom} secondary={DA} />
    </ListItem>
  );
}

export default function SecPharmacy({ sectionData, showReception }) {
  const [patList, setPatList] = useState([]);

  const fetchPatList = async () => {
    await getDocs(collection(db, COLLECTIONS.PATIENTS)).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));

        setPatList(newData);
        //alert(todos, newData);
      }
    );
  };

  useEffect(() => {
    fetchPatList();
  }, [patList]);

  return (
    <Container>
      <SectionHeader data={sectionData} />
      <Divider />

      <Box sx={{ py: 2, display: "flex", flexDirection: "row", gap: 2 }}>
        <Chip
          onClick={showReception}
          label="RECEPTION"
          color="secondary"
          avatar={
            <Avatar>
              <Home />
            </Avatar>
          }
        />
      </Box>
      <Divider />

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {patList.map((it, idx) => (
          <PatItem prenom={it.prenom} DA={it.DA} />
        ))}
      </List>
    </Container>
  );
}
