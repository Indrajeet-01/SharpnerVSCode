const posts = [
    { title: 'Post one', body: 'this is post one'},
    { title: 'Post two', body: 'this is post two'}
]

function getPosts(){
    setTimeout(() => {
        let output = ''
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    },1000)
}

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post)
            const error =false

            if(!error){
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        },2000)

    })
    
}

// getPosts()

// createPost({title: 'Post three',body: 'This is poat three'}).then(getPosts).catch(err => console.log(err))

const promise1 = Promise.resolve('hello world')
const promise2 = 10
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,'Goodbye')
})

Promise.all([promise1,promise2,promise3]).then(values => console.log(values))