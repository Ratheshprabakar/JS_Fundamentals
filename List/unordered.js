// unordered list of technologies 
var ulElement = document.createElement('ul');
ulElement.textContent = 'Technologies';

var liElement1 = document.createElement('li');
liElement1.textContent = 'React';

var liElement2 = document.createElement('li');
liElement2.textContent = 'Vue';

var liElement3 = document.createElement('li');
liElement3.textContent = 'Angular';


ulElement.appendChild(liElement1);
ulElement.appendChild(liElement2);
ulElement.appendChild(liElement3);


console.log(ulElement);

// adding to the body
document.body.appendChild(ulElement);