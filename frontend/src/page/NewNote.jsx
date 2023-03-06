import Nav from "../components/Nav";
import { Formik } from "formik";
import { newNote } from "../api/api_rest.js";
import "./NewNote.css";
import { Link } from "react-router-dom";
import msg from 'sweetalert2'

function NewTask() {
  
 
  return (
    <div>
      <Nav />
      <div className="form-container">
        <Formik
          initialValues={{
            name: "",
            description: "",
            date: "",
          }}
          onSubmit={(values) => {
            try {
              newNote(values);
              msg.fire('Nota guardada en la base de datos','👍','success')
              
            } catch (error) {
              msg.fire('oops..!😣','hubo un problema al guardar la nota reintentalo nuevamente','error')
            }
            
            
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h1>Add new note</h1>
              <input
                type="text"
                placeholder="Ingrese el titulo de la tarea:"
                name="title"
                onChange={handleChange}
              />
              <textarea
                name="description"
                type="text"
                cols="30"
                rows="10"
                placeholder="Descripcion de la tarea:"
                onChange={handleChange}
              ></textarea>
              {/* poner type submit no deja poner un background css */}
              <button>Guardar</button>
              <p><Link to={"/"}>Salir</Link></p>
            </form>
          )}
        </Formik>


      </div>
    </div>
  );
}

export default NewTask;
