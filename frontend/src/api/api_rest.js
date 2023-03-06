import axios from "axios";

export const newNote = async (values) =>
  await axios.post("http://localhost:5000/api/addnote", values);

export const allNotes = async () =>
  await axios.get("http://localhost:5000/api/allnotes");

export const getNote = async (id) =>
  await axios.get(`http://localhost:5000/api/getnote/${id}`);


export const delNote = async (id) =>
  await axios.delete(`http://localhost:5000/api/delnote/${id}`);
  
// cambiar post a put
export const updateNote = async (id,values) =>
  await axios.put(`http://localhost:5000/api/editnote/${id}`,values);