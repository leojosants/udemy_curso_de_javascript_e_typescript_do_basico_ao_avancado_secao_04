/* example 01 */
(() => {
    const first_name = 'Leonardo';

    function sayName() {
        console.log(first_name);
        sayName();
    };
})();


/* example 02 */
(() => {
    const first_name = 'Leonardo';

    function sayName() {
        console.log(first_name);
    };

    function useSayName() { 
        sayName();
        useSayName();
    };
})();


/* example 03 */
(() => {
    const first_name = 'Leonardo';

    function sayName() {
        const first_name = 'José';
        console.log(first_name);
    };

    function useSayName() { 
        sayName();
        useSayName();
    };
})();


/* example 04 */
(() => {
    const first_name = 'Leonardo';

    function sayName() {
        console.log(first_name);
    };

    function useSayName() { 
        const first_name = 'José';
        sayName();
    };

    useSayName();
})();