const users = [
  {
    id: 1,
    fname: "John",
    lname: "Doe",
  },
  {
    id: 2,
    fname: "Alice",
    lname: "Doe",
  },
];

const result = users.map((user, idx, array) => {
  return {
    fullName: `${user.fname} ${user.lname}`,
  };
});

// console.log(result);

Array.prototype.myMap = function (callback, thisArgs) {
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`);
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback.call(thisArgs, this[i], i, this));
    }

    return result;
}

const result2 = users.myMap((user, idx, array) => {
  return {
    fullName: `${user.fname} ${user.lname}`,
  };
});

console.log(result2);
// jsx accepts array of elements so we can use map method to return array of elements
// e.g -> {[<div>john</div>, <div>alice</div>]}
// const jsxResult = users.map((user) => <div key={user.id}>{user.fname} {user.lname}</div>);