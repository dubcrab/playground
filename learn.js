// OOP javascript
//
// Способы создания объекта:####################################################
// 1)Объектный литерал

// var object = {
//     name: 'Vlad',
//     age: 22,
//     sex: 'male'
// };

// 2)Функция конструктор и литерал new (было раньше, не рекомендуется)

// var object1 = new Object();
// object1.age = 19;
// console.log(object1.age);

// 3)Статический метод create(null или объект наследования) класса Object

// var object2 = Object.create(object);
// console.log(object2.name);

    // Выражения доступа
    // 1
    // console.log(object.name);
    // 2
    // console.log(object['name']);

    // Удаление свойства через унарный оператор delete
    // delete object.name;

    // Проверить есть ли свойство через бинарный оператор in
    // console.log('name' in object2);

    // Метод проверки своего (не наследованного) свойства
    // console.log(object2.hasOwnProperty('name'));

// Прототипы и наследование_#####################################################

var Person = {
    construct: function(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet: function() {
        return "Hi, my name is " + this.name;
    }
};

var firstPerson, anotherPerson, thirdPerson;

firstPerson = Object.create(Person).construct("Vlad", 22, "male");
anotherPerson = Object.create(Person).construct("Jess", 20, "female");
thirdPerson = Object.create(Person).construct("Max", 25, "male");
console.log(firstPerson);
console.log(firstPerson.greet());
console.log(anotherPerson);
console.log(anotherPerson.greet());
console.log(thirdPerson);
console.log(thirdPerson.greet());

// Узнать является ли прототипом
console.log(Person.isPrototypeOf(firstPerson));

//Через функцию конструктор_____________________________________________________

// var Person = function(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.greet = function() {
//         return "Hi, my name is " + this.name;
//     };
// };
//
// firstPerson = new Person("Vlad", 22, "male");
// console.log(firstPerson);
// console.log(firstPerson.greet());
