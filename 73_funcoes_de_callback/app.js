/* example 01 */
(() => {
    function example01() {
        function generateRandom(min = 1000, max = 3000) {
            const number = Math.random() * (max - min) + min;
            return Math.floor(number);
        };

        function func01(callback) {
            setTimeout(() => {
                console.log('func01');
                if (callback) callback();
            }, generateRandom());
        };

        function func02(callback) {
            setTimeout(() => {
                console.log('func02');
                if (callback) callback();
            }, generateRandom());
        };

        function func03(callback) {
            setTimeout(() => {
                console.log('func03');
                if (callback) callback();
            }, generateRandom());
        };

        func01(() => {
            func02(() => {
                func03(() => {
                    console.log('Olá, Mundo!');
                });
            });
        });
        example01();
    };
})();


/* example 02 */
(() => {
    function example02() {
        function generateRandom(min = 1000, max = 3000) {
            const number = Math.random() * (max - min) + min;
            return Math.floor(number);
        };

        function func01(callback) {
            setTimeout(() => {
                console.log('func01');
                if (callback) callback();
            }, generateRandom());
        };

        function func02(callback) {
            setTimeout(() => {
                console.log('func02');
                if (callback) callback();
            }, generateRandom());
        };

        function func03(callback) {
            setTimeout(() => {
                console.log('func03');
                if (callback) callback();
            }, generateRandom());
        };

        function func01Callback() { 
            func02(func02Callback);
        };

        function func02Callback() { 
            func03(func03Callback);
        };

        function func03Callback() { 
            console.log('Olá, Mundo!');
        };

        func01(func01Callback);
    };
    example02();
})();