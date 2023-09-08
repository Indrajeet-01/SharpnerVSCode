
    const createForm = document.getElementById('create-form')
    const inventoryTable = document.getElementById('inventory-table')
    const sellOneBtn = document.getElementById('sell-one');
    const sellTwoBtn = document.getElementById('sell-two');
    const sellFiveBtn = document.getElementById('sell-five');

    // fetch and display items
    async function fetchInventory(){
        const url = 'https://crudcrud.com/api/cb48475a9400496e9b8dd2443f3270bb/inventoryData'
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
                        <button onClick = sellItem('${item._id}',1) >sell 1</button>
                    </td>
                    <td>
                        <button onClick = sellItem('${item._id}',2) >sell 2</button>
                    </td>
                    <td>
                        <button onClick = sellItem('${item._id}',3) >sell 3</button>
                    </td>
                    <td>
                        <button onClick = deleteItem('${item._id}')>Delete</button>
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
        const url = 'https://crudcrud.com/api/cb48475a9400496e9b8dd2443f3270bb/inventoryData'

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
        const url = 'https://crudcrud.com/api/cb48475a9400496e9b8dd2443f3270bb/inventoryData'

        try {
            await axios.post(url, newItem)
            fetchInventory()
            createForm.reset()
        } catch (error) {
            console.log('error in adding item', error)
        }
    })

    async function deleteItem(itemId) {
        const url = 'https://crudcrud.com/api/cb48475a9400496e9b8dd2443f3270bb/inventoryData'
        try{
            await axios.delete(`${url}/${itemId}`)

        } catch(error){
            console.log('error in delete user', error)
        }
    }

    
    fetchInventory()

