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
  Chip,
  Avatar,
  Dialog,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@mui/material";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { handleSaveData, handleSaveNewMed } from "../handles/handlesSave";
import { getDocs, collection, getFirestore } from "@firebase/firestore";
import { ArrowRight, Camera, AddIcon } from "@mui/icons-material";
import { db } from "../firebase_setup/firebase";
import pharmacy from "../assets/pharmacie.jpg";
import SectionHeader from "../comps/SectionHeader";
import { MED_FORM, STFY, COLLECTIONS } from "../Consts";
import "../styles.css";

function TableMeds({ meds, onMedClick }) {
  return (
    <>
      <TableContainer sx={{ mt: 2 }} component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NUM.</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Forme</TableCell>
              <TableCell>Dosage</TableCell>
              <TableCell>Quantite</TableCell>
              <TableCell>Prix</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {meds.map((med, idx) => (
              <TableRow
                className="med-row"
                onClick={(e) => onMedClick(med, idx)}
                key={med.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {idx + 1}
                </TableCell>
                <TableCell>{med.nom}</TableCell>
                <TableCell>{med.forme}</TableCell>
                <TableCell>{med.dosage}</TableCell>
                <TableCell>{med.quantite}</TableCell>
                <TableCell>{med.prix}</TableCell>
              </TableRow>
            ))}

            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell component="th" scope="row">
                TOTAL ({meds.length} )
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

function DialogAddDrug(props) {
  const { onClose, selectedValue, open, medForm, onMedFormChange } = props;
  const [nom, setNom] = useState("");
  const [forme, setForme] = useState("");
  const [dosage, setDosage] = useState("");
  const [quantite, setQuantite] = useState(0);
  const [price, setPrice] = useState(0);

  const onAddMed = async () => {
    const newMedData = {
      nom: nom,
      forme: forme,
      dosage: dosage,
      quantite: quantite
    };

    const res = await handleSaveNewMed(newMedData);
    if (res.code && res.name) {
      // if an error occured
      alert(`Error : ${res.name}\nCode : ${res.code}`);
    } else {
      alert("Med added to database successfuly!");
    }

    onClose();
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <DialogTitle>{props.dialType}</DialogTitle>
      <Box
        sx={{ pt: 0, p: 2, gap: 2, display: "flex", flexDirection: "column" }}
      >
        <Typography>No 112</Typography>
        <TextField
          label="Nom du produit"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          focused
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Forme</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={forme}
            label="Forme"
            onCha
            onChange={(e) => setForme(e.target.value)}
          >
            {MED_FORM.map((it, idx) => (
              <MenuItem key={idx} value={it}>
                {it}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          placeholder={"200 mg/5ml"}
          label="Dosage"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
          focused
        />

        <TextField
          type={"number"}
          label="Quantite"
          value={quantite}
          onChange={(e) => setQuantite(e.target.value)}
          focused
        />

        <TextField
          sx={{
            width: 1,
            display: "none",
            ...(props.dialType === DRUG_DIALOG.ENTREE && {
              display: "block"
            })
          }}
          type={"number"}
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          focused
        />

        {props.dialType === DRUG_DIALOG.SORTIE && (
          <Typography>{price}</Typography>
        )}

        {props.dialType === DRUG_DIALOG.SORTIE && (
          <>
            <Divider /> Total Price : {quantite * price} FC
            <Divider />
          </>
        )}

        <Button onClick={onAddMed}>CONFIRMER</Button>
        <Button onClick={onClose} variant="contained" color="error">
          ANNULER
        </Button>
      </Box>
    </Dialog>
  );
}

DialogAddDrug.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

const DRUG_DIALOG = {
  ENTREE: "ENTREE STOCK",
  SORTIE: "SORTIE STOCK"
};

export default function SecPharmacy({ sectionData }) {
  const [showOnlyNotEnStock, setShowOnlyNotEnStock] = useState(false);
  const [open, setOpen] = useState(false);
  const [medForm, setMedForm] = useState("");
  const [meds, setMeds] = useState([]);
  const [drugDialogType, setDrugDialogType] = useState(DRUG_DIALOG.ENTREE);
  const [curMed, setCurMed] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMeds = async () => {
    setLoading(true);
    await getDocs(collection(db, COLLECTIONS.MEDS)).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));

      setMeds(newData);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMeds();
  }, []);

  const onMedFormChange = (e) => {
    setMedForm(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //setSelectedValue(value);
  };

  const handleShowOnlyNotEnStock = () => {
    setShowOnlyNotEnStock(!showOnlyNotEnStock);
    alert(showOnlyNotEnStock);
  };

  const onAjoutInventaire = (dialType) => {
    setDrugDialogType(dialType);
    handleClickOpen();
  };

  const onMedClick = (med, idx) => {
    setCurMed(med);
    onAjoutInventaire(DRUG_DIALOG.SORTIE);
  };

  return (
    <Container>
      <SectionHeader data={sectionData} />
      <Divider />

      <Box sx={{ py: 2, display: "flex", flexDirection: "row", gap: 2 }}>
        <Chip
          onClick={(e) => onAjoutInventaire(DRUG_DIALOG.ENTREE)}
          label="ENTREE"
          color="success"
          avatar={<Avatar>+</Avatar>}
        />

        <Chip
          className="pointer"
          onClick={handleShowOnlyNotEnStock}
          label="VOIR MANQUE EN STOCK"
          color="primary"
          variant={showOnlyNotEnStock === true ? "outlined" : "filled"}
        />

        <DialogAddDrug
          curMed={curMed}
          medForm={medForm}
          onMedFormChange={onMedFormChange}
          open={open}
          onClose={handleClose}
          dialType={drugDialogType}
        />
      </Box>
      <Divider />
      {loading && (
        <Typography>
          <progress /> Loading ...
        </Typography>
      )}
      <TableMeds meds={meds} onMedClick={onMedClick} />
    </Container>
  );
}
