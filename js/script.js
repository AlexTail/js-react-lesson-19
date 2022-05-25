"use strict";
// использовать строгий
// значит, что работаем в современном режиме! Строго только в этом режиме и поддерживаются, только современные правила, как я понял

/* В старом режиме, можно было так указывать, а в современном формате let или const
    abc = 15;
    console.log(abc);
*/

console.log(123);

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

// вместилище информации
{
    let result = 50;
}

console.log(result); // не будет работать, т.к. выше область видимости ограничена