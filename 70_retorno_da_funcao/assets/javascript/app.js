/* example 01
    function sum(a, b) {
        return a + b;
    };


    function sum02(a, b) {
        console.log(a + b);
    };
    sum02(5, 2)
*/


/* example 02 
    document.addEventListener('click', function () { 
        document.body.style.backgroundColor = 'red';
    });
*/


/* example 03 
    function createPerson(first_name, last_name) {
        return {first_name,last_name};
    };

    const person = createPerson('Leonardo', 'Santos');
    console.log(person);
*/


/* example 04 
    function speakPhrase(beginning_of_sentence) {
        function sayTheRest(rest_of_sentence) {
            return beginning_of_sentence + ' ' + rest_of_sentence;
        };

        return sayTheRest;
    };

    const say = speakPhrase('Olá');
    const rest_of_sentence = say('Mundo!');

    console.log(rest_of_sentence);
*/


/* example 05 
    // function doublesValue(number) {
    //     return number * 2;
    // };

    // function triplesValue(number) {
    //     return number * 3;
    // };

    // function quadruplesValue(number) {
    //     return number * 4;
    // };

    // console.log(doublesValue(2));
    // console.log(triplesValue(2));
    // console.log(quadruplesValue(2));

    function createMultiplier(multiplier) {
        return function (number) {
            return number * multiplier;
        };
    };

    const doubles = createMultiplier(2);
    const triples = createMultiplier(3);
    const quadruples = createMultiplier(4);

    console.log(doubles(2));
    console.log(triples(2));
    console.log(quadruples(2));
*/
