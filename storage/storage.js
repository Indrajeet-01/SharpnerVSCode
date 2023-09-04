const userForm = document.getElementById('userForm')
const userList = document.getElementById('userList')

userForm.addEventListener('submit', function(event){
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value


    const userDetails = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
    }

    let existingUsers = JSON.parse(localStorage.getItem('userDetails')) || []
    existingUsers.push(userDetails)

    const userDetailsJson = JSON.stringify(existingUsers)

    localStorage.setItem('userDetails', userDetailsJson)

    userForm.reset()
    displayUserList(existingUsers)
})

function displayUserList(users) {
    
    if(users.length>0){
        const ul = document.createElement('ul')
        users.forEach(user => {
            const li = document.createElement('li')
            li.textContent = `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}, Date: ${user.date}, Time: ${user.time}`
            ul.appendChild(li)
        });
        userList.appendChild(ul)
    }
    userList.style.backgroundColor = 'white'
}

const storedUsers = JSON.parse(localStorage.getItem('userDetails')) || []
displayUserList(storedUsers)