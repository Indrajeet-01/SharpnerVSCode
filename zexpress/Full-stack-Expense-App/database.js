const mysql = require('mysql');


const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"expenseapp",
    password:"isy987"
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

var globalvar;

const retrieve = (req, res) => {
  const query = 'SELECT * FROM expenseApp';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).json({ error: 'Error retrieving users' });
    }
    else
    {
      res.json(results);
    }
    
  });
};

const create = (req, res) => {
    const { itemname, price, description, quantity } = req.body;
  
    const query = 'INSERT INTO expenseApp (itemname, price, description, quantity) VALUES (?, ?, ?, ?)';
    connection.query(query, [itemname, price, description, quantity], (error, results) => {
      if (error) {
        console.error('Error executing query: ', error);
        res.status(500).json({ error: 'Error creating user' });
      } else {
        const insertedId = results.insertId;
        res.json({ message: 'User created', insertedId });
      }
    });
  };

  //////test B;
  const updateuser = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body; // Assuming you're sending the updated data in the request body
  
    const sql = `UPDATE expenseApp SET itemname = ?, price = ?, description = ?, quantity = ? WHERE id = ?`;
  
    const values = [updatedData.itemname, updatedData.price, updatedData.description, updatedData.quantity, id];
  
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error updating data' });
      } else {
        console.log('Data updated successfully');
        res.json({ message: 'Data updated successfully' });
      }
    });
  }

  /////test A;

  



module.exports = {
  retrieve,
  create,
  //deleteuser,
  updateuser,
}
