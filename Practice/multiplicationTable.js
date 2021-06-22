function displayTable(multiplier){
    for (i=1;i<=20;i++){
        document.write(i + "*"+ multiplier +"="+i*multiplier+"<br/>");
    }
}
var multiplier = prompt("Enter the Number");
displayTable(multiplier);