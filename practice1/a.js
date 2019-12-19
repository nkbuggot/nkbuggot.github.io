function picture(){
headNode=document.createElement("h1");
textnode=document.createTextNode('EE測試中15');
headNode.appendChild(textnode);
document.body.appendChild(headNode);

dNode=document.createElement("p");
textnode=document.createTextNode('Click the button to display the first character of the string "HELLO WORLD".');
dNode.appendChild(textnode);
document.body.appendChild(dNode);
//var element = document.getElementById("div1");
//element.appendChild(para);

d1Node=document.createElement("p");
textnode=document.createTextNode('QQ');
d1Node.appendChild(textnode);
document.getElementById("sum").appendChild(d1Node);



}