const mysql = require('mysql');


const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"bookingapp",
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
  const query = 'SELECT * FROM nodecomplete';
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
    const { userName, phoneNumber, email } = req.body;
  
    const query = 'INSERT INTO nodecomplete (userName, phoneNumber, email) VALUES (?, ?, ?)';
    connection.query(query, [userName, phoneNumber, email], (error, results) => {
      if (error) {
        console.error('Error executing query: ', error);
        res.status(500).json({ error: 'Error creating user' });
      } else {
        const insertedId = results.insertId;
        res.json({ message: 'User created', insertedId });
      }
    });
  };

  const deleteuser = (req, res) => {
    const userId = req.params.id; // Get the user ID from the URL parameter;

    console.log(userId);
  
    const query = 'DELETE FROM nodecomplete WHERE id = ?'; // Replace "users" and "id" with your table and column names
    connection.query(query, [userId], (error, results) => {
      if (error) {
        console.error('Error executing query: ', error);
        res.status(500).json({ error: 'Error deleting user' });
      } else {
        res.json({ message: 'User deleted' });
      }
    });
  }



module.exports = {
  retrieve,
  create,
  deleteuser,
}
