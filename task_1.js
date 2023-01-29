const user = {
    name: 'John',
    age: 34,
    isAdmin: true
};
function getObjectProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key ${key}, value ${obj[key]}`);
        }
    }
}

getObjectProperties(user);