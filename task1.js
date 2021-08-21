let data = {
    id: 1,
    name: "Jhony",
    username: "jhon",
    email: "jhony@april.biz",
    address:
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "april.biz",
    }
    
let dataBaru = {
    ...data,
    name: "Eric",
    email: "ricndraaa@gmail.com",
    hobby: "Memancing"
}

console.log(dataBaru)

const {street,city} = data.address

console.log(street)
console.log(city)