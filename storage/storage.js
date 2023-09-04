const userForm = document.getElementById('userForm')

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
})