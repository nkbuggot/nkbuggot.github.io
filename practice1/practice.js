new_element=document.createElement("script"); 
new_element.setAttribute("type","text/javascript"); 
new_element.setAttribute("src","a.js");// 在這裡引入了a.js 
document.body.appendChild(new_element); 
function practice(){
	abc(123);
/*
   //顯示資料長度
   const max = 50;//Math.max(a.length,b.length);
   document.getElementById('SumAll').disabled=true;
   document.getElementById('SumNumber').disabled=true;
   document.getElementById('SumOrgNumber').disabled=true;
   
   document.getElementById("sum").addEventListener("click", function(){      
      var sumA = document.getElementById("SumA").value;
      var sumB = document.getElementById("SumB").value;
      let dataSumOk = true;
      let vError = '';
      dataSumOk = checkNumber(document.getElementById("SumA").value, dataSumOk);
      dataSumOk = checkNumber(document.getElementById("SumB").value, dataSumOk);
      document.getElementById("demo7").innerHTML = sumA + 'A' + sumB;
      if (dataSumOk) {
         let num = getNumber(sumA, sumB, 'add');
         document.getElementById("SumAll").value = num;
         document.getElementById("SumNumber").value = Number(num);
      } else {
        vError = '欄位出現非數字字符!';
        document.getElementById("SumAll").value = vError;
      }
      document.getElementById("demo8").innerHTML = sumA + 'BBB' + num;
      document.getElementById("SumOrgNumber").value =
      Number(document.getElementById("SumA").value) +
      Number(document.getElementById("SumB").value);
   });
   
   document.getElementById("decrease").addEventListener("click", function(){
      var decreaseA = document.getElementById("decreaseA").value;
      var decreaseB = document.getElementById("decreaseB").value;
      checkNumber(document.getElementById("decreaseA").value);
      checkNumber(document.getElementById("decreaseB").value);
      decrease(decreaseA,decreaseB)
   });   
  
   //檢查資料做相加或相減，並回傳結果正負數，true表示正數，false表示負數
   function getNumber(a, b, fromButton){
      let bBool = true;
      let finalValue = '';
      if (fromButton == 'add') {
		 //判斷正負數，正負相間使用decrease，相同正或相同負使用sum，最後依據正負補上-
         if (a.indexOf('-') === 0) {//a為負數
            if (b.indexOf('-') === 0) {//b為負數 --
               finalValue = sum(a.replace('-',''),b.replace('-',''));
               bBool = false;
            } else {//b為正數 -+
               let num = Number(a.slice(1)) - Number(b.slice(0));//a.slice(1)表示去除-
               if (num < 0) {//A為負數B為正數，且A去除掉負號-B小於零時要負負得正，所以給true。
                  bBool = true;
               } else {
                  bBool = false;   
               }
               finalValue = decrease(a.replace('-',''),b);               
            }
         } else {//a為正數
            if (b.indexOf('-') === 0) {//b為負數+-
               let num = Number(b.slice(1)) - Number(a.slice(0));
               if (num < 0) {
                  bBool = true;   
               } else {
                  bBool = false;   
               }
               finalValue = decrease(a,b.replace('-',''));
            } else {//b為正數++
               finalValue = sum(a,b);
               bBool = true;
            }
         }
      }
      
      //最後依據上方判斷，補上負號
      if (bBool) {
         finalValue = finalValue;      
      } else {
         finalValue = '-' + finalValue;
      }
      
      return finalValue;
   }   
   
   //檢查資料是否為數字
   function checkNumber(num, bBool){
      if (bBool == false) {
         return bBool;
      }
      //判斷資料的點位置是否相同
      if (num.indexOf('-') === num.lastIndexOf('-')) {
         bBool = true;
      } else {
         bBool = false;
         return bBool;
      }
      //替換掉-號讓下方num.match(/^[0-9 |'.']+$/i)不會為空
      num = num.replace('-','');
      //判斷資料的點位置是否相同
      if (num.indexOf('.') === num.lastIndexOf('.')) {
         //判斷資料是否在0-9中，或有.的
         //^代表at the beginning of a string，在[]外
         //^代表characters NOT inside the brackets [h] in a string，在[]內，
         //舉例來說[^h]代表字串中不含h的都可尋找到
         //+代表at least one "0-9"|'.' in a string
         //$代表at the end of a string
         //下方解釋為^起頭為0-9或.的條件下，+印出後續資料，$結尾為0-9或.的條件下
         if (num.match(/^[0-9 |'.']+$/i) == num) {
            bBool = true;
         } else {
            bBool = false;
         }
      } else {
         bBool = false;
      }
      document.getElementById("demo6").innerHTML = bBool + 'Q' + num;
      return bBool;
   }   
   
   //處理相加後多出來的資料，把.往右移一格
   function addPoinut(add){
      if (add !==""){
         add = add.replace('.','').slice(0, add.indexOf('.')+1) + '.' +       
               add.replace('.','').slice(add.indexOf('.')+1);
      }
      return add;
   }
  
   //將.補上取到.的位置
   function getpoint(a){
      let apoint = a.indexOf('.');	  
      //檢查資料有沒有. 如果無會=-1，補上.後重新取位置
      if (apoint === -1) {
         a += '.';
         apoint = a.indexOf('.');
      }	  
      return apoint;
   }
  
   //++相加或者--相加起來
   function sum(a, b){
      var apoint = getpoint(a);
      var bpoint = getpoint(b);
      
      var maxPoint = Math.max(apoint, bpoint);
      var minPoint = Math.min(apoint, bpoint);
      if (maxPoint === apoint) {
         var maxStr = a;
         var minStr = b;
      } else {
         var maxStr = b;
         var minStr = a;
      }
      let i = 0;//LOOP用
      let z;//LOOP中計算
      let zponit = 0;//比對兩個字串的小數位位置
      let add ="";//相加後超過10串起來的字串
      let text ="";//合併結果
      
      for (i=0;i<max;i++){
         if (maxPoint - i <= minPoint) {//比對maxPoint與minPoint校正位數，位數相等時處理
            if (maxStr.charAt(i) === '.') {//字串為.時處理
               z = '.';
               add += z + "";
            } else {//字串不為.時處理
               z = Number(maxStr.charAt(i)) + Number(minStr.charAt(i-zponit));
               if (z.toString().length > 1) {//如果相加後長度大於1
                  add += z.toString().charAt(0);//多出來的數字
                  z = z.toString().charAt(1);//個位數字
               } else if (add !==""){//add開始有資料時，相加後的值長度小於1則補零
                  add += "0";
               }
            }
         } else {//比對maxPoint與minPoint校正位數，位數不相等時處理
            zponit += 1;
            z = Number(maxStr.charAt(i));
         }       
         text = text + z + "";
      }//LOOP結束
      document.getElementById("demo4").innerHTML = text;
      document.getElementById("demo5").innerHTML = add;
      //
      if (Number(add) !== 0) {
         add = addPoinut(add);
         text = sum(text, add);
      }
      return text;
      
   }
   
   //+-或者-+相減起來
   function decrease(a, b){
      var apoint = getpoint(a);
      var bpoint = getpoint(b);
      
      var maxPoint = Math.max(apoint, bpoint);
      var minPoint = Math.min(apoint, bpoint);
      if (maxPoint === apoint) {
         var maxStr = a;
         var minStr = b;
      } else {
         var maxStr = b;
         var minStr = a;
      }
      let i = 0;//LOOP用
      let z;//LOOP中計算
      let zponit = 0;//比對兩個字串的小數位位置
      let reduce ="";//相減後的個位數結果
      let text ="";//合併結果
      
      for (i=0;i<max;i++){
         if (maxPoint - i <= minPoint) {//比對maxPoint與minPoint校正位數，位數相等時處理
            if (maxStr.charAt(i) === '.') {//字串為.時處理
               z = '.';
               reduce += z + "";
            } else {//字串不為.時處理
               z = Number(maxStr.charAt(i)) - Number(minStr.charAt(i-zponit));
               if (z < 0) {//檢查相減後數字是不是小於零
                  let sz = z.toString();
                  reduce += '1';//超過10的數字
                  z = 10 - sz.slice(-1);//拿最後一位與10相減
               } else {//add開始有資料時，相加後的值長度小於1則補零
                  reduce += "0";
                  z = z.toString().charAt(0);//個位數字
               }
            }
         } else {//比對maxPoint與minPoint校正位數，位數不相等時處理
            zponit += 1;
            z = Number(maxStr.charAt(i));
         }       
         text = text + z + "";
      }//LOOP結束
      document.getElementById("demo7").innerHTML = text;
      document.getElementById("demo8").innerHTML = reduce;
      //      
      if (Number(reduce) !== 0) {
         reduce = addPoinut(reduce);
         text = decrease(text, reduce);
      }
      return text;
   }*/
} 