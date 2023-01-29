function createEmptyObject() {
    const obj = Object.create(null);

    return obj;
}

const user = createEmptyObject();

console.log(user);