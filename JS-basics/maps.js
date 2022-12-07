/*
    Maps read in constant time
    This allows us to reduce the memory requirement
*/
const profile = new Map()
profile.set('name', 'Jordan')
profile.set('age', '27')

// { "name" => "Jordan", "age" => 27}

// 0(1)
console.log(profile.has("name")) // Check it has a name value, returns boolean
// 0(1)
console.log(profile.get("name")) // Returns the value


// forEach is the only loop you can use for maps and sets