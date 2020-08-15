const user = {
    name: 'Marcos',
    age: 23,
    address: {
        city: 'Los Angeles',
        state: 'CA'
    },
};

//const name = user.name;
//const age = user.age;
//const city = user.address.city;

const { name, age, address: { city } } = user;
console.log(name);
console.log(age);
console.log(city);


function showName({ name, age }) {
    console.log(name, age);
}
showName(user);