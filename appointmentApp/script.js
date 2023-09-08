const userForm = document.getElementById('userForm')
const userList = document.getElementById('ListOfUsers')

userForm.addEventListener('submit', async(event)=>{
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    
    const userDetails = {
        name: name,
        email: email,
        phone: phone,
    }

    const url = 'https://crudcrud.com/api/be1747d53c8245c697e2e54e5dc09acc/appointmentData'

    try {
        await axios.post(url, userDetails)
        displayUserList()
        userForm.reset()
    } catch (error) {
        console.log('error in adding user', error)
    }

})

async function displayUserList() {
    const url = 'https://crudcrud.com/api/be1747d53c8245c697e2e54e5dc09acc/appointmentData'
    try {
        const response = await axios.get(url)
        const data = response.data
        const userDetail = data.map(
                (user) => `
                <li>
                Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}
                </li>
                `
            )
            document.getElementById('ListOfUsers').innerHTML = userDetail.join('')
                
        } catch(error) {
            console.log('error in display users', error)

    }
    
}
