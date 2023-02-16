import {connect} from 'mongoose'

const db = await connect(process.env.URI)
console.log('mongodb atlas connect in:', db.connection.name)

export default db;
