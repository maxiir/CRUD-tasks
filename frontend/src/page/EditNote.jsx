import Nav from "../components/Nav"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { updateNote } from "../api/api_rest"
import { getNote } from "../api/api_rest"
import {Formik} from 'formik'

import msg from 'sweetalert2'
import './EditNote.css'


function EditNote() {
  const [data,setData] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    getNote(id).then(response => {
      setData(response.data)
    })
  })
  // las variables titulo y descripcion son para que mantenga valores sin modificar al actualizar
  const titulo = data.title
  const description = data.description
 
  return (
    <div>
        <Nav/>

        <Formik initialValues={{
          
          title: titulo,
          description: description,
          data:''
        }}
        onSubmit ={(values)=>{
          updateNote(`${id}`,values)
        }} >
              
          {({handleChange,handleSubmit})=>(
            <form onSubmit={handleSubmit}>
              <h1>Edit note</h1>
              <input type="text" onChange={handleChange} name='title' placeholder= {data.title}/>
              <textarea name="description" cols="30" rows="10" onChange={handleChange} placeholder={data.description}></textarea>
              <button type="submit" onClick={()=>{msg.fire('actualizada!','','success')}}>save</button>
              <a><Link to={'/allnotes'}>Cancel</Link></a>
            </form>
          )}
        </Formik>

    </div>
  )
}

export default EditNote