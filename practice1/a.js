function abc(){
	document.getElementById("demo9").innerHTML = 'A';
var node=document.createElement("p");
var textnode=document.createTextNode('A.JS');
node.appendChild(textnode);
document.body.appendChild(node);
document.getElementById("demo9").innerHTML = 'B';

} 