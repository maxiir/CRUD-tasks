import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import typed from 'typed.js'
import './Home.css'

function Home() {
  useEffect(()=>{
    const Typed = new typed('#titleChange',{
      strings:['Crea tus notas aqui'],
      cursorChar: '|',
      typeSpeed: 100,
      backSpeed: 5,
      loop:true
    })
    return () => { Typed.destroy() }
  })
  return (
    <div>
        <Nav/>
        <div className="container-presentacion">
          <span id='titleChange'></span>
        </div>
        <p className='btn-nota'><Link to={'/newnote'}>crear una nota</Link></p>
        <Footer/>    

    </div>  
  )
}

export default Home