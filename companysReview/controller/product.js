import  {db} from "../db.js"

// add review
export const addItem = (req,res) => {
    const {name, pros, cons, rating} = req.body

    const newItem  = {name, pros, cons,rating}

    const q = "INSERT INTO companys_review SET ?"

    db.query(q, newItem, (err, data) => {
        if(err){
            res.status(500).send('error in adding item')
        } else {
            res.status(201).send('item is added successfully')
        }
    })
}


// display all reviews
export const displayItems = (req,res) => {
    const q = "SELECT * FROM companys_review"

    db.query(q, (err,results) => {
        if(err){
            res.status(500).send('error in retrieving items')
        } else {
            res.status(200).json(results)
        }
    })
}

// search review by company's name
export const searchItem = (req,res) => {
    const searchName = req.params.name;

    db.query('SELECT * FROM companys_review WHERE `name` = ?', [searchName], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error searching for items.');
        } else {
            res.json(results);
        }
    });
}