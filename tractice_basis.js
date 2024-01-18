console.log('%cjamel %cWEB','color:red ;font-size:18px' ,'color:blue ;font-size:18px ; background-color:red; font-wigth:bold;');

console.group("group one");
console.log("level one");
console.log('level 1');
console.group("group two")
console.log("level 2")
console.group('groupe three');
console.log('message one');
console.log('message two');
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('groupe 6');
console.log('message 1');
console.groupEnd();
console.groupEnd();
////
console.log(["elzero", "ahmed", "kamel","issaoui"]);

console.log("10"+"20");
console.log(typeof("10"+"20"));
console.log(`${10}${20}`);
console.log(typeof(`${10}${20}`));
console.log("20" +'\n' + "10")
console.log(`${20}\n${10}`);

var jamel ={
    name:"jamel",
    ahmed :{
     name:"jamel"
    }
};

console.log(`i\'m In 
\\\\
love \\\\ """  '''
++ with ++ 
\\"""\\"""
javaScript`)
console.log(typeof jamel)
console.log()
let a = 21;
let b = 20;
console.log(`_${a}_${a}${b}`)




var title="elzero " , description ="elzero web", date="25/12";
var card =`<div>
<h3>${title}</h3>
<p> ${description}</p>
<span>${date}</span>
</div>`;
document.write(card.repeat(4));


console.log ( 10 * 20 + 15 % 3 + 190 + 10 - 400);

// number operateur 

let num =3;
console.log(++num + true  +true);
console.log(++num  + true);
console.log(++num);
console.log(num);


let point = 10 
point =--point - true
console.log(point)


let aa = "-100";
let bb = "20";
let cc = 30;
let gg = true;

console.log(++bb * ++gg + -aa + ++cc   )// 21*2 = 42 + 100 + 31  = 173

console.log(Math.max(2,2,5))

console.log("///////////")
let aaaa= 1_00;
let bbbb=2_00.5;
let cccc=1e2;
let dddd=2.4;
// max of number and well be  iintager 
console.log(Math.trunc(Math.min(aaaa,bbbb,cccc,dddd)));
// way to a + b = 10000
console.log(Math.pow(aaaa,Math.round( dddd)));
// 5 way to dddd be 2
console.log(Math.trunc(dddd))
console.log(Math.round(dddd))
console.log(Number.parseInt(dddd));
console.log(dddd.toFixed(0));
console.log(Math.floor(dddd))
// way b  + d = 66.77 and string 
console.log((Math.trunc(bbbb) / Math.ceil(dddd)).toFixed(2).toString());
//way b + d to bi 67 and number 
console.log(Math.ceil(Math.trunc(bbbb) / Math.ceil(dddd)));

// string operateur 

let ok ="Elzero Web School"

console.log(ok.charAt(2).toUpperCase()+ok.slice(3,6));
console.log(ok.charAt(13).toUpperCase().repeat(8));
console.log(ok.split(" ",1));


console.log(ok.substr(0,7)+ok.substr(-6));

console.log(ok.charAt(0).toLowerCase()+ok.substring(1,ok.length - 1).toUpperCase()+ok.charAt(ok.length - 1).toLowerCase())

console.log(-Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER.toString().length)
console.log(`${Number.MAX_SAFE_INTEGER}`.length)
let myvar = "100.56789 view"
console.log(parseInt(myvar))
console.log(parseFloat(myvar).toFixed(2))
let num1 = 10;
console.log(num1.toString().length)
console.log(Number.isInteger(num1) + Number.isInteger(num1))

console.log(Math.floor(Math.random() * 5))



let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName[0].repeat(3).toLowerCase()); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True


console.log("////////////////")

// if  condition 
let az = 20;
let bz = 30;
let cz = 10;

console.log(az !== bz && az == cz || az !== bz); // true
console.log(az != bz && az != cz); // true
console.log(!(az == bz) && !(az == bz) && !(az == cz) && !(az == cz)); // true

//! if condition 
let abc = 20;
abc < 10 
? console.log (10)
: abc >=10 && abc < 40 
? console.log("10 to 40 ")
: abc > 40
? console.log(" > 40")
: console.log("none");
 
let st = "elzero  Web School"
if  (st.charAt(st.indexOf("W")).toLowerCase() === "w" ){
    console.log('good')
}
else {
    console.log ('none')
}
// switch

let job = "developeur";
let salary = 0 ;
switch (job) {
    case 'manager'  :
    case 'it' :   
        salary =8000
    break;    
    case 'devolopeur':
    case 'designer' :
        salary= 7000;
    break;
    default :
    salary=4000;              
}
console.log(salary);


//! switch
let day = " thursday  ";
let Output ="";
day = day.trim();
day = (day.charAt(0).toUpperCase()) + ( day.substr(1) ) ;

switch (day){
    case "Friday" , 'Saturday', 'Sunday' : 
            Output ="No Appointments Available";
            break;
    case 'Monday' , 'Thursday':
            Output = "From 10:00 AM To 6:00 PM";
            break;
    case   'Tuesday' :
            Output = "From 10:00 AM To 6:00 PM";
            break;
    case  "Wednesday" :
            Output = "From 10:00 AM To 7:00 PM" ;
            break ;           
            default :
            Output="Its Not A Valid Day";
}
console.log(Output);
console.log("   ");

// array 
// challange  youtube
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero" , "Elhem" , "Ousama", "Gamal", "Ameer"];

console.log(my.slice(zero,++counter).reverse());
console.log(my.slice(++zero,--counter).reverse());
console.log(my[--counter].slice(--zero,counter)+ my[++zero].slice(2))
console.log(my[zero].slice(-counter,-zero) + my[++counter].slice(--zero,++zero))//chaine de charactere



let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num2 = 3;
myFriends.pop();

// Method 1
console.log(myFriends);
myFriends.length = 3
console.log(myFriends);

console.log(myFriends.slice(myFriends.indexOf("Ahmed"),num2)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(myFriends.lastIndexOf('Ahmed'), num2)); // ["Ahmed", "Elham", "Osama"];


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.slice(1,3)); // ["Eman", "Osama"]


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

///////////////////////
let website = "Go";

let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];


console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];


// Write 3 Solutions
if (haystack.includes(needle) == 1){
    console.log("found");
}
if (haystack.indexOf(needle) == 1){
    console.log("found");
}
if (haystack.lastIndexOf(needle) == 1){
    console.log("found");
}


///loop challenge 
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
for (let i = 0 ; i < arr1.length ; i++){
    if (typeof arr1[i] === "string" ){
      allArrs.push(arr1[i])
    }
}
console.log(allArrs);
allArrs = arr1.concat(arr2).sort().join("").slice(arr2.length).toLowerCase();
// join mn array li string + option 

console.log(allArrs); // fxy


/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
 let cont = 3;
 
document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${cont} Admins</div>`);
document.write(`<hr>`)

for(let i = 0 ; i < cont ; i++){
    
    document.write(`<div>the  admin for  team ${i + 1} is ${myAdmins[i]}</div>`)
    document.write(`<hr>`)
    document.write(`<h3>team members </h3>`)
    let contE =0 ;
    for(let j = 0 ; j < myEmployees.length ; j++){
        if (myAdmins[i][0] == myEmployees[j][0]){
            document.write(` - ${++contE} ${myEmployees[j]}`)
            document.write(`<br>`)
        }
        
    }
    document.write(`<p>we have ${contE} numbers </p>`)
    document.write(`<br>`)

}

let start = 10;
let end = 100;
let exclude = 40;

  for (let i = start ; i < end ; i +=  start){
    console.log(`${i}`)

  }
    
  let start1 = 10;
let end1 = 0;
let stop1 = 3;

for (let i = start1 ; i > stop1 ; i--){
    console.log(`${i}`)
}
console.log('//////////////////')

let star2 = 1;
let end2 = 6;
let breaker2 = 2;

for (let i = star2 ; i <= end2 ; i++){
    console.log(`${i}`);
    for (let j = breaker2 ; j <= end2 - breaker2  ; j += breaker2){
        console.log(`-- ${j}`);
    }
}

let index = 10;
let jump = 2;
let end3 = 0;
for (;;) {
    console.log(index)
   index-=jump;
   if( index == jump) break ; 
}

let friends1 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

 for (let i = 0 ; i < friends1.length ; i++ ){
    if (friends1[i][0] === (letter.toUpperCase())){
        continue ;
       
    }
    console.log(`${i} => ${friends1[i]}`);
    
 }
 // Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"



 let start12 = 0;
let swappedName = "elZerO";
let resultat = "";

for (let i = 0 ; i < swappedName.length ; i++){
    if (swappedName[i] === swappedName[i].toUpperCase()){
       resultat +=  swappedName[i].toLowerCase();      
    }
    else{
     resultat += swappedName[i].toUpperCase();
    }
}
console.log(resultat)// Output "ELzERo"


let start22 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (i = ++start22 ; i < mix.length ; i++){
    if (typeof mix[i] === 'string'){
        continue;
    }
    console.log(mix[i]);
}
// Output
2
3
4


let friends12 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter1 = 0;
let count = 0;

while (counter1 < friends12.length){
    
    if ((friends12[counter1][index1] === 'A' || typeof friends12[counter1] === "number" )){
        counter1++
        continue;
    }
    console.log(` ${++count} => ${friends12[counter1]}`)
    counter1++;
}


// Output
"1 => Sayed"
"2 => Mahmoud"



/// ! function 
function showDetails(...details){
    let name = ""
    let age = 0;
    let boolen = "";
    for(let i = 0 ; i < details.length ; i++){
        if (typeof details[i] === "string"){
            name = `${details[i]}`;
        }
        if (typeof details[i] === "number"){
            age = `${details[i]}`;
        }
        if ( details[i] === true){
            boolen = 'you are avialable for hire ';
        }
        if ( details[i] === false){
            boolen = 'you are not  available for hire' ;
        }     
    }
    console.log( `hallo ${name}  , your age is ${age} , ${boolen}`)  ;  
}

showDetails( true, 38, "oussama");

// or

function showDetails1(...data) {
  let a = 0,
    b = 0,
    c = 0;
  for (let i = 0; i < data.length ; i++) {
    typeof data[i] === 'string'
      ? (a = data[i])
      : typeof data[i] === 'number'
      ? (b = data[i])
      : data[i] === false
      ? (c = 'Not Availble')
      : (c = 'Availble');
  }
  return console.log(`Hi ${a}, Your Age Is ${b} ,You Are ${c} For Hire`);
}
showDetails1('Mohamed', true, 38);

//! function elzero 

function sayHello(theName, theGender) {
     let resultat = "";
     if (theGender === "Male") {
        resultat = `Hello Mr  ${theName}`
     }
     else if (theGender === "Female") {
        resultat = `Hello Miss ${theName}`
     }else{
        resultat = `Hello ${theName}`
     }
     return console.log(resultat);

  }
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

// ? number 2
  function calculate(firstNum, secondNum, operation) {
     let resultat ;
     if (operation === 'add'){
        resultat = firstNum + secondNum ;
     }
     else if (operation === 'subtract'){
        resultat = firstNum - secondNum ;
     }
     else if (operation === 'multiply'){
        resultat = firstNum * secondNum ;
     }
     else if (!secondNum){
        resultat = "second Number not found"
     }
     else if (!operation){
        resultat = firstNum + secondNum ;
     }
     console.log(resultat)
  }
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600




  function ageInTime(theAge) {
    let resultat ;
    let mouth ;
    let week ;
    let days;
    let hours ;
    let munute ;
    if ( theAge > 10 && theAge < 100){
        mouth = theAge * 12 ;
        week =  mouth * 4 ; 
        days = week * 7 ; 
        resultat = `${mouth} months / ${week} weeks / ${days} days`
    }else {
        resultat = "Age Out Of Range"    
    }
    console.log(resultat)
  }
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months




  function multiply(...numbers){
    let resultat = 0 ; 
    for ( let  i= 0 ; i < numbers.length ; i++ ){
          if ( typeof numbers[i] === 'number') {
            resultat = Math.floor( numbers[i - 1] )*Math.floor( numbers[i] )
         }          
      } console.log(resultat)
           
    }
    function multiply1(...numbers){
        let resultat = 0 ; 
        for ( let  i= 0 ; i < numbers.length ; i++ ){
                if (typeof numbers[i] === 'string'){
                    continue ;
                }
                else  {
                    resultat = parseInt(numbers[i - 1]) * parseInt(numbers[i])
                }
                   
          } console.log(resultat)
               
        }
multiply1(10, 20); // 200
multiply(4, 20); // 80
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

//!challinge arrow function 
/*let names = function(...numbers){

    return `${numbers}`
}*/
 let names  = (...numbers) => ` string [${numbers.join("];[")}]  => done `;


console.log(names("ousama" ,"mohamed", "kamel"))
  
let myNumbers = [20,50,10,60];

let calc= (one,two,...nums) => one + two + nums[0];
console.log(calc(10,myNumbers[0],myNumbers[1]))


// ! elzero arrow function 



function getDetails(zName, zAge, zCountry) {
    function namePattern() {
        let word = zName.split(" ");
        return `${word[0]} ${word[1][0].toUpperCase()}.`
    
    }
    namePattern();
    function ageWithMessage() {
       return `your age is ${parseInt(zAge)}`;
    }
    ageWithMessage();
    function countryTwoLetters() {
        return ` ${zCountry.slice(0,2).toUpperCase()}`            
    }
    countryTwoLetters()
    function fullDetails() { 
      return  `hallo ${namePattern()},  ${ageWithMessage()} , you live in${countryTwoLetters()}`;
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY



  let  itsMe = () =>  `Iam A Normal Function`;
  
  console.log(itsMe()); // Iam A Normal Function

  let  urlCreate = (protocol, web, tld)  => `${protocol}://www.${web}.${tld}`;
  
  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//! searsh Currying Function Technique 
 
function checker1(zName) {
    return function (status) {
      return function (salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }
  
  console.log(checker1("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker1("Ahmed")("Not Available")()); // Iam Not Avaialble

// ! to arrow function 

  let  checker= (zName) =>  (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    
  
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble



///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function specialMix(...data) {
    let result  = 0 ;
    for( let i = 0 ; i < data.length ; i++){
       if (isNaN(parseInt(data[i]))  === false){//!!!!!!!!!!!
            result +=parseInt(data[i])  ;   
      }
    }
      if (result === 0 ) {
        return  `all the strings`
      }
    return result;
  }
  
  console.log(specialMix(10, 20, 30)); // 60
 console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings



  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////////////
//!!!!!!!!!!!!!!!!!!!! maps function array 
//? video 72
let arar = [1,2,3,4,6];
let mynums = arar.map((element,index,array) => element+ element )
console.log(mynums);

function element(ele){
   return ele + ele
}

let mynums1= arar.map(element)
console.log(mynums1);

let swappedcases = 'elZERo';
let ignorenumbers = 'Elz123ro';


let sw = swappedcases
  .split("")
  .map(function(ele){
      return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase() ;
  })
  .join("");
console.log(sw)
//arrow function 
let sw1 = swappedcases.split("").map((ele) => ele === ele.toUpperCase() 
? ele.toLowerCase() : ele.toUpperCase()).join("")
console.log(sw1);

let sww = ignorenumbers.split("").map(function (ele){
  return isNaN(parseInt(ele)) ? ele : "" ;
}).join("")
console.log(sww);
// to arrow function 
let sww1 = ignorenumbers.split("").map( (ele) => isNaN(parseInt(ele)) ? ele : "" ).join("");
console.log(sww1)



//! filter array function 
//? video 74

let sentence = "I love Food code too playing Mush"

let letter4 = sentence.split(" ").filter(function(ele){
    return ele.length <= 4 ;
}).join(" ");
console.log(letter4)


//? with  filter and maps 


let mix1 = "A13BSd4" ;
//* filter numbers + multiple 
let nums = mix1.split("").filter(function(ele){
  return !isNaN(ele) ;
})
.map(function(ele){
  return  ele * ele ;
})
.join("")
console.log(nums)// 1916 


///! reduce function 
// video 76 
let removechars = ["j", "@" , "@" , "a" , "@" , "b"];
let remove = removechars.filter(function(ele){
  return  !(ele === "@") ;
}).reduce(function(acc,cureente){
  return `${acc}${cureente}`
})
console.log(remove);

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split(",")
.filter(function(ele){
  return isNaN(ele)  
})
.map(function(ele,index){
    return ele ==="_" ? ele =" " : ele; 
})
.reduce(function(acc,cureente){
  return `${acc}${cureente}`
}).slice(true,-isNaN(myString));
console.log(solution)


let myString1 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution1 = myString.split(",")
.filter((element) =>
 { return (isNaN(parseInt(element))) && (element !== ",");})
 .map((element, index, array)=>{if (element.length > (+(isNaN(","))))
  {return array[index]= array[index][+(!isNaN(","))];} 
  else {return element;} })
  .slice(!(isNaN("_")),length-isNaN(","), length-(isNaN("_")))
  .reduce((word, letter)=>{if (letter == "_")
  {return word += " ";} else {return word += letter;}});

console.log(solution1);


//!  !!!!!! elzero web p
//? sotution one  1111111111111111
let mix11 = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];


let re = mix11.map(function (ele){
  return  isNaN(parseInt(ele)) ? ele : "";
})
.reduce(function(acc, recurent){
  return `${acc}${recurent}`
})
// Elzero
console.log(re)

///!!!!! solution 2222222222

let myString12 = "EElllzzzzzzzeroo";

let en = myString12.split("").filter(function(ele,index,arrary){
  return !(arrary[index] == arrary[index+1]);
}).join("");

console.log(en);

//!!!!!!!!!!!!!! solution 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let res = myArray.join(",").split(",").reduce(function(acc,rucc){
  return `${acc}${rucc}`
})
console.log(em)
// !  solution 44444444444
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];


let em1 = numsAndStrings.filter(function(ele){
    return !(isNaN(ele))
}).map(function(ele){
  return -ele
})


console.log(em1)// [-1, -10, 10, 20, -5, -3]
///!  solution 555555555
let nums11 = [2, 12, 11, 5, 10, 1, 99];


let somme = nums11.reduce(function(acc,cureente){
      return (cureente % 2 == 0 ) ?   acc*cureente : acc+cureente;
},0)
console.log(somme)// 500




//! elzero 79 to 85

//// ??,,,,,,,,,,,,,,, 11111111111111111111111111,,,,,,,,,,,
let member ={
  name:"Elzero",
  age:38,
  country:"Egypt",
  fullDetails:function(){
    return `my name is ${this.name}, my age is ${this.age}, i live in ${this.country}`
  }
}
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//// ??,,,,,,,,,,,,,,, 2222222222222222222222,,,,,,,,,,,

let number = {}
number.userName="jamel"

console.log(number.userName); // "Method One"

let number1 ={
  username :"jamel"
}
let number11 = new Object() 
  number11.name ="kamel"
console.log(number1["username"]);
console.log(number11)
console.log(number.userName); // "Method Two"

let numbers1 = Object.create(number)
number1.name ="ahmed"
console.log(number1); // "Method Three"

// Method Four
// Create Your Object Here

//// ??,,,,,,,,,,,,,,, 333333333333333333333333333333 ,,,,,,,,,,,


let a1 = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject=Object.assign({a1},threeNums,twoNums)
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/


//// ??,,,,,,,,,,,,,,, 444444444444444444444444     ,,,,,,,,,,,

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length //!! lenght of nesded object 


for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${(Object.keys(myFavGames)[i])}`); //! take every object in nested object
  console.log(`The Publisher Is ${(Object.values(myFavGames)[i]).publisher}`);
  console.log(`The Price Is  ${(Object.values(myFavGames)[i]).price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${(Object.values(myFavGames)[i]).bestThree.one}`);
    console.log(`Second => ${(Object.values(myFavGames)[i]).bestThree.two}`);
    console.log(`Third => ${(Object.values(myFavGames)[i]).bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"



