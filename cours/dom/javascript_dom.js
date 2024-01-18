/* advence */

/* DOM */
// style  bch t3ml hja bi css
var  heading =getElementById("demo");
heading.style.fontSize="20px";// lzem t3ml majuscule li theni wls9en feha 

document ; //! contain propeties methode 
 ///?  document [url , title docytype, all , body , images,links , forms]
 document.URL
 document.body

 //? getElementbyId   tjeb id  or  class
//? getElementbyid asra3 wahda 

let myIdElement = document.getElementById("")// id wle  class 

  //? getElementsbyTagName  brcha  elements // p or  h1 h2 .....

  var tag=document.getElementsByTagName("p");
  tag[1].textContent("test");//? t5ou thani 3nser

  //? getElementsbyClassName  kfkf brcha  name 
 var call=document.getElementsByClassName("desc");
 console.log(call[1].getAttribute("class"));//? tjeb donner 
 call[1].setAttribute("title","ay hja");//? tekteb
 console.log(cls[1]);
 
 //? queryselector  m3a t3ref li id  wla class selectors  kol  css
 document.querySelector(".class");//! yjeb awel whda  brka 
 //? queryselectorAll 
 document.querySelectorAll(".class");//? yjeb kol 



 //! dom [get / set element content attributes]
 //? innerHTML yraj3 html kima  howa  
let myElement = document.querySelector(".js");
console.log(myElement.innerHTML)// get  html

//* set
myElement.innerHTML ="text from <span> mainjs </span> file" // yzed span  mch text 

 //? textContext yraja3  test pure 
console.log(myElement.textContent)
myElement.textContent ="text from = <span> mainjs </span> file" // klha  text 

//* tnjem tbdel attribute kima
document.images[0].id ="image"  // * t3ml id 


//? getAttribute  tjeb

console.log(myElement.getAttribute("class"));
//? setAttribute  qualifiteName w b3ed value 

div.id="myid";
div.className="myClass";// or 
div.setAttribute('id',"myId");// this better 
console.log(myElement.setAttribute("href","ahmed"))// kn qualifiteName  mfmch y3mlk whed

 //? innerText hja li mktouba fi id or class

 //! dom [chaect attribute ]
/* 
  *- Element.attributes
  * - Element.hasAttribute //? whda  yra3 true  or  false 
  *- Element.hasAttributes //? brcha  kefkef
  *- Element.removeAttribute */ //? tfsa5 attribute hki for ever

console.log(document.getElementsByTagName("p")[0].attributes)//attribute kol 
let myP  = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")){
  if (myP.getAttribute("data-src") === ""){ 
     myP.removeAttribute("data-src")
}
   else{
     myP.setAttribute("data-src","new value")
   }
   else {
      console.log("not  found ")
   }

   if (myP.hasAttributes()) {
      console.log(`Has Attributes`);
    }
    
    if (document.getElementsByTagName("div")[0].hasAttributes()) {
      console.log(`Has Attributes`);
    } else {
      console.log(`Div Has No Attributes`);
    }   

 /*
                    !!!!!!! DOM [Create Elements]    !!!!
 * - createElement //? element moch attribute kima  div  wb3ed tnjem tdblou 
 * - createComment 
 * - createTextNode  //? thot les content mt3 attribute
 * - createAttribute //
 * - appendChild  // thot  hja  fi hja 
 * className // t3teh classname 
 
*/
var list = document.createElement("ul"); //* إنشاء عنصر HTML <ul>
var item = document.createElement("li"); //* إنشاء عنصر HTML <li>
var text = document.createTextNode("عنصر جديد"); //* إنشاء عنصر نصي جديد
//? append text to element 
item.appendChild(text); //* إضافة عنصر النص الجديد إلى العنصر <li>
//? append element to element 
list.appendChild(item); //* إضافة العنصر <li> إلى العنصر <ul>
// ? append  element to body 
document.body.appendChild(list); //* إضافة العنصر <ul> إلى الصفحة

//* CreateComment 
var div = document.createElement("div"); //? إنشاء عنصر HTML <div>
var comment = document.createComment("هذا تعليق جديد!"); //? إنشاء تعليق جديد
div.appendChild(comment); //? إضافة التعليق إلى العنصر <div>
document.body.appendChild(div); //? إضافة العنصر <div> إلى الصفحة
//*className
element.className = "newClass"; //? add class to element or update 



/*
 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!     DOM [Deal With Childrens]
 * - children  //?yjblk  3nser kol  mt3 ab >> awel child children[0]
 * - childNodes //? yjblk 3nser  w text  w number 3nser awel child children[0] hta espace
 * - firstChild //? yjblk 3nser loul mhma kn ( text , 3nser hta comment ....)
 * - lastChild
 * - firstElementChild //? yjblk awel element y3ni 3nser
 * - lastElementChild
 * - ct.insertBefore(text,span);// insert text 9bal span
 * - previeuselementsbling   // element li 9bal p 
 * - nextelementsbling // element li b3ad p par exemple
 * - parentelement  // ab mt3 p 
 * - parantelement // ab mt mt3 html howa document 
 * - nextsbilling // ay 3nser b3dou mhma ken
 * - previeussbilling // 9bal 

  alert( document.documentElement.parentNode ); // document
alert( document.documentElement.parentElement ); // null
*/



/*
 !!!!!!!!!!!!!!!!!!!!!!!!!        DOM [Events]     !!!!!!!!!!
  - Use Events On HTML
  - Use Events On JS
 *--- onclick 
 *--- ondbclick   يحدث عند النقر مرتين بسرعة على العنصر المحدد.
 *--- onmouseover
 *--- onmouseout
 *--- onmousedown ==>  w9et t5rej mn pere wfille
 *--- onmousemove
 * -- onmouseup   يحدث عندما يتم رفع النقر عن العنصر المحدد.
 * --- oncontextmenu => jeblk menu 
 * --- onmouseenter  ==> hya nfs hovor
 * --- onmouseleave  ==> w9et t5rej mn pere

 * --- onload
 * --- onunload   يحدث عندما يتم تفريغ الصفحة  
 * --- onscroll
 * --- onresize   يحدث عندما يتم تغيير حجم النافذة.
 * --- keydown  يحدث عندما يتم الضغط على زر المفاتيح داخل الصفحة.
 * ---  keyup: يحدث عندما يتم رفع زر المفاتيح بعد الضغط

 * --- onfocus ==>  w9et t9res fi  input w tkteb 
 * --- onblur  ==> w9et t5rej 
 * --- onsubmit => w9et tb3ef
 * --- onchange ==> m3a select
 * --- oninput ==> tkteb ki input {}
*/

let btn = document.querySelector('button')
btn.onclick = function(){
  console.log("click")
} 

window.onresize = function () {
  console.log("Scroll");
};


//* preventDefault   
function inputFun(e){
  e.preventDefault(e);// bch mt3mlch reload  y3ni bch t7bes hja 
  content.log(e.type);
}

// valite form
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};
 /// dom event [ focus , blur , click]

 let one = document.querySelector(".one");
 let two = document.querySelector(".two");
 
 window.onload = function () {
   two.focus();
 };
 
 one.onblur = function () {
   document.links[0].click();
 };



 /*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);// tjblk les  class w methode 
console.log(typeof element.classList);// objeect
console.log(element.classList.contains("osama"));// false or true  mwjoud  wle 
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));// class item 3

element.onclick = function () {
  element.classList.toggle("show"); // kn mwjoud ytfse5 kn le ytzed
  element.classList.add("show");
  element.classList.remove("show");
  element.parentElement
};

// dom css
// -style -csstext -removeproperty (style name [name ,stylesheet])-  setproperty (property name ,value , importance)

let element1 = document.querySelector("#app")
element.style.fontSize= "18px"
element.style.cssText= "color :red ,fontSize : 30px"
element.style.removeProperty("color")
element.style.setProperty("color","red","important")

/*DOM [Deal With Elements]
- before [Element || String]
- after [Element || String]
- append [Element || String]
- prepend [Element || String]
- remove
-set
*/

let element11 = document.getElementById("my-div");
let createdP = document.createElement("p");

element.prepend("jamek isspuip ")// yzek fi 3nser text ama 9blou 
// element.remove();

 
/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);


/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);//tnjem t5dem 
// myP.addEventListener("click", two);//

// myP.addEventListener("click", "String"); // Error 

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () { // 3leh event 3adi ymchi kn 3la 3nser mwjoud fi html 
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {// target hja li t7eb tselha
    console.log("Iam Cloned");
  }
});











   


 

 