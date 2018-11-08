// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];

var nodeEnd = document.createElement("li");                 // Create a <li> node
var textnode = document.createTextNode("cream");         // Create a text node
nodeEnd.appendChild(textnode);
list.appendChild(nodeEnd);

// ADD NEW ITEM START OF LIST
var nodeStart = document.createElement("li");                 // Create a <li> node
var textnode = document.createTextNode("kale");         // Create a text node
nodeStart.appendChild(textnode);
list.insertBefore(nodeStart, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list_1 = document.querySelectorAll('li');
var i;
for (i=0; i < list_1.length; i++){
list_1[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var headText =  heading.firstChild.nodeValue;
var itemsTotal = list_1.length;
var newHeading = headText + '<span>' + itemsTotal + '</span>';
//heading.textContent = newHeading;
heading.innerHTML = newHeading;
