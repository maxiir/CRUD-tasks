import express from 'express';
import { config as loadDotenv } from 'dotenv';
import {join,dirname} from 'path'
import {fileURLToPath} from 'url'
import { router } from './src/routes/routes.js';
import cors from 'cors'

loadDotenv()


const app = express()
const __dirname= dirname(fileURLToPath(import.meta.url))
const stateProyect = process.env.STATE === 'production'
export const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(router)

if(stateProyect){
    app.use(express.static(join(__dirname,'/frontend/dist')))
    app.get('*',(req,res) =>{
        const index = join(__dirname,'/index.html')
        res.sendFile(index,(err)=>{
            if(err){
                res.status(500).json({err:'error con el envio de archivos'})
            }
        })
    })

}else{
    app.get('/',(req,res)=>{
        res.send('server running...')
    })
}

app.use((err,res,req)=>{
    res.status(500).json({err:'error en el servidor'})
})





export default app