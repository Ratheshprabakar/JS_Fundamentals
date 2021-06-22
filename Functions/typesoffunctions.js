// Anonmyous --> function expression or IIF
// function() {
// console.log("Hii Welcome!!");
// }

// function expression
var test = function () {
    console.log("Hii Welcome!!");
   }
   test();
   
   // Naming Function ---> IIF
   function sample() {
   alert("Hello im Naming Functions")
   }
   sample();
   
   // IIF
   (function Demo() {
    console.log('Im a IIF function');
   })();
   
   (function () {
    console.log('Im a IIF Anonomyous function');
   })();
   
   
   // Function with parameters
   function Add(a, b) {
    return a + b;
   }
   
   var result = Add(10, 20);
   console.log('Result is', result);
   
   
   function Greeting(from, message) {
    document.write(from + ' : ' + message);
   }
   Greeting("Annie", "Welcome to Sessions");