        // Function to fetch and display JSON data
var globalobj;

function fetchData() {
   return  fetch('/read')
        .then(response => response.json())
        .then(data => {
            console.log('ss')
            globalobj = data;
            // console.log(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData().then(() => {

        for(let i=0;i<globalobj.length;i++)
        {
            // console.log(globalobj[i].username)
            
            const myList = document.getElementById("myList");
            const deletebutton = document.createElement("button");
            const editbutton = document.createElement("button");
        
            deletebutton.textContent = "Delete";
            deletebutton.type = "button";
            deletebutton.className = "deletebutton";

            deletebutton.addEventListener('click', () => {
                deleteUser(globalobj[i].id); // Assuming you have a unique ID for each user
              });

        
            editbutton.textContent = "Edit";
            editbutton.type = "button";
            editbutton.className = "editbutton";
        
        
            const newLi = document.createElement("li");
        
            newLi.innerHTML = globalobj[i].username+' '+globalobj[i].email;
        
            myList.appendChild(newLi);
            myList.appendChild(deletebutton);
            myList.appendChild(editbutton);

            deletebuttonid=deletebutton.id;
            editbuttonid=editbutton.id;

        };

        async function deleteUser(id) {
            try {
              const response = await fetch(`/deluser/${id}`, {
                method: 'DELETE',
              });
          
              const data = await response.json();
              console.log(data); // Log the response data from the server

              //redirecting to homepage;
              window.location.href = 'http://localhost:3000';

            } catch (error) {
              console.error('Error:', error);
            }
          }

    
});

//accessing input data value;

var username = document.getElementById('username');
var email = document.getElementById('email');
var phonenum = document.getElementById('phonenumber');

var buttonid = document.getElementById('button');

buttonid.addEventListener('click', save);

function save(e)
{
    

    //showing username, email when click on save button;
    const myList = document.getElementById("myList");
    const deletebutton = document.createElement("button");
    const editbutton = document.createElement("button");

    deletebutton.textContent = "Delete";
    deletebutton.type = "button";
    deletebutton.className = "deletebutton";


    editbutton.textContent = "Edit";
    editbutton.type = "button";
    editbutton.className = "editbutton";


    const newLi = document.createElement("li");

    newLi.innerHTML = username.value+' '+email.value;

    myList.appendChild(newLi);
    myList.appendChild(deletebutton);
    myList.appendChild(editbutton);



    //saving data to backend;

    async function save_to_database() {
        const userData = {
          userName: username.value,
          phoneNumber: phonenum.value,
          email: email.value,
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
          console.log(data); // Log the response data from the server

          //redirecting to homepage;
        window.location.href = 'http://localhost:3000';

        } catch (error) {
          console.error('Error:', error);
        }
      }
      save_to_database();

      
}


