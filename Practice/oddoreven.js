function oddOrEven(input){
    if(input%2===0){
        return true;
    }
    return false;
}
var input = prompt("Enter a number");
oddOrEven(input)?document.write("Even"):document.write("Odd");