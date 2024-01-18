///////
//! ex 1

let  ja  =  prompt("Print Number From – To")

let ne = ja.trim().split("-").sort((a,b)=> a - b ) ;

for (let i = +ne[0] ;  i <= ne[1] ;i++){
    let text = document.createElement("div")
    text.textContent =i
    document.body.append(text)
}

//!ex 2


let div = document.createElement("div")
let h1= document.createElement("h1")
let p = document.createElement("p")
let button= document.createElement("button")


function clsoe(){
  h1.textContent = "welcome"
  p.textContent = "welcome to jamel"
  button.textContent= "x"
  div.append(h1,p,button)
 document.body.append(div)
   
 button.addEventListener("click", function(){
   button.parentElement.remove()
 });

 
}
div.style.cssText= "background: red; width:200px;height:100px;position:relative"
button.style.cssText="position: absolute;padding:5px;right:0;top:0;background:blue;border:none"
setTimeout(clsoe,3000)

//! ex 3 


//! local storoge
// ? ex 1
let fontsize = document.querySelector("#font")
let colors = document.querySelector("#color")
let sizes = document.querySelector("#size")


let result = document.querySelector("div");


colors.addEventListener("change", (color)=>{
  window.localStorage.setItem("color",color.target.value)
  result.style.color = window.localStorage.getItem("color")
})
sizes.addEventListener("change", (size)=>{
  window.localStorage.setItem("size",size.target.value)
  result.style.fontSize = window.localStorage.getItem("size")
})


result.style.color = window.localStorage.getItem("color")

result.style.fontSize = window.localStorage.getItem("size")


// ? ex 2

let name = document.querySelector("#name")
let last  = document.querySelector("#lastname")
let num = document.querySelector("#num")
let select = document.querySelector("select")

name.oninput = function(){
  window.sessionStorage.setItem("name",name.value)
}

last.oninput = function(){
  window.sessionStorage.setItem("last",last.value)
}
num.oninput = function(){
  window.sessionStorage.setItem("num",num.value)
}

select.onchange = function(){
  window.sessionStorage.setItem("select",select.value)
}

last.value = window.sessionStorage.getItem("last")
name.value = window.sessionStorage.getItem("name")
num.value = window.sessionStorage.getItem("num")
select.value = window.sessionStorage.getItem("select")

// !!!!!!!!!!!!!!!!!!!!!!!       challenge !!!!!!!!!!!!!!

let input = document.querySelector(".input")
let add = document.querySelector(".add")
let div1 = document.querySelector(".tasks")
let taks = []
// test if  excit or no 
if (window.localStorage.getItem("taks")){
  taks = JSON.parse(window.localStorage.getItem("taks"))
}
// njebou donner kn mwjoud 
getTaskfromLocalStorage()
// bch mt3mlch reload page
document.forms[0].onsubmit = function (e){
  e.preventDefault();
}

// etha mch mwjoud n3lou awel hja  arrray object
add.onclick = function (){
  // lzem ykoun feh bch t5dem function 
  if (input.value !== "" ){
    addTaskToArray(input.value)
    //
  //  input.value =""
  }
}
// 
function addTaskToArray(textvalue){
  // create object  
  let taksObject = {
    id : Date.now(),
    title : textvalue
  }
  // push object to array 
  taks.push(taksObject)
  // n3mlou section taks w nafichou ojbect 
  createtakselement(taks)
// nhotou  ojbect fi local 
  addTaskTOLocalStorage(taks)
}

function createtakselement(taks){
  div1.innerHTML = ""
  taks.forEach((element ) => {
     let div = document.createElement("div")
     div.classList = "taks"
     div.setAttribute("data:id", element.id)
     div.appendChild( document.createTextNode(element.title))
     let del = document.createElement("button")
     del.classList = "del"
     del.textContent ="del"
     div.appendChild(del)
     div1.appendChild(div) 
     
  });
}

function addTaskTOLocalStorage (taks){
  // bch yhwel array to object 
  window.localStorage.setItem("taks", JSON.stringify(taks))
  
}

function getTaskfromLocalStorage (){
   let data = window.localStorage.getItem("taks")
   if (data){
     let taks = JSON.parse(data)
     // bch nhthom fi section kn mmawjoudin
     createtakselement(taks)
    
   }
}
// delect 
div1.addEventListener("click", (e)=>{
  // etha mawjouda del mawjouda 
  if (e.target.classList.contains("del")){
    e.target.parentElement.remove("del") 
    delitem(e.target.parentElement.getAttribute("data:id"))
  }
 //
})
// delete 
function delitem(element){
  // bch n3mlou filter
 taks = taks.filter((ele)=> ele.id != element) 
 addTaskTOLocalStorage(taks)
}






