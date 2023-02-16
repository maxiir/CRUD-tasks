import {model,Schema} from 'mongoose'

const db_Model = new Schema({

    "title":String,
    "description": String,
    "data":{
        "type": Date,
        "default": Date.now
    }
})

export default model('tasks', db_Model)