(() => {
    function start() {
        // first - class objects
        function example01() {
            function sayHi() {
                console.log('oi');
            };
         
            sayHi()
            example01();
        };


        // first - class objects
        function example02() {
           
            // function expresson
            const it_is_a_data = function () {
                console.log('Sou um dado!');
            };
           
            it_is_a_data();
            example02();
        };


        // first - class objects
        function example03() {
          
            // function expresson
            const itIsData = function () {
                console.log('Sou um dado!');
            };

            function executeFunction(itIsData) {
                itIsData();
            };
          
            executeFunction(itIsData);
            example03();
        };


        // first - class objects - arrow functions
        function example04() {
           
            // function expresson
            const exampleFunctionArrow = () => {
                console.log('Exemplo de arrow function');
            };
           
            exampleFunctionArrow();
            example04();
        };


        // 
        function example05() {
            const obj = {
                sayHi: function () {
                    console.log('Oi');
                }
            };

            obj.sayHi();
            example05();
        };


        function example06() {
            const obj = {
                sayHi () {
                    console.log('Oi');
                },
            };

            obj.sayHi();
        };
        example06();
    };
    start();
})();