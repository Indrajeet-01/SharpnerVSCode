import express from 'express'
import { db } from './db.js'
import bodyParser from 'body-parser'
import itemRoutes from './routes/productRoute.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/company",itemRoutes)


db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database');
        return;
    }
    console.log('Connected to the database  ' );
});



app.listen(4000, () => {
    console.log("server is connected to 4000")
})