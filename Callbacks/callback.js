// synchronous callback,(executed immediately)
function greeting(name) {
    alert('Hello ' + name);
   }
   
   function userInput(status) {
    var name = prompt('Please enter your name');
    status(name);
   }
   
   userInput(greeting);