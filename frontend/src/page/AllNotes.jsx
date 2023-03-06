import Nav from "../components/Nav";
import './AllNotes.css'
import { useEffect,useState } from "react";
import { allNotes } from "../api/api_rest.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark,faPencil} from '@fortawesome/free-solid-svg-icons'
import { delNote } from "../api/api_rest.js";
import msg from 'sweetalert2'

function AllTask() {
  const [tasks,setTasks] = useState([])
  

  useEffect(()=>{
    allNotes().then(response => {
      setTasks(response.data)
      
    })
  })

  return (
    
    <div>
        <Nav/>
    
        {tasks.map((task)=>(
          
          <div key={task._id} className="container-card">
            
            <button onClick={async() =>             
              //  agregar mensaje             
                await delNote(task._id)
              }
                ><FontAwesomeIcon icon= {faXmark} /></button>

            {/* pasar como objeto, la asignacion de la etiqueta 'a' para pasar la variable del mapeo */}
            <a href= {`/allNotes/editNote/${task._id}`} ><FontAwesomeIcon icon= {faPencil} /></a>
            <h1>Tarea: {task.title}</h1>
            <p>Descripcion: {task.description}</p>
            <p>Fecha: {task.data}</p>
                
          </div>
          
        ))}      
    </div>
  )
}

export default AllTask