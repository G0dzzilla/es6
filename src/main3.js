const arr = [1, 3, 4, 5, 8, 9];

const newArr1 = arr.map(function (item) {
    return item * 2
});
console.log(newArr1);

const newArr2 = arr.map(item => {
    return item * 2
});
console.log(newArr2);

const newArr3 = arr.map(item => item * 2);
console.log(newArr3);

const test = () => ({ number: 10 });
console.log(test());

const soma = (a = 3, b = 6) => a + b;
console.log(soma(1));