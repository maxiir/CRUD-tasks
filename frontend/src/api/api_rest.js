import axios from 'axios'

export const newTask = async (values) =>
    await axios.post('https://crud-tasks-production.up.railway.app/api/addtask', values)
