import app ,{port} from './server_config.js'
import db from './src/db/connect.js'

app.listen( port, ()=>{
    console.log(`server in port: ${port} `)
})