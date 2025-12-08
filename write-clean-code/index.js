// limit the number of parameters to 3 or fewer
function createUser(name, age, country) {
    // function body
}
// avoid using more than 1 level of nesting
function processUsers(users) {
}
users = {
    id: 1,
    name: "John",
    isActive: true,
}
processUsers(users)

// return early from functions
function findActiveUser(users) {
    for (const user of users) {
        if (user.isActive) {
            return user
        }
    }   
    return null
} 
// X avoid upper
function validateUser(user) {
    if (!user) {
        return false
    }
    // continue with validation
    return true
}

// avoid boolean flags as function

// single level of abstraction

// Function names should tell stories