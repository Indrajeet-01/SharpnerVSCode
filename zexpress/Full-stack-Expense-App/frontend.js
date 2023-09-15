        // Function to fetch and display JSON data
var globalobj;

//accessing input data value;

var itemname = document.getElementById('itemname');
var price = document.getElementById('price');
var description = document.getElementById('description');
var quantity = document.getElementById('quantity');

var buttonid = document.getElementById('button');

function fetchData() {
  return  fetch('/read')
        .then(response => response.json())
        .then(data => {
            console.log('ss')
            globalobj = data;
             //console.log(globalobj)

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData().then(() => {

        for(let i=0;i<globalobj.length;i++)
        {
            // console.log(globalobj[i].username)
            //console.log(globalobj);
            
            const myList = document.getElementById("myList");
            const deleteoneitemid = document.createElement("button");
            const deletetwoitemid = document.createElement("button");
        
            deleteoneitemid.textContent = "Buy One";
            deleteoneitemid.type = "button";
            deleteoneitemid.className = "deleteoneitem";

            deleteoneitemid.addEventListener('click', () => {
          
                 Buy_one(globalobj[i].id, globalobj[i].itemname, globalobj[i].price, globalobj[i].description, globalobj[i].quantity);
              });

        
            deletetwoitemid.textContent = "Buy Two";
            deletetwoitemid.type = "button";
            deletetwoitemid.className = "deletetwoitem";

            deletetwoitemid.addEventListener('click', () => {
          
              Buy_two(globalobj[i].id, globalobj[i].itemname, globalobj[i].price, globalobj[i].description, globalobj[i].quantity);
           });
        
        
            const newLi = document.createElement("li");

            newLi.innerHTML = globalobj[i].description+' '+globalobj[i].itemname+' '+globalobj[i].price+' '+globalobj[i].quantity;
  
            myList.appendChild(newLi);
            myList.appendChild(deleteoneitemid);
            myList.appendChild(deletetwoitemid);

        };

        ////test B;


        async function Buy_one(id, itemname, price, description, quantity) {

          const updatedData = {
            itemname: itemname,
            price: price,
            description: description,
            quantity: quantity-1,
          };
        
          try {
            const response = await fetch(`/updateuser/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedData),
            });
        
            const data = await response.json();
            console.log(data); // Log the response data from the server
        
            // Redirecting to homepage (adjust the URL as needed)
            window.location.href = 'http://localhost:3000';
        
          } catch (error) {
            console.error('Error:', error);
          }

        }

        async function Buy_two(id, itemname, price, description, quantity) {

          const updatedData = {
            itemname: itemname,
            price: price,
            description: description,
            quantity: quantity-2,
          };
        
          try {
            const response = await fetch(`/updateuser/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedData),
            });
        
            const data = await response.json();
            console.log(data); // Log the response data from the server
        
            // Redirecting to homepage (adjust the URL as needed)
            window.location.href = 'http://localhost:3000';
        
          } catch (error) {
            console.error('Error:', error);
          }

        }

        ///test A;

    
});

buttonid.addEventListener('click', save);


function save(e)
{
    
    //showing username, email when click on save button;
    const myList = document.getElementById("myList");
    const deleteoneitemid = document.createElement("button");
    const deletetwoitemid = document.createElement("button");

    deleteoneitemid.textContent = "Buy One";
    deleteoneitemid.type = "button";
    deleteoneitemid.className = "deleteoneitem";


    deletetwoitemid.textContent = "Buy Two";
    deletetwoitemid.type = "button";
    deletetwoitemid.className = "deletetwoitem";


    const newLi = document.createElement("li");

    newLi.innerHTML = description.value+' '+itemname.value+' '+price.value+' '+quantity.value;

   myList.appendChild(newLi);
   myList.appendChild(deleteoneitemid);
   myList.appendChild(deletetwoitemid);

    //saving data to backend;

    async function save_to_database() {

        const userData = {
          itemname: itemname.value,
          price: price.value,
          description: description.value,
          quantity: quantity.value,
        };
  
        try {
          const response = await fetch('/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
          const data = await response.json();
          //console.log(data); // Log the response data from the server
          //redirecting to homepage;
        window.location.href = 'http://localhost:3000';

        } catch (error) {
          console.error('Error:', error);
        }
      }
      save_to_database(); 
}


