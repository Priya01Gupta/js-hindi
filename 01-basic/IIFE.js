// Immediately Invoked Function Expression(IIFE)

(function code(){
    console.log(`DB CONNECTED`); 
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
})('Priya')