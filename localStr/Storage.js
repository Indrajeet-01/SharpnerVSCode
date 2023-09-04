const userForm = document.getElementById('userForm')

userForm.addEventListener('submit', function(event){
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    const userDetails = {
        name: name,
        email: email,
    }

    const userDetailJson = JSON.stringify(userDetails)

    localStorage.setItem('userDetail', userDetailJson)
})