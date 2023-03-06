import { Route, Routes } from "react-router-dom"
import NewNote from "./page/NewNote"
import AllNotes from "./page/AllNotes"
import Home from "./page/Home"
import EditNote from "./page/EditNote"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newNote" element={<NewNote/>} />
        <Route path="/allNotes" element={<AllNotes/>} />
        <Route path="/allNotes/editNote/:id" element={<EditNote/>} />
      </Routes>
      
    </div>
  )
}