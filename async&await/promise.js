console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseWifeBringTicket = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket')
    },3000)
})

// promiseWifeBringTicket.then((t) => {
//     console.log(`person3: shows ${t}`)
// })

const getPopcorn = promiseWifeBringTicket.then((t) =>{
    console.log('wife: i have tickets')
    console.log('husband: we should go in')
    console.log('wife: no, i am hungary')
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
})
 const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some pocorn')
    console.log('husband: now, we go ?')
    console.log('wife: i need butter on popcorn')
    return new Promise((resolve,reject) => resolve(`${t} butter`))
 })
 const getColdDrinks = getButter.then((t) => {
    console.log('husband: we have butter now')
    console.log('husband: now, we should go ?')
    console.log('wife: i need cold drinks too with butter on popcorn')
    return new Promise((resolve,reject) => resolve(`${t} cold drinks`))
 })

getColdDrinks.then((t) => console.log(t))

console.log('person4: shows ticket')
console.log('person5: shows ticket')

