import myModel from '../models/model_db.js'
export const controller = {}

controller.addTask = async (req,res) => {
    const {title,description,data} = req.body
    const save = new myModel({title:title,description:description,data:data})
    // console.log(save)
    await save.save()
    res.send('datos guardados con exito!')
}