function createEmptyObject() {
    return Object.create(null);
}

const user = createEmptyObject();

user.name = 'Max';
user.email = 'test@example.com';

console.log(user);