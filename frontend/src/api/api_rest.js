import axios from 'axios'

export const newTask = async (values) =>
    await axios.post('https://crud-tasks-9rc5an7qn-maxiir.vercel.app/api/addtask', values)
