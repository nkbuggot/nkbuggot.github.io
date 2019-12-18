new_element=document.createElement("script"); 
new_element.setAttribute("type","text/javascript"); 
new_element.setAttribute("src","a.js");// 在這裡引入了a.js 
document.body.appendChild(new_element); 
function b() { 
a(); 
}