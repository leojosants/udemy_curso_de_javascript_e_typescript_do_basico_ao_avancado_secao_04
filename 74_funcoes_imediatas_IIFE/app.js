// IIFE - Immediately invoked function expression
((age, weight, height) => {
    const last_name = 'Santos';

    function ShowFullName(first_name) {
        return first_name + ' ' + last_name;
    };

    function sayFullname() {
        console.log(ShowFullName('Leonardo'));
    };

    sayFullname();

    console.log(age);
    console.log(weight);
    console.log(height);

})(39, 80, 1.80);

// 
((age, weight, height) => {
    const last_name = 'Santos';

    function ShowFullName(first_name) {
        return first_name + ' ' + last_name;
    };

    function sayFullname() {
        console.log(ShowFullName('Leonardo'));
    };

    sayFullname();

    console.log(age);
    console.log(weight);
    console.log(height);

})(39, 80, 1.80);