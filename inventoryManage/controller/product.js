import  {db} from "../db.js"

// add new item
export const addItem = (req,res) => {
    const {name, description, quantity, price} = req.body

    const newItem  = {name, description, quantity,price}

    const q = "INSERT INTO inventory SET ?"

    db.query(q, newItem, (err, data) => {
        if(err){
            res.status(500).send('error in adding item')
        } else {
            res.status(201).send('item is added successfully')
        }
    })
}


// display all items
export const displayItem = (req,res) => {
    const q = "SELECT * FROM inventory"

    db.query(q, (err,results) => {
        if(err){
            res.status(500).send('error in retrieving items')
        } else {
            res.status(200).json(results)
        }
    })
}

// delete the item
export const deleteItem = (req,res) => {
    const itemId = req.params.id

    const q = "DELETE FROM inventory WHERE `id` = ?"

    db.query(q, itemId, (err,result) => {
        if(err){
            res.status(500).send('error in deleting item')
        } else {
            res.status(200).send('Item deleted successfully.');
        }
    })
}

// update the item values
export const updateItem = (req,res) => {
    const itemId = req.params.id

    const { name, description, quantity, price } = req.body
    const updatedItem = { name, description, quantity, price }

    const q = "UPDATE inventory SET ? WHERE `id` = ? "

    db.query(q, [updatedItem, itemId], (err,result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating the item.');
        } else {
            res.status(200).send('Item updated successfully.');
        }
    })
}