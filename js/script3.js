//alert('hello');

// const result = confirm("Are you here?");
// console.log(result);

// нужно ввести ответ в строку и по умолчанию там уже будет написано "Да" и тут тип данный String всегда
// const answer = +prompt("Вам есть 18?", "Да");
// console.log(answer);
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt('1?', '');
// answers[1] = prompt('2?', '');
// answers[2] = prompt('3?', '');
// document.write(answers);

let name = "Ivan";

alert(`Привет, ${name}`);

console.log(4 + +"5"); // уравный плюс сработает и тут будет 9

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

let incr2 = 10,
    decr2 = 10;

console.log(++incr2);
console.log(--decr2);

// остаток от деления
console.log(5 % 2);

console.log(4 * 2 == 8);
console.log(4 * 2 === 8);
console.log(4 * 2 == "8");
console.log(4 * 2 === "8"); // строгое сравнение

// && - и
// || - или

const isChecked = true,
    isClosed = false;

console.log(isChecked && isClosed);
console.log(isChecked || isClosed);