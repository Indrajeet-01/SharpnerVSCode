import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"inventory_gs",
    password:"isy987"
})

