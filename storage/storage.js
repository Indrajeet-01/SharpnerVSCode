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

    const userDetailJson = JSON.stringify(userDetails)

    localStorage.setItem('userDetail', userDetailJson)
})