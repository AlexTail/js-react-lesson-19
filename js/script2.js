let number = 4.6;

console.log(4 / 0);
console.log('string' * 9);

const user = 'Alex'; // `` "" '' - всё будет рабоать)

const obj = {
    name: "John",
    age: 25,
    isMarried: false,
    // вложенные объекты
    abc: {
        ghi: [{}, {}],
        def: {

        }
    }
};

obj.b = "1312312";
console.log(obj.b);

console.log(obj);
console.log(obj.name);
console.log(obj["age"]); // так работает, но лучше через ТЧК



let arr = ["jklfjsf.jpg", "fdfdfd.png", {},
    [], "fdfdfd.jpg"
];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);