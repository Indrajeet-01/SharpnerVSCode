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

    let userDetailsJson = JSON.stringify(existingUsers)

    localStorage.setItem('userDetails', userDetailsJson)

    userForm.reset()
    
})

function displayUserList(users) {
    
    if(users.length>0){
        const ul = document.createElement('ul')
        users.forEach((user,index) => {
            const li = document.createElement('li')
            li.textContent = `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}, Date: ${user.date}, Time: ${user.time}`
            const delBtn = document.createElement('button')
            delBtn.style.backgroundColor = 'red'
            delBtn.textContent = 'Delete'
            delBtn.addEventListener('click',() => {
                users.splice(index,1)
                let userDetailsJson = JSON.stringify(users)
                localStorage.setItem('userDetails',userDetailsJson)
                
            })
            li.appendChild(delBtn)
            ul.appendChild(li)
        });
        userList.appendChild(ul)
    }
    userList.style.backgroundColor = 'white'
}

const storedUsers = JSON.parse(localStorage.getItem('userDetails')) || []
displayUserList(storedUsers)