import {model,Schema} from 'mongoose'

const db_Model = new Schema({

    "title":{
        "type": String,
        "require": true
    },
    "description":{
        "type": String,
        "require": true
    },
    "data":{
        "type": Date,
        "default": Date.now
    }
})

export default model('tasks', db_Model)