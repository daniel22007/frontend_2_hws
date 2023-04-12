//1.
const arrNumber = [10, 20, 30, 50, 235, 3000];
const rightNumber = [1, 2, 5];

for (let i = 0; i < arrNumber.length; i++) {
    const firstNumber = String(arrNumber[i]).slice(0, 1);
    if (rightNumber.includes(Number(firstNumber))) {
        console.log(arrNumber[i]);
    }
}
//2.
let num = 20;
for (let i = 0; i <= 20; i++) {
    num--;
    console.log(num);
}
//3.
 const str = prompt("Введите цвет");

const colors = {
    red: "красный",
    yellow: "желтый",
    green: "зеленый",
};

switch (str) {
    case colors.red:
        alert("стоп");
        break;
    case colors.yellow:
        alert("подожди");
        break;
    case colors.green:
        alert("go body");
        break;

    default:
        alert("надо вводить цвета");
        break;
}

//4.
let arr = [];

for (let i = 0; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);