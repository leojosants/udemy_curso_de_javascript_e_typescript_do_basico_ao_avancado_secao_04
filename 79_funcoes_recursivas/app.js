// example 01
(() => {

    function example01() {

        const recursive = (max) => {
            if (max >= 10) return;
            max++;
            console.log(max);
            recursive(max);
        };

        recursive(0);
    };

    example01();

})();