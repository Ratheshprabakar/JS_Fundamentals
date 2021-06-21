var user ={
    name: 'Rathesh',
    age: 22,
    place: 'Tamilnadu'
}

console.log('All values',user);

console.log('Name is',user.name);
console.log('Age is',user.age);

// Adding properties
user.destination = 'Software Developer';

console.log("After addition",user);

delete user.destination;

console.log("After Deletion",user);


