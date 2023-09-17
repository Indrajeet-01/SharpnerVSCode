
    const createForm = document.getElementById('create-form')
    const inventoryTable = document.getElementById('inventory-table')
    const searchItem = document.getElementById('search-item')
    
    const url = 'http://localhost:4000/company'

    // fetch and display items
    async function fetchData(){
        
        try{
            const response = await axios.get(url)
            const data = response.data
            const itemsDetail = data.map(
                (item) => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.pros}</td>
                    <td>${item.cons}</td>
                    <td>${item.rating}</td>
                    
                </tr>
                `
            )

            inventoryTable.querySelector('tbody').innerHTML = itemsDetail.join('')

            

        } catch (error) {
            console.error('Error fetching inventory:', error);

        }
    }


    // add new item
    createForm.addEventListener('submit', async(e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const pros = document.getElementById('pros').value
        const cons = document.getElementById('cons').value
        const rating = parseFloat(document.getElementById('rating').value)

        const newItem = {
            name: name,
            pros: pros,
            cons: cons,
            rating: rating
        }
        
        try {
            await axios.post(url, newItem)
            fetchData()
            createForm.reset()
        } catch (error) {
            console.log('error in adding item', error)
        }
    })

    // Function to search for items by name
async function searchItems() {
    const searchInput = document.getElementById('searchInput').value;

    console.log(searchInput)
    

    try {
        const response = await axios.get(`${url}/search?name=${searchInput}`);
        const items = response.data;

        console.log(`${url}/search?name=${searchInput}`)
        console.log(items)

      // Display search results
        displaySearchResults(items);
    } catch (error) {
        console.error('Error searching for items:', error);
    }
}


    // Function to display search results
function displaySearchResults(items) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    if (items.length === 0) {
        searchResultsContainer.innerHTML = 'No matching items found.';
        return;
    }

    items.forEach((item) => {
      // Create a div for each item (you can customize the display format)
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `Name: ${item.name}, Pros: ${item.pros}, Cons: ${item.cons}, Rating: $${item.rating.toFixed(2)}`;

      // Append the item div to the search results container
        searchResultsContainer.appendChild(itemDiv);
    });
}
    
fetchData()

