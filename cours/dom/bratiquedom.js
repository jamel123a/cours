/// number 2
/*let image = document.getElementsByTagName("img");

for (let i = 0 ; i < image.length ; i++ ){
    image[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    image[i].alt = "Elzero"
    image[i].style = "background : red"
}
*/
/// ! number 3 

var inputvalue = document.querySelector('input')
var result = document.querySelector('.result') 

inputvalue.oninput = function (){
    result.innerHTML =`${(inputvalue.value)} USD Dollar = ${(inputvalue.value * 16.3).toFixed(2)} Egyptian Pound`
} 

/// ! number 4
let one = document.querySelector(".one");
let two = document.querySelector(".two");

one.title = one.className
two.title = two.className
one.textContent = two.textContent
two.textContent = `${two.className} ${two.attributes.length}`

console.log(one)
console.log(two)


/// ! number 5

let images = document.querySelectorAll('img')

for( let i = 0 ; i< images.length ; i++){
    if (images[i].hasAttribute("alt") ){
        images[i].alt = "old"
    }
    else{
        images[i].alt = "elzero "
    }

}




//2
let add = document.querySelector(".classes-to-add")
let remove = document.querySelector(".classes-to-remove")
let curent = document.querySelector('[ title="Current"]')
let cls = document.querySelector(".classes-list span")

function rep(){
  document.querySelectorAll("span").forEach(ele => ele.remove())

  for (let i=0; i< this.value.trim().split(" ").length; i++){
    if (add.value)
      add.classList.add(this.value.toLowerCase().trim().split(" ")[i])
    
    if (remove.value)
      add.classList.remove(this.value.toLowerCase().trim().split(" ")[i])
    
  }
  this.value = "";
// ad or  remove span
  if (curent.classList.length){
    [...curent.classList].sort().forEach(ele => {
      let span1 = document.createElement("span");
      span1.textContent = ele;
      cls.append(span1);
    });
  }else cls.textContent = "No Classes To Show"
}
add.onblur = rep()
remove.onblur =rep()


//3

let myp = document.querySelector(".our-element")
let p = document.getElementsByTagName("p")[0]
p.remove()

let myp1 = myp.cloneNode()
let myp2 = myp.cloneNode()
function set(name,value){
  name.className = value.toLowerCase();
  name.title = `${value} Element`
  name.setAttribute("data-value",value)
  name.textContent = value
}
set(myp1,"Start");
set(myp2,"End")

myp.before(myp1)
myp.after(myp2)
console.log(myp2)

//4
let p = document.getElementsByTagName("div")[0]
console.log(p.lastChild.textContent.trim())

///5
document.addEventListener("click", function (e){
    console.log(`this is ${e.target.tagName}`)
  })