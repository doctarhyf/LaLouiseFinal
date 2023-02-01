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
import { useState } from "react";
import PropTypes from 'prop-types';
import { handleSaveData, handleSaveNewMed } from '../handles/handlesSave';

import { ArrowRight, Camera, AddIcon } from "@mui/icons-material";

import pharmacy from "../assets/pharmacie.jpg";
import SectionHeader from "../comps/SectionHeader";
import { MED_FORM, STFY } from '../Consts';

let m = [];

for (let i = 0; i < 10; i++) {
  m.push({ id: i, n: "medicame " + i });
}

function TableMeds({ meds }) {
  meds = m;

  return (
    <>
      <TableContainer sx={{ mt: 2 }} component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NUM.</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>En Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {meds.map((med) => (
              <TableRow
                key={med.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {med.id}
                </TableCell>
                <TableCell>{med.n}</TableCell>
                <TableCell>{med.id}</TableCell>
              </TableRow>
            ))}

            <TableRow sx={{ fontWeight: "bold" }}>
              <TableCell component="th" scope="row">
                TOTAL ({meds.length} )
              </TableCell>
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
  const [nom, setNom] = useState('');
  const [forme, setForme] = useState('');
  const [dosage, setDosage] = useState('');
  const [quantite, setQuantite] = useState(0);

  const onAddMed = async() => {

    const newMedData = {
      nom:nom,
      forme:forme,
      dosage:dosage,
      quantite:quantite
    }

    const res = await handleSaveNewMed(newMedData)
    if(res.code && res.name){ // if an error occured
      alert(`Error : ${res.name}\nCode : ${res.code}`);
    }else{
      alert('Med added to database successfuly!')
    }

    onClose();
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  
  return (
    <Dialog onClose={handleClose} open={open} >
      <DialogTitle>Ajout Produit</DialogTitle>
      <Box sx={{ pt: 0, p:2, gap:2, display:'flex', flexDirection:'column' }}>
        
          
        
          <Typography>No 112</Typography>
          <TextField label="Nom du produit" value={nom} onChange={e => setNom(e.target.value)} focused />
          
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Forme</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={forme}
              label="Forme"
              onCha
              onChange={e => setForme(e.target.value)}
            >
              { MED_FORM.map((it, idx) => <MenuItem key={idx} value={it}>{it}</MenuItem> ) }
              
            </Select>
          </FormControl>

          <TextField placeholder={"200 mg/5ml"} label="Dosage"  value={dosage} onChange={ e => setDosage(e.target.value) }  focused />

          <TextField type={'number'} label="Quantite" value={quantite} onChange={ e => setQuantite(e.target.value) } focused />

          <Button onClick={onAddMed} >CONFIRMER</Button>
          <Button onClick={onClose} variant='contained' color='error' >ANNULER</Button>

        
      </Box>
    </Dialog>
  );
}

DialogAddDrug.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SecPharmacy({ sectionData }) {
  const [showOnlyNotEnStock, setShowOnlyNotEnStock] = useState(false);
  const [open, setOpen] = useState(false);
  //const [selectedValue, setSelectedValue] = useState(emails[1]);
  const [medForm, setMedForm] = useState('')
  
  const onMedFormChange = (e) => {
    setMedForm(e.target.value);
  }

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

  const onAjoutInventaire = (e) => {
    handleClickOpen(e)
  };

  return (
    <Container>
      <SectionHeader data={sectionData} />
      <Divider />

      <Box sx={{ py: 2, display: "flex", flexDirection: "row", gap: 2 }}>
        <Chip
          onClick={onAjoutInventaire}
          label="AJOUT NOUVEAU PRODUIT"
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

        <DialogAddDrug 
          
          medForm={medForm}
          onMedFormChange = {onMedFormChange}
          open={open}
          onClose={handleClose}
        />

      </Box>
      <Divider />
      <TableMeds meds={[]} />
    </Container>
  );
}
