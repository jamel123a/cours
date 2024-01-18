// [ BOM broser object module ]
/*
- alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

console.log(promptMsg);

//!- setTimeout(Function, Timeout, Additional Params)
//!- clearTimeout(Identifier)


// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

let btn = document.querySelector("button");



function sayMsg(user, age) {
console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counter = setTimeout(sayMsg, 3000, "Osama", 38);//b3ed time t3ti parametre


btn.onclick = function () {
    clearTimeout(counter);// howa nfsou 1
    };


  //!  - setInterval(Function, Millseconds, Additional Params)
  //!  - clearInterval(Identifier)

  let time = document.querySelector("div")
let link= document.querySelector("a")

function timer (){
  time.innerHTML -=1
  if (time.innerHTML === "0"){
    clearInterval(hudle)
    time.style.display="none"// yetne7a time
    link.style.display="block"// wydhher link
  }
  
}
let hudle = setInterval(timer,1000)

/*
 //!   location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/
console.log(location);
console.log(location.href);
// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);



/*
  - // ! open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  -//! close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

setTimeout(function () {
    window.open("", "_self", "", false);
  }, 2000);
  
  setTimeout(function () {
    window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");//brcha o5ren
  }, 2000);


  /* 
  - //! ------------- History API        ------------
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()//? page 9dem
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history.go(-2));//? yarja3 eltali 2

/*
-  //!   stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

 let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
myNewWindow.focus();// kn input tfoukes 3lh 
myNewWindow.close();

 window.scrollTo({
   left: 500,
   top: 200,
   behavior: "smooth"// auto or  instant 
 });


 /*
  BOM [Browser Object Model]
  -//!!!!! ---   Practice => Scroll To Top     ----------
  - scrollX [Alias => PageXOffset] //? nfs chy 
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};


// ! localstorage

/*
 setiteam
 getiteam
 remove
 clear
 key

*/
console.log(window.localStorage.setItem("background","red"))
window.localStorage["color" , "red"]
window.localStorage.backround("red")

window.localStorage.getItem("color")
window.localStorage["color"]

window.localStorage.removeItem("color")

window.localStorage.clear()// ! tfsa5 kol

window.localStorage.key(0)//key ex color

document.body.backround = window.localStorage.setItem("color","red")



/*BOM [Browser Object Model]
 // !Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
// If There Is Color In Local Storage
// [1] Add Color To Div
exp.style.backgroundColor = window.localStorage.getItem("color");
// [2] Remove Active Class From All Lis
lis.forEach((li) => {
  li.classList.remove("active");
});
// [3] Add Active Class To Current Color
document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
li.addEventListener("click", (e) => {
  // console.log(e.currentTarget.dataset.color);
  // Remove Active Class From all Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // Add Active Class To Current Element
  e.currentTarget.classList.add("active");
  // Add Current Color To Local Storage
  window.localStorage.setItem("color", e.currentTarget.dataset.color);
  // Change Div Background Color
  exp.style.backgroundColor = window.localStorage.getItem("color");// red
});
});



/*
  
 -// !     Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session // ? ttfsa5
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session //? ttfsa5
  // ? secion hja w9teya ki form
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
  // console.log(this.value);
  window.localStorage.setItem("input-name", this.value);
};