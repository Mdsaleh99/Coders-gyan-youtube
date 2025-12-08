const { use } = require("react");

// 1. compact conditional returns
function hasPermission(user) {
    // if (user.role === 'admin') {
    //     return true;
    // } else {
    //     return false;
    // }

    // return user.role === 'admin' ? true : false;
    return user.role === 'admin';
}

// 2. Negative boolean naming
const hasPermission = true
if (hasPermission) { }

// 3. Naming prefixes (is (state), can (capability), should (expect), has (owner))
// const active = true
// const isActive = true

// ownership
// const credits = true
// const hasCredits = true;


// expect = should
const shouldClearCookies = true
if (shouldClearCookies) {
// clear the cookie
}

// capability
const canEdit = false


// 4. Avoid redundant comparisons
const isActive = true
// if (isActive === true) { } xwrong
if (isActive) { }


// 5. Logical -> boolean
// function getDiscount(price, discount) {
//     discount = discount || 0.1

//     return price - price * discount
// }

// console.log(getDiscount(100, 0.2));

function getDiscount(price, discount) {
    discount = discount ?? 0.1 // Nullish coalescing operator -> undefined or null

    return price - price * discount
}

console.log(getDiscount(100, 0));
