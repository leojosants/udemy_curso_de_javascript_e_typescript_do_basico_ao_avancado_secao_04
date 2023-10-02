function createPerson(first_name, last_name, heigth, weigth) {
    return {
        first_name,
        last_name,
        heigth,
        weigth,

        get fullName() {
            return `${this.first_name} ${this.last_name}`;
        },

        set fullName(fullName) { 
            fullName = fullName.split(' ');
            this.first_name = fullName.shift();
            this.last_name = fullName.join(' ');
        },

        speak(about) {
            return `${this.first_name} está ${about}`;
        },

        get imc() {
            const result = this.weigth / (this.heigth * this.heigth);
            return result.toFixed(2);
        },
    };
};

const person_01 = createPerson('Leonardo', 'Santos', 1.8, 45);
person_01.fullName = 'João José de Oliveira Santos';
console.log(person_01.first_name);
console.log(person_01.last_name);