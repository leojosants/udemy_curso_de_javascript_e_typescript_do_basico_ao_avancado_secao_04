// examplo 01
(() => {
    function example01() {

        function* generator() {
            yield 'first yield';
            yield 'second yield';
            yield 'third yield';
        };

        const generator_01 = generator();
        // console.log(generator_01);
        console.log(generator_01.next().value);
        console.log(generator_01.next().value);
        console.log(generator_01.next());
        console.log(generator_01.next());
        example01();
    };
})();


// examplo 02
(() => {
    function example02() {

        function* generator() {
            yield 'first yield';
            yield 'second yield';
            yield 'third yield';
        };

        const generator_01 = generator();

        for (let key of generator_01) {
            console.log(key);
        };

        example02();
    };
})();


// examplo 03
(() => {
    function example03() {

        function* generator() {
            let i = 0;

            while (true) {
                yield i;
                i++;
            };
        };

        const generator_01 = generator();

        console.log(generator_01.next().value);
        console.log(generator_01.next().value);
        example03();
    };
})();


// examplo 04
(() => {
    function example04() {

        function* generator01() {
            yield 0;
            yield 1;
            yield 2;
        };

        function* generator02() {
            yield* generator01();
            yield 3;
            yield 4;
            yield 5;
        };

        const generator_02 = generator02();

        for (let key of generator_02) {
            console.log(key);
        };
        example04();
    };
})();


// examplo 05
(() => {
    function example05() {

        function* generator() {
            yield () => { 
                console.log('Função executada no yield 1');
            };

            yield () => { 
                console.log('Função executada no yield 2');
            };
        };

        const generator_01 = generator();
        const func_01 = generator_01.next().value;
        const func_02 = generator_01.next().value;

        func_01();
        func_02();
    };
    example05();
})();