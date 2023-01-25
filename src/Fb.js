import handleSubmit from "./handles/handlesubmit";
import { useRef } from "react";

function Fb() {
  const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };
  return (
    <div className="App">
            
      <form onSubmit={submithandler}>
                
        <input type="text" ref={dataRef} />
                <button type="submit">Save</button>
              
      </form>
          
    </div>
  );
}
export default Fb;
