const user = {
    name: 'John',
    age: 34,
    isAdmin: true
};

const example1 = 'status';
const example2 = 'name';
function propertyMatchCheck(str, obj) {
    return obj.hasOwnProperty(str);
}

console.log(propertyMatchCheck(example1,user)); // false
console.log(propertyMatchCheck(example2,user)); // true
