/* example 01 
(() => {
    function returnFunction() {
        const first_name = 'Leonardo';

        return function () {
            return first_name;
        };
    };

    const func = returnFunction();

    console.dir(func);
})();
*/


/* example 02 */
(() => {
    function returnFunction(first_name) {
        return function () {
            return first_name;
        };
    };

    const func_01 = returnFunction('Leonardo');
    const func_02 = returnFunction('João');

    console.dir(func_01);
    console.dir(func_02);

    console.log(func_01());
    console.log(func_02());
})();