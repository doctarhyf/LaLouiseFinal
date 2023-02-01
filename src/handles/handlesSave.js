import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import { COLLECTIONS } from "../Consts";

const handleSaveNewPatient = async (patientData) => {
  const ref = collection(firestore, COLLECTIONS.PATIENTS); // Firebase creates this automatically

  try {
    const res = await addDoc(ref, patientData);
    alert(`adding new patient : ${JSON.stringify(ref)}`);
    alert(`Res: ${res}`);
  } catch (err) {
    console.log(err);
    alert(err);
  }
};


const handleSaveNewMed = async (newMedData) => {
  const ref = collection(firestore, COLLECTIONS.MEDS); // Firebase creates this automatically

  try {
    const res = await addDoc(ref, newMedData);
    //alert(`adding new med : ${JSON.stringify(ref)}`);
    //alert(`Res: ${res}`);
    return res;
  } catch (err) {
    console.log(err);
    //alert(err);
    return err;
  }
};


export {
  handleSaveNewPatient, handleSaveNewMed
} 
