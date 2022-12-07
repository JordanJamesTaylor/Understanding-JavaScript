const someObject = {
    numbers: [1,2,3,4],
    profile: {
        age: 18,
        nicknames: ['jord', 'j', 'jt'],
        addresses: {
            firstAddress: "blah",
            secondAddress: "blahblah"
        }
    }
}

const {
    numbers,
    profile: {
        nicknames,
        addresses: {
            firstAddress
        }
    }
} = someObject

console.log(firstAddress)
console.log(nicknames.map(name => name + '@'))