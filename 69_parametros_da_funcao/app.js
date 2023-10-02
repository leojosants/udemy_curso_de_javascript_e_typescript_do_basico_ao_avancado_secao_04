(() => {
    /*
        arguments - supports all arguments sent (works only with the FUNCTION declaration)
    */

    //
    function example01() {
        function func() {
            console.log(arguments[0]);
            console.log(arguments[1]);
            console.log(arguments[2]);
        };

        func('Leonardo', 'Santos', 39);
        example01();
    };


    // 
    function example02() {
        function sum() {
            let total = 0;

            for (let argument of arguments) {
                total += argument;
            };

            console.log(total);
        };

        sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
        example02();
    };


    // 
    function example03() {
        function sum(a, b, c) {
            let total = 0;

            for (let argument of arguments) {
                total += argument;
            };

            console.log(total, a, b, c);
        };

        sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
        example03();
    };


    // 
    function example04() {
        function func(a, b, c, d, e, f) {
            console.log(a, b, c, d, e, f);
        };

        func(1, 2, 3, 4, 5, 6, 7);
        example04();
    };


    // 
    function example05() {
        function func(a, b, c, d, e, f) {
            console.log(a, b, c, d, e, f);
        };

        func(1, 2, 3);
        example05();
    };


    // 
    function example06() {
        function sum(a, b) {
            console.log(a + b) // NaN - 
        };

        sum(1);
        example06();
    };


    // 
    function example07() {
        function sum(a, b) {
            b = b || 0;
            console.log(a + b)
        };

        sum(2);
        example07();
    };


    // 
    function example08() {
        function sum(a, b = 0) {
            console.log(a + b)
        };

        sum(2);
        example08();
    };


    // 
    function example09() {
        function sum(a, b = 2, c = 4) {
            console.log(a + b + c)
        };

        sum(2, 10);
        example09();
    };


    // 
    function example10() {
        function sum(a, b = 2, c = 4) {
            console.log(a + b + c)
        };

        sum(2, '', 20);
        sum(2, null, 20);
        sum(2, undefined, 20);
        example10();
    };


    // 
    function example11() {
        function func({ first_name, last_name, age }) {
            console.log(first_name, last_name, age);
        };

        func({ first_name: 'Leonardo', last_name: 'Santos', age: 39 });
        example11();
    };


    // 
    function example12() {
        function func({ first_name, last_name, age }) {
            console.log(first_name, last_name, age);
        };

        const person = {
            first_name: 'Leonardo',
            last_name: 'Santos',
            age: 39
        };

        func(person);
        example12();
    };


    // 
    function example13() {
        function func([first_name, last_name, age]) {
            console.log(first_name, last_name, age);
        };

        func(['Leonardo', 'Santos', 39]);
        example13();
    };


    // 
    function example14() {
        function func([first_name, last_name, age]) {
            console.log(first_name, last_name, age);
        };

        const number_array = ['Leonardo', 'Santos', 39];

        func(number_array);
        example14();
    };


    // 
    function example15() {
        function executeOperation(operator, acumulator, ...numbers) {
            for (const number of numbers) {
                if (operator === '+') acumulator += number;
                if (operator === '-') acumulator -= number;
                if (operator === '*') acumulator *= number;
                if (operator === '/') acumulator /= number;
            };

            console.log(acumulator);
        };

        executeOperation('+', 0, 20, 30, 40, 50);
        executeOperation('-', 1, 20, 30, 40, 50);
        executeOperation('*', 1, 20, 30, 40, 50);
        executeOperation('/', 1, 20, 30, 40, 50);
        example15();
    };


    // 
    function example16() {
        const executeOperation = function (operator, acumulator, ...numbers) {
            for (const number of numbers) {
                if (operator === '+') acumulator += number;
                if (operator === '-') acumulator -= number;
                if (operator === '*') acumulator *= number;
                if (operator === '/') acumulator /= number;
            };

            console.log(acumulator);
        };

        executeOperation('+', 0, 20, 30, 40, 50);
        example16();
    };


    // 
    function example17() {
        const executeOperation =  (operator, acumulator, ...numbers)=> {
            console.log(arguments);
        };

        executeOperation('+', 0, 20, 30, 40, 50);
    };
    example17();
})();