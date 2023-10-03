/*
    const   -   acts as private attributes or methods
    this    -   acts as public attributes or methods
*/ 

function Person(first_name, last_name) {
    const id = Math.floor(Math.random() * 1000)

    this.first_name = first_name;
    this.last_name = last_name;

    this.fullName = function () {
        console.log(`${this.first_name} ${this.last_name}`);
    };
};

const person_01 = new Person('Leonardo', 'Santos');
console.log(person_01.first_name);
person_01.fullName();
console.log(person_01.id); // undefined