import myModel from '../models/model_db.js'
export const controller = {}

controller.addNote = async (req,res) => {
    const {title,description,data} = req.body
    const save = new myModel({title:title,description:description,data:data})
    await save.save()
    res.send('datos guardados con exito!')
}

controller.delNote = async (req,res) =>{
    // agregar opcion si desea eliminar la nota
    const {id} = req.params
    await myModel.remove({_id:id})
    res.send('dato eliminado')
}

controller.allNotes = async (req,res) => {
    // await myModel.find({})
    
    res.send(await  myModel.find({}))
}

controller.getNote = async (req,res) => {
    const {id} = req.params
    res.send(await myModel.findById(id))
}



controller.updateNote = async (req,res) => {
    // agregar hora actual,redireccionar,ver lo q dice la nota,dejar algo en blanco y mantener lo anterior
    const {id} = req.params
    const {title,description} = req.body
    await myModel.findByIdAndUpdate(id,{title,description})
    res.send('listo!')
   
}