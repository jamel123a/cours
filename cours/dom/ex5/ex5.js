let nunmber = document.querySelector("[type = number]");
let text = document.querySelector("[type = text]");
let select = document.getElementsByName("type")[0];
let result = document.querySelector(".results")
document.forms[0].onsubmit = function(e){
     e.preventDefault();
     result.innerHTML = "";
     item();
}

function item(){
   let mynum = nunmber.value;
   let mytexy = text.value;
   let myslect = select.value;
   for (let i = 0 ; i<= mynum ;i++){
       result.innerHTML += `<${myslect} class=box title="Element" id=id-${i}>${mytexy}<${myslect}>`
   }
}




