'use strict';


const button = document.getElementById('Add');

button.addEventListener('click', function() {
    const newToDo = prompt("Please enter link.");
    const ol = document.getElementById('demo');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newToDo));
    if (li !== null) {
        return ol.appendChild(li);  
    }
    
    
})

const button2 = document.getElementById('Clear');

button2.addEventListener('click', function() {
    const ol2 = document.getElementById('demo');
    ol2.innerHTML = '';
})




