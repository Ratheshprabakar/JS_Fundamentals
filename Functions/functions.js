function checkAge(age){
    if(age>18){
        return true
    }return confirm("Do you have permission from your parents");
}

var age = prompt("Enter your age");
checkAge(age)?alert('Access Granted'):alert('Access Denied');

