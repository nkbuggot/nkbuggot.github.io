function picture(){
node=document.createElement("p");
textnode=document.createTextNode('CCCCCCCCCCCCCCCCCCCCCCCC');
node.appendChild(textnode);
document.body.appendChild(node);
//var element = document.getElementById("div1");
//element.appendChild(para);
	<button id="sum">Try it</button>
	<BR>
	<BR>
	A:<input id="SumA" type="text">

	+ B:<input id="SumB" type="text">
	<BR>
	<BR>
	合計字串:<input id="SumAll" type="text" size ='55'>
	<BR>
	<BR>
	合計數字:<input id="SumNumber" type="text">

	<BR>
	<BR>
	直接轉換合計數字:<input id="SumOrgNumber" type="text">
	<p id="demo4">CC</p>
	<p id="demo5">CC</p>
	<p id="demo6">MM</p>
	<p id="demo10">CC</p>

	<button id="decrease">減法</button>
	<BR>
	A:<input id="decreaseA" type="text">

	- B:<input id="decreaseB" type="text">


	<p id="demo7">MM</p>
	<p id="demo8">CC</p>
	<p id="demo9">CC</p>

}