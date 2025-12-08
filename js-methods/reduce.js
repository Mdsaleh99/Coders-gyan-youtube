const products = [
    {id: 101, name: "Laptop", price: 1000, quantity: 2},
    {id: 102, name: "Phone", price: 500, quantity: 3},
    {id: 103, name: "Tablet", price: 300, quantity: 1},
]

// let total = 0
// for(const product of products) {
//     total += product.price * product.quantity
// }

// console.log(total)

const total =products.reduce((accumulator, product, index, array) => {
    accumulator += product.price * product.quantity
    return accumulator
}, 0)
// console.log(total);

const users = [
    { name: "John", country: "USA" },
    { name: "Alice", country: "Canada" },
    { name: "Bob", country: "USA" },
    { name: "Eve", country: "Canada" },
]

const grouped = users.reduce((accumulator, user) => {
    accumulator[user.country] = accumulator[user.country] || [] // if country key doesn't exist, initialize it with empty array
    accumulator[user.country].push(user)
    return accumulator
}, {})

// console.log(grouped);

// Creating lookup table or index map for fast access
/*
e.g: const index = {
    101: {id: 101, name: "Laptop", price: 1000, quantity: 2}
}

easy search -> index[101]
*/

const indexMap = products.reduce((accumulator, product) => { 
    accumulator[product.id] = product
    return accumulator
}, {})

console.log(indexMap);