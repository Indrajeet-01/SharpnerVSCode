
    const createForm = document.getElementById('create-form')
    const inventoryTable = document.getElementById('inventory-table')
    
    const url = 'http://localhost:4000/items'

    // fetch and display items
    async function fetchInventory(){
        
        try{
            const response = await axios.get(url)
            const data = response.data
            const itemsDetail = data.map(
                (item) => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td>₹${item.price}</td>
                    <td>
                        <button class="sell" onClick = sellItem('${item.id}',1) >sell 1</button>
                    </td>
                    <td>
                        <button class="sell" onClick = sellItem('${item.id}',2) >sell 2</button>
                    </td>
                    <td>
                        <button class="sell" onClick = sellItem('${item.id}',3) >sell 3</button>
                    </td>
                    <td>
                        <button class="dltBtn" onClick = deleteItem('${item.id}')>Delete</button>
                    </td>
                </tr>
                `
            )

            inventoryTable.querySelector('tbody').innerHTML = itemsDetail.join('')

            

        } catch (error) {
            console.error('Error fetching inventory:', error);

        }
    }

    // Sell an item
    async function sellItem(itemId, sellCount) {
        
        try {
        
            const response = await axios.get(`${url}/${itemId}`);
            const currentItem = response.data;

            const updatedQuantity = currentItem.quantity - sellCount;

            const updatedItem = {
                ...currentItem,
                quantity: updatedQuantity,
            };

            await axios.put(`${url}/${itemId}`, updatedItem);

            fetchInventory();
        } catch (error) {
            console.log('Error selling item', error);
        }
    }

    // add new item
    createForm.addEventListener('submit', async(e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const description = document.getElementById('description').value
        const quantity = parseInt(document.getElementById('quantity').value)
        const price = parseFloat(document.getElementById('price').value)

        const newItem = {
            name: name,
            description: description,
            quantity: quantity,
            price: price
        }
        
        try {
            await axios.post(url, newItem)
            fetchInventory()
            createForm.reset()
        } catch (error) {
            console.log('error in adding item', error)
        }
    })

    // delete item
    async function deleteItem(itemId) {
        
        try{
            await axios.delete(`${url}/${itemId}`)
            fetchInventory()

        } catch(error){
            console.log('error in delete user', error)
        }
    }

    
    fetchInventory()

