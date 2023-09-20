
import {uploadFile} from "../configuracion/funciones.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SubirArchivo() {


    return (
        <>

          <label>Photo</label>
          <input type="file" onChange={(e) => uploadFile(e.target.files[0])} />

        </>
      );
}
export default  SubirArchivo;

