import axios from 'axios'

export const newTask = async (values) =>
    await axios.post('https://crud-tasks-production.up.railway.app/api/addtask', values)
export const delTask = async (id) =>{
    await axios.delete(`https://crud-tasks-production.up.railway.app/api/deltask/${id}`)
}