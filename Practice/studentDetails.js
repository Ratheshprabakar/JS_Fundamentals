function displayDetails(input){
    if(studentInfo.id==input){
        document.write('Welcome ' + studentInfo.name+'<br/>');
        document.write('Age :'+studentInfo.age+'<br/>');
        document.write('Email :'+studentInfo.email+'<br/>');
        document.write('Department :'+studentInfo.department+'<br/>');
        document.write('Year :'+studentInfo.year+'<br/>');
    }
}
var studentInfo ={
    id:1,
    name:'Rathesh',
    age:22,
    email:'ratheshprabakar@gmail.com',
    department: 'Information Technology',
    year:4
}
var input = prompt('Enter Id ');
displayDetails(input);

function updateEmail(newEmail){
    if(confirm("Are you confirm with the new email ?")){
        studentInfo.email = newEmail;
        alert("Successfully updated");
    }
    else
    {
        alert("Thank god, You saved your data !");
    }
}
function validateId(input){
    if(studentInfo.id>0 && studentInfo.id == input){
        return true;
    }
    return false;
}
var input = prompt('Enter Id to update');
if(validateId(input)){
    var newEmail = prompt("Enter new email for "+input);
    updateEmail(newEmail);    
}
else{
    alert('Please Enter valid ID');
}

