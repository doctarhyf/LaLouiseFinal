import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = (testdata) => {
  const ref = collection(firestore, "test_data"); // Firebase creates this automatically
  let data = {
    testData: testdata
  };
  try {
    addDoc(ref, data);
    alert(`adding to fb ${JSON.stringify(ref)}`);
  } catch (err) {
    console.log(err);
    alert(err);
  }
};
export default handleSubmit;
