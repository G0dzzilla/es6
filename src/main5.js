// REST

const user = {
    name: 'Marcos',
    age: 23,
    company: 'StrangeLove'
};
const { name, ...resto } = user;
console.log(name);
console.log(resto);


const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a, b, c)


function sum(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(sum(1, 3, 4, 5))

// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user1 = {
    name: 'Marcos',
    age: 23,
    company: 'StrangeLove'
};

const user2 = {
    ...user1,
    name: 'Banana'
};
console.log(user2)