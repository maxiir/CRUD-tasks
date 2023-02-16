import Nav from "../components/Nav";
import {useEffect, useState} from 'react'
import { Formik } from 'formik'
import { newTask } from "../api/api_rest.js";

function Home(){
  

  return (
    <div>
      <Nav />
      <h1>Add tasks</h1>

      <Formik initialValues={{
        name:'',
        description:'',
      }} onSubmit={(values)=>{
        newTask(values)
      }} >
        {({handleChange,handleSubmit})=>(
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="ingrese el titulo de la tarea" name="title" onChange={handleChange}/>
            <textarea name= "description" type="text" cols="30" rows="10" placeholder="Agrege descripcion de tarea" onChange={handleChange}></textarea>
            <button type="submit" className="border-2 border-black">Guardar</button>
          </form>
        )}
        
      </Formik>
     
     
      

    </div>
  );
}

export default Home;
