
    const createForm = document.getElementById('create-form')
    const inventoryTable = document.getElementById('inventory-table')
    const sellOneBtn = document.getElementById('sell-one');
    const sellTwoBtn = document.getElementById('sell-two');
    const sellFiveBtn = document.getElementById('sell-five');

    // fetch and display items
    async function fetchInventory(){
        const url = 'https://crudcrud.com/api/e03734d1d5784ddda6032fbe797a8fcb/inventoryData'
        try{
            const response = await axios.get(url)
            const data = response.data
            const itemsDetail = data.map(
                (item) => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td>₹${item.price.toFixed(2)}</td>
                    <td>
                        <button class="sell" data-id="${item.id}">Sell</button>
                    </td>
                </tr>
                `
            )

            inventoryTable.querySelector('tbody').innerHTML = itemsDetail.join('')

            // sell item button
            const sellButtons = document.querySelector('.sell')
            sellButtons.forEach((button) => {
                button.addEventListener('click', sellItem)
            })

        } catch (error) {
            console.error('Error fetching inventory:', error);

        }
    }

    // sell item
    async function sellItem(e){
        const itemId = e.target.dataset.id
        const sellQuantity = e.target.dataset.quantity || 1

        try {
            await axios.put(url, {
                quantity: sellQuantity
            })
            fetchInventory()
        } catch (error) {
            console.log('Erorr selling item' , error)
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
        const url = 'https://crudcrud.com/api/e03734d1d5784ddda6032fbe797a8fcb/inventoryData'

        try {
            await axios.post(url, newItem)
            createForm.reset()
        } catch (error) {
            console.log('error in adding item', error)
        }
    })

      // Sell buttons
    sellOneBtn.addEventListener('click', () => {
        document.querySelectorAll('.sell').forEach((button) => {
            button.dataset.quantity = 1;
        });
    });

    sellTwoBtn.addEventListener('click', () => {
        document.querySelectorAll('.sell').forEach((button) => {
            button.dataset.quantity = 2;
        });
    });

    sellFiveBtn.addEventListener('click', () => {
        document.querySelectorAll('.sell').forEach((button) => {
            button.dataset.quantity = 5;
        });
    });


    fetchInventory()

