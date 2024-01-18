// scape  \ t3ml hadhi 
// \n
/* output */

  document.write("<h1>hallo </h2>")
  document.querySelector('h1').style.color='bleu'
  /** tnjem t2yet beha  li 2nser  **/
  ///* innerhtml hya li tektek
  ///*  wlo5ra t3yet li id 
   document.getElementById("nom_id").innerHTML="hallo";
   ///! onclick   ki y9res 3la  bottom ykten hki hallo 
   document.getElementById('id').onclick= function(){

    document.getElementById("nom_id").innerHTML="hallo";
   };
   // pour afiiche le resultat   
   // ou pour tester  les eureur 
   console.log("vrai");
   console.error("false")
   console.table( ["ousama","jamel","ahmed"]);
   console.log("jamel %cjalem " , "color :red")//% t7aded li t7eb tlawnhaa
   // alert ne utliser beaucoup
   alert("jamel");

  /* 
  Strring syntax + character espace sequences 
  \ ESpace + line Con tinue  \n*/
  console.log('tabarka  is  "beautiful"');
  console.log("tabarka  is  'beautiful'");
  console.log("tabarka  is  \"beautiful\"");
  console.log("tabarka \
  is \
  beautiful");
  console.log("tabarka\nis\nbeautiful")

// statement 
// variable
   var x=5;
   console.log(x);

   // number  string boolean undefined  null
   var n=5;
   var nm="jamel";
   var bn=true;
   console.log(typeof n);
   console.log(typeof mn);
   console.log(typeof bn);

   // array   
   var tab =[1,2,3];
   console.log(tab[0]);
   var myList = [
    ["Canned Beans", 3],
    ["Milk Galon", 1],
    ["Cereal", 2],
    ["Toilet Paper", 12],
    ["Sack of Rice", 1]
  ];
   //object 
   var tab1={
       name:'voiture',
       age:'15'
   };
   // t7eb tsel li name or (person["age"])
   console.log(tab1.name);
 
   // null est suprimier 
   tab1=null;
   //!! object est array ou object ou null
   //undefined
// var let const 
let a = "jamel";
let b = "hadil";
let c = "ahmed";
console.log(a +" "+ b +" "+ "\"\" "+ "\n" + c)
console.log(`${a} ${b} \n " " \\  ${c}`)

//operators 
    // arthematic operation + - * / % ++ **  -- +-
    // y = 3 x = 5 ==>  y % x = y 
    console.log(10 - "jamel");//NaN
    var x=3 
    x++;//4 post increment
    ++x;//5 pre increment
   console.log(x++)//10 mb3ed 
    //11
   console.log(++x);//12
   console.log(+"5") // to number 5
   console.log(+"ausama")//NaN
   console.log(+null)//0
   console.log(+true)//1
   console.log(+false)//0
   console.log(-"100");//-100

   // a3ml + tnjem tbdel chaine  li number
   // chof  vedio 20 mt3 masri
   var aa = "10" ;
   var bb = 20;
   var cc = true;
   console.log(a +  b + c );//1020true
   console.log(+a +  b + c  );//31

  

  //! number 
  // double precsion 
  console.log(1_000_000)// 1000000 // syntatic sugar "_"
  console.log(1e6) // 1000000 // e
  console.log(10 ** 6 ) //1000000 // **
  console.log(10 * 10 * 10 * 10 * 10 * 10) ///1000000 // with dicimal 
  console.log(1000000.0)//1000000 Number + bigInt
  console.log(Number.MAX_SAFE_INTEGER)//? max safe value 
  console.log(Number.MIN_VALUE) // Number min Value 
  console.log(Number.MAX_VALUE)// number max Value
  console.log(1.2e3)///1.2000
  console.log(1e-3 === 1 / 1000) // 0.001
  console.log( 0.1 + 0.2 == 0.3 ); // false
 

///! NUMBER METHODS
//? tostring() tofixed() parseInt() parseFloat() isInteger() isNaN()
console.log((100).toString());
//or
console.log(100..toString)
let num1 = 1.23456;
console.log( Math.round(num1 * 100) / 100 )// 1.23456 -> 123.456 -> 123 -> 1.23
console.log((100.55555.toFixed(2)));// 100.6 = b3ed  faslaa 0.5 orakber > ywli 1
console.log(parseInt("100"));// trja3 number 
console.log(parseInt("ja10"))// !NaN  3lh first letter mch r9em 
console.log(parseInt("10ja"))//! 10  
console.log(parseFloat("100.1"))//100.1 trja3 float
console.log(Number.isInteger("100"))//false
console.log(Number.isInteger(100.500))//flase
console.log(Number.isNaN("oussama"))//false
console.log(Number.isNaN("ousama" / 20))// true
console.log( isFinite("15") ); // true ==< conver number and return if is number
Object.is(a,b) // hya nesfeha a===b



///! math operation 
Math.round(99.1)//99 if 99.5 > = 1000
Math.ceil(99.2)//100 li max
Math.floor(99.9)//99 li min 
Math.min(1,2,3)//1
Math.max(2,2,5)//5
Math.pow(2,4)//16  2 9owa 4
Math.random()//r9em 3chwaa
Math.tranc(99.5)//tyni fslaa
 

//! string  methode

//? [acces with index, acces with charAt(),trim() ,lengh() , toUpperCase(), toLOwerCase() 
var str ="hello world";
var res = isNaN(str)// ! true 
var res=str[1]//e
var res=str.charAt(3)//l
var res= str.length //11
var res= str.trim();// tnahi espace mn 9dem wle tali ?? fi login
//? indexof (Value [mand], start [position ] 0 hya  postion mt3 caractere win )
var res=str.indexOf("llo");//3  indexof == number of start wkn moch mwjouda yrja3 -1
var res=str.indexOf('llo',4)//! ybda mn 3 yrja3 -1 3lh mfmch  
//? last indexof (Value [mand], start [opt] length)
var res=str.lastIndexOf("llo")//3 yhseb mn l5er 
var res=str.lastIndexOf("o") // yjblk a5er o blasteha  win honi hya 8
//? repeat  (times ) [ES6]
var res= str.repeat(2); 
//? slpit (seperator [opt] , limit [opt])  
var res=str.split("")// y9es caracteres kol li array
var res =str.split(" ")  // y9os klem mn espace  or  split[0]
// =hello  string to array  y3ni string feha  zouz klmet twli kil kelma fi array 
var res=str.split(" ",2) // zouz mrat brka 
var mom ="www.facebook.com?id=20";
var res1 =mom.split("?")//! */  t3tenha  li lien bch t5ou id b3ed ? == id=20;
/////////////////
//? ,  slice (start [mand], end [opt] not  include end)ybda  mn 0
var kaa="jamel issa"
var ka =kaa.slice(0,2);//ja //  (4,1) = l (-3) ssa 
//? substring (start [mand] ,end[opt] not include end) 
var ka= kaa.substring(2) //== mel issa ybda mn 1
var ka=kaa.substring(2 , 5)//== mel 
//! ki t3kes blyes yrja3hom 
var ka=kaa.substring(-10 , 6 ) // min 0 li 6 
var ka=kaa.substring(kaa.length-3, kaa.length - 2)   
///? subtr (start [mand] , charactere to extract) 
var ka=kaa.substr(0) ; //y5ou kol
var ka=kaa.substr(0 , 5) ; //jamel 
var ka=kaa.substr(-3 , 2)//ss

//? includes (value [mand] start [opt] default 0 [ES6] )
var ka=kaa.includes("jamel")// true
var ka=kaa.includes("jamel",6)// flase
//?  startWith (value [mand] start [opt] default 0 [ES6] )
var ka=kaa.startsWith("e")//true
var ka=kaa.startsWith("e",1)//flase
var ka=kaa.startsWith("jamel",0) //true hta  klma   
//? endWith (value [mand] start [opt] default full length [ES6] ) y3ni tbda  thseb mn whed
var ka=kaa.endsWith("a")//true
var ka=kaa.endsWith("el",5)//false
//?replace 
string.replace(searchValue, replaceValue)//


console.log( "Z".codePointAt(0) ); // 90
console.log(String.fromCodePoint(90))//Z
console.log("a".localeCompare("z")) // negatif y3ni loul akber positif y3ni thani akber


// https://www.youtube.com/watch?v=YFUVqq68sZU&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=20
   // assignment operation  = +=  -= **= *=  /= %=
    console.log( 10 == 12 )//flase  compare value  only 
    console.log( 10 === 10 ) // true compare value + type 

    console.log( 10 !== 10 )//true
    console.log("jamel"=== "isssaoui")//false
    console.log(typeof "jamel"=== typeof "isssaoui")//! true string = string 

//! logicial operation 
  //  && and // || or ! not



//! if conduction
  if (x==5){
    console.log("ok");
  }else if (x==6){
    console.log("kk");
  }else{
    console.log("jamel")
  }
  //?nested if 
  if(contry === "Contry"){
    if (student=== true){
      price-=20;
    }
    else if (student=== false){
      price -= 10;
    }
  }
  //?shrot  if   ==  condition ? if true : if false
    let code= 20 ;
   code === 20 ? console.log("nice") : console.log("bad") ;

   code ===20 
   ? console.log("fille")
   : code >= 30 && code <= 50
   ? console.log("man")
   : code > 50 
   ? console.log('old')
   : console.log("none");
   //* remarque
    /*logical or  || 
    --null + undefined + any falsy value kima 0 
    ama  nullish coalecing opereteur ??
    --null + undefined  
    */
    var  price = "0";
    console.log(`the price is ${price || 200 } `)// 200  0 hja  5yba
    console.log(`the prise is  ${price ?? 200}`)// trja3 0  
    
    
//!! switch
  switch(s){
    case 6 , 7 : // ou 
      console.log("no");
      break;
    case 7:
      console.log("no");
      break;
    default:
      console.log("no");
  }

//! array 
      var arr =["ahmed","kamel","babe" , [ "Marwan" , "ali "]] ;
      console.log(`Hollo ${arr[0]}`);//ahmed 
      console.log(`Hollo ${arr[0][1]}`);//h
      console.log(`hallo ${arr[4][1]}`)//ali
      console.log(`hallo ${arr[4][1][0]}`)//a fi ali
      //? njmou mndlou
      arr[0] = "jamel";
      arr[3] = "ahmd " // twli mch arry
      arr[3] = ["ok" , "bhy"];//ttdbel 
      console.log(Array.isArray(arr))//* true to cheket is  array or  not 
  //? lengh
      arr 
        //! array  methode   
        var arr =["ahmed","kamel","babe"];
        //?push tzed
        var res =arr.push("test"); // donne 4 // tzed 
         //? unshift   tzed mn loul 
        console.log(arr,res); // tdzed fi array
        //? shift  tnahi mn  loul 
        let first = arr.shift()// yhot  first feha  kamel
        // 3kes shift //* pop = tnahi  a5er 3nser fi array  
        //? lenght  taille   / concat  = jamek array  /
        //? indexof (searsh element , from index [opt]) 
         console.log(arr.indexOf("ahmed",2))//0
        //? lastindexof (searsh element , from index [opt])
         console.log(arr.lastIndexOf("ahmed", - 1))// ybda mn kamel
        //? include (valuetofind , from index [opt ] )
         console.log(arr.includes("ahmed"))// true
        //! remarque ki hja  moch mwjoud traj3 -1 
        console.log(arr.indexOf("ahmed"))//-1
        if (arr.indexOf("ahmed" === -1)){
          console.log("not found ")
        }
        //? sort (function [opt])
        console.log(arr.sort()) // erateb array
        //?reverve
        console.log(arr.reverse()) // y3kes array 
        console.log(arr.sort().reverse());
        // ?  slice ( start [opt], end not include end )
        //* slice()== all array 
        //* negative cound from end y7eb mn l4er 
        console.log(arr.slice(1,-1))//y5ou theni wy9es 3n a5er whed 
        //? slipe (start [obligatoire] ,deletecound [opt], the  item to [opt] )
        console.log(arr.splice(0,1,"kamel", "ahmed")) // yfsa5 ahmed yzed mn loul kamel w ahmed 
        //? concat (arrray , array)
        let myfriends = ["ahmed"];
        let mynewfriend = ["kamel"];
        let school = ["jamel"];
        let allfriends = myfriends.concat(mynewfriend , school , "fadi");
        console.log(allfriends);       
        //? join (seperateur)
        //array to string with seperateur if u want 
        console.log(allfriends.join())// yjm3hom wyhot bnthom vercule
        console.log(allfriends.join(" "))

        /// !! flat() array feha  brcha  thwelha  li array whda 
        
        //! remarque 
        const arr = [NaN];
        alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
        alert( arr.includes(NaN) );// true (correct)

//! loop  -for        
    let arr1 = ["A", "C", 1 , 2 , "X"];
    let arr2 = ["D", "E", "F", "Y"];
    let allArrs = [];

    for (let i = 0 ; i < arr1.length ; i++){
        if (typeof arr1[i] === "string" ){
          allArrs.push(arr1[i])
        }
    }
    console.log(allArrs);  
    // for  avansite
    let i = 0;
    for (;;){
      console.log(allArrs);
      i++;
      if ( i == allArrs.length ) break;
  }    
//? loop control break continue label

    //* break 
    for (let i = 0 ; i < arr1.length ; i++){
      if (typeof arr1[i] === "C" ){
        break;
      }
      console.log(arr1)//y7bes fi c
    }
    //* continue = n7eha wkamel 
    for (let i = 0 ; i < arr1.length ; i++){
      if (typeof arr1[i] === "number" ){
        continue;
      }
      console.log(arr1)//they dont care about number 
    }
    // label 

    mainloop: for (let i = 0 ; i < arr1.length ; i++){
        console.log(arr1[i]);
        nestedLoop: for (let j = 0 ; j < arr2.length ; j++){
              console.log(`-  ${arr2[i]}`)
              if (arr2[j] === 'E'){
                break nestedLoop ; // yhbes nestedLoop fi green
                break mainloop ; // ybes mainloop A -B
              }
        }
    }
        /*
          
          Products Practice
        */
        let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
        let colors = ["Red", "Green", "Blue"];
        let showCount = 3;

        document.write(`<h1>Show ${showCount} Products</h1>`);

        for (let i = 0; i < showCount; i++) {
          document.write(`<div>`);
          document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
          for (let j = 0; j < colors.length; j++) {
            document.write(`<p>${colors[j]}</p>`);
          }
          document.write(`<p>${colors.join(" | ")}</p>`);
          document.write(`</div>`);
        }
//! while  lzem s7e7a
        var m=0;
        //condition 
        while (m<5){
          
        console.log(m);
        //lzem n3mlha 
        m++;
        }

//!do  while  loop
  do {
    console.log(m++);   
  }
  while (m=5); 
//? t5dem mera whda hta kn 8lta
    do {
      console.log(i);
      m++;
    }while(false);
    console.log(m)    


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!function!!!!!!!!!!!!!!!!!!!!!!!!
      function log(x,y){
        console.log(x+y);
      }
      log(1,3);
      //* advence loop
      function generateYears(start, end, exclude) {
        for (let i = start; i <= end; i++) {
          if (i === exclude) {
            continue;
          }
          console.log(i);
        }
      }
      
      generateYears(1982, 2021, 2020);

      ///?return function
      /* automatic semecolon Insertion [] no line terminator return t7bbes code function*/ 

      function logn(){
        var x=2;
        var y=2;
        return x+y;
      }
      var nn =logn();  
      console.log(nn);

      //* interrupption
      function generateur(start,end){
        for(let i = start ; i <= end ; i++){
          if(i === 15 ){
            return 'interruption' // thbes fi 14   
          }
          console.log(i)
        }
      }
      generateur(10,20)

      //?????????? default  parametre value [ undefined]
      //* old strategies [condition + logical or]
      //*  age = age || "none"  or if (age === undefined) */ 
      //* es6 
      function personne(name,age = "unkown") {//
        return `hallo ${name} your age is ${age}`
      }
      personne("jamel") ;

      //??????? rest paramters function 
      //*  only one alowwed  and must be lest variable  */
      function calc(...numbers){//* y3mlk array yhot feha variable  kol mt3 function 
        let result ;
        for( let i = 0 ; i < numbers.length ; i++){
          result += numbers[i];
        }
        return `le somme is  ${result}`// dima  a5er hja 
      }
      console.log(calc(10,20,30,50));


      //????????? Anonymous function 
      let cal = function (num1,num2){
        return num1 + num2;
      }
      console.log(cal(10,20))

      //* function mtst3mlch b3ed mch lzem t3teha  esm 
      document.getElementById("show").onclick = function (){
        console.log("show")
      };
      // or 
      function show(){
        console.log("show");
      }
      document.getElementById("show").onclick = show();

      // *
      setTimeout(function(){
        console.log ('jamel')// b3ed 2 seconde t5dem function
      },2000)

      //??????????? function experessions
      var fnn=function okk(){ // tsmi bch i9lk problem wn 
        console.log("hsdjfhsfj");
      }
      fnn();
      // IIFE t5dem automatic 
      (function test(){  
        console.log("hsdjfhsfj");
      })();
      //?  Function Inside Function

      function sayMessage(fName, lName) {
        let message = `Hello`;
        // Nested Function
        function concatMsg() {//function wsat function 
          function getFullName() {
            return `${fName} ${lName}`;
          }
          return `${message} ${getFullName()}`;
        }
        return concatMsg();
      }
      console.log(sayMessage("Osama", "Mohamed"));

      //????????????????? arrow function 
      //one param 
      let num = ()=> 10
      // multi params or stat 
    /*let print = function(num1,num2){
        return num1 + num2;
      }*///*bi arrow 
      let print = (num1,num2) => num1 + num2 ; 
      console.log(print(10,20));

      //! scope 
      //*block scope [if ,switch , for ]
      var x = 10;
      if (10 === 10){
        let x = 50
        console.log(`from if block  ${x}`)// let hja  special mch kima var
         //var x = 50
      }
      console.log(`from global ${x}`)// hkk  ywali 50
      //* laxical scope
      // serach execution context and lexical environment
       //!!!!!!!!!! array function  !!!!!!!!!!!!!!!!!!!!!!!
      //! map  function 

      let arary = [1,2,3,4,6]
      // maps t5ou function wthisArg function feha value , index , array 
      //value li kol 3nser w index mt3ha  warray nfseha 
      //* maps t3ml condition w trja3 arrary kol wlzem true wfase
      let addid = arary.map(function(element,index,array){
          return element + element;
      },10)
      console.log(addid);
      // to arrow function 
      let addid1 = array.map((element)=> element+ element , 10  );
       
      // or  function
      function addid1 (ele){
        return ele + ele ;
      }
      let addit = array.map(addid1)
     // partique 
      let swappedcases = 'elZERo';
      let ignorenumbers = 'Elz123ro';
      //*///////////////////
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
      console.log(sw1);//*t3kes 
      ///////////////////////////////////////
      let sww = ignorenumbers.split("").map(function (ele){
        return isNaN(parseInt(ele)) ? ele : "" ;
      }).join("")
      console.log(sww);
      // to arrow function 
      let sww1 = ignorenumbers.split("").map( (ele) => isNaN(parseInt(ele)) ? ele : "" ).join("");
      console.log(sww1)//* elzero

      //!!!!!!!!!!!!!!!!! filter  function 
      //* nfs chy kima  map ama  ki condition yrja3 kn hjet s7a7 kn true ama map zouz 
       let name1 = ["hamed", "ahmed", "jamel"]
       let nameA = name1.filter(function(ele){
          return ele.startsWith('a') 
       });
       console.log(nameA);

      //!!!!!!!!!!!!!!!!!! reduse function 
      let nn = [10,20,15,30];
      //Accumulator  howa  3nser loul 
      //current howa thani 3nser 
      //index howa index mt3 curent 
      // reduce 
      let aa = nn.reduse(function(acc , current ,index,array){
          return acc + current;
      },5);// ywali how  acc moch  10 twli current w index mt3ha  0 
      console.log(aa)// 80 
        //*exemple in tratce js
      //!!!!!!!!!!!!!!  forEash  feha  element, index , array 
      // mtrj3ech return == undefined
      // breal will not break the loop
      var myHonnies = ["football", "gaming", "reading"];
      var list = document.getElementById("list")
        myHonnies.forEach(function (items){
            list.innerHTML += "<li>" + items + "</li>"
            console.log(items)
        })



    
  //!!!!!!!!!!!!!!!!!!!!!!!!!!      object     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        /* object */
      var car ={
        "name":"bwm",
        year :2014 ,
        sayhallo:function(){
          return `hallo`
        }
      };
      let aa = "year"
      // not notation vs brakect notation 
      console.log( car["name"])
      console.log(car.sayhallo())
      console.log(car[aa])// 2014
      // car.name wle  car["name"]

         // *- Nested Object And Trainings
  
      let available = true;

      let user = {
        name: "Osama",
        age: 38,
        skills: ["HTML", "CSS", "JS"],
        available: false,
        addresses: {
          ksa: "Riyadh",
          egypt: {
            one: "Cairo",
            two: "Giza",
          },
        },
        checkAv: function () {
          if (user.available === true) {
            return `Free For Work`;
          } else {
            return `Not Free`;
          }
        },
      };
      console.log(user.skills.join(" | "));
      console.log(user.skills[2]); // Access With Index
      console.log(user.addresses.ksa);
      console.log(user.addresses.egypt.one);
      console.log(user["addresses"].egypt.one);
      console.log(user["addresses"]["egypt"]);
      console.log(user["addresses"]["egypt"]["one"]);

      console.log(user.checkAv());

      //*****create object with   using new  Object()
      var book = new Object() // nfs chy = {}

      book.name="jamel" // ywli jamel 
      book.year=1548;
      console.log(book["name"]);

      /// *******  this  keyword *******///
      let user1 = {
        age: 38,
        ageInDays: function () {
          return this.age * 365;
        },
      };
      console.log(user.age);
      console.log(user.ageInDays());

      //!! search about use strict // strict mode 

      //**** object create

            ///! object methode
           //! - Create Object With Create Method
          
          let user = {
            age: 20,
            doubleAge: function () {
              return this.age * 2;/// oject li inti feh this 
            },
          };

          console.log(user);
          console.log(user.age);
          console.log(user.doubleAge());

          let obj = Object.create({});

          obj.a = 100;

          console.log(obj);//a = 100

          let copyObj = Object.create(user);// prototype

          copyObj.age = 50;

          console.log(copyObj);
          console.log(copyObj.age);
          console.log(copyObj.doubleAge());
          ///
          const person1 = {
            name: '',
            age: 0,
            greet() {
              console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
            }
          };
          
          const john = Object.create(person1);//YARETH MENOU 
          john.name = 'John';
          john.age = 30;
          john.greet(); // "Hello, my name is John and I am 30 years old."
          


        //! Create Object With Assign Method
        //*tjem bh  tajma3  zouz object 
        // * structuredClone bch tnahi rbet bnethom
        const person2 = {
          name: 'John',
          age: 30
        };
        
        const details = {
          occupation: 'Engineer',
          gender: 'Male'
        };
        
        const johnDetails = Object.assign({}, person2, details);
        
        console.log(johnDetails);
        // { name: 'John', age: 30, occupation: 'Engineer', gender: 'Male' }
        

        let obj1 = {
          prop1: 1,//! kn kef kef y5ou loula 
          meth1: function () {
            return this.prop1;
          },
        };

        let obj2 = {
          prop2: 2,
          meth2: function () {
            return this.prop2;
          },
        };

        let targetObject = {
          prop1: 100,
          prop3: 3,
        };

        let finalObject = Object.assign(targetObject, obj1, obj2);

        finalObject.prop1 = 200;
        finalObject.prop4 = 4;

        console.log(finalObject);///

        let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

        console.log(newObject);
          //!! Object Keys = Returns an array of the keys of an object.
        const myObject = { 
          a: 1, 
          b: 2, 
          c: 3 
        };
        const keysArray = Object.keys(myObject); // ['a', 'b', 'c']
        
        //! OBject values  == Returns an array of the values of an object.
        const myObject1 = { 
          a: 1, 
          b: 2, 
          c: 3 
        };
        const valuesArray = Object.values(myObject1); // [1, 2, 3]
        //! Object.entries(): Returns an array of arrays, 
        //! where each sub-array contains a key-value pair of the object.
        const myObject2 = { 
          a: 1, 
          b: 2, 
          c: 3 
        };
        const entriesArray = Object.entries(myObject2); // [['a', 1], ['b', 2],['c', 3]]
       //! Object.hasOwnProperty(): test eda endeta property hki wle trja3 false wle true
      //? Returns a boolean indicating whether an object has the specified property as its own property  (not inherited from its prototype chain).
        const myObject22 = { 
          a: 1, 
          b: 2, 
          c: 3 
        };
        console.log(myObject.hasOwnProperty('a')); // true
        console.log(myObject22.hasOwnProperty('toString')); // false


        //! REMARQUE  zed a9ra 3laa Object methode
        
    





        //! symbole
        let globalSymbol = Symbol.for("name");
        alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
        let sim = Symbol("a")
        let users= {}
         users[a] = "jamel"
         const jaaa = Object.getOwnPropertySymbols(user)
         console.log(jaaa.length)//1
         console.log(jaaa[0])//jamel

         //! --------------   iterotor--------------
         /* iterable => object has symbole eterator 
         iterateur
           object with interface designed for iteration 
           all iterators hes next() medthode that return result object 
           the  result object has two props
           [1] value the  nest vakue
           [2] done => boolean  if the  nest value  exict or no      
         
         */
           let myname = "jamel"
           let arr = [1,2,3]
           let aaa ={jamel : "jame",ahmed :"k"}
           
           console.log(typeof(myname[Symbol.iterator]))//fucntion
           
           let myiterator = myname[Symbol.iterator]();//string interator
           console.log(myiterator.next())// value j and done false
           console.log(myiterator.next())
           console.log(myiterator.next())
           console.log(myiterator.next())
           console.log(myiterator.next())
           console.log(myiterator.next())// value indefined and done true kml



           //! iterator  of object
           let object1 = {
            name : "jamel",
            lastname :"hamed",
            [Symbol.iterator](){
              let index = 0;
              let property = Object.keys(this)
              return{
                next(){
                  return{
                    value : object1[property[index]],// object.name[1]//a
                   done : index++ === property.length
                  }
                }
              }
            }
          }
          
          for ( let item of object1){
            console.log(item)
          }

          

      //events 
// click , double click ,moussmove , mouseleave, mousseenter = hover
var btn  = document.getElementById("g");
var div  = document.getElementById("demo");
function action(){
  div.innerHTML="code";
};
btn.onmouseleave = action; /* m5er a9wen  y3ni reference */

// keybeard events keypress    mb3ed , keydown w9et t9ser t5dem , keyup mb3ed tenahi   
var inputDom =document.getElementById("input");
inputDom.onkeyup=function(){
  console.log("test");
}
//// this better 
inputDom.addEventListener('keyup',function(){ /* event mger on */
  console.log("test");
}
);
// better 
function onclicka(){
  console.log("jamel");
}
inputDom.addEventListener('keyup',onclicka);

// loead  window 
window.onload=function(){
 alert("kjghg");
}
 
// simple cart app  
var allitems = document.querySelectorAll(".list li "); /*  tjebli data kol wththa fi data array */
var content = document.querySelector(".h2f"); // id or class or  3sner  nesting 
var btn =document.querySelector("#addtocart ");
var totalprice =0;
allitems.forEach(function(item){
   item.onclick=function(){
        totalprice +=parseInt(item.getAttribute("price")); // string to number 
        content.innerHTML += item.textContent+ " " ; //tjeb text 
        
      
        if (context.innerHTML != ""){
          btn.style.display="block"  /// tdhher block 
      }
   };
});
btn.onclick=function(){
  console.log(totalprice);
}


// json 
 data.json // kol bin zouz cote name * [ {"name":"jamel","age"=20   }]
// mn3mlouch fi json function a date undefined
 var str =JSON.stringify(obg);   // object to string
 var str =JSON.parse(obg);  // string to object  


 
//ajax  
/*
steps 
*/
function loadData(){
   var xhttp = new XMLHttpRequest(); //  object xmlhttprequest tb3ef 
xhttp.onreadystatechange =function(){   
  console.log(this.readyState); 
    // onreadystatechange  kol mt5  stage 3ndha 5 mrahel    statue 200 => ok 404 not found
    if (this.readyState==4 && this.status==200){
        console.log(JSON.stringify.this.responseText);//json. bch twel data li object
    }
  };
  // asynchronous true == mtsnes & synchronous false  nestna 
  xhttp.open("GET","http://jsonplaceholder.typicode.com",true);/* 3 methode   */
  xhttp.send();
}
loadData();

///////////// DOM 

 
 // style  bch t3ml hja bi css
  var  heading =getElementById("demo");
  heading.style.fontSize="20px";// lzem t3ml majuscule li theni wls9en feha 
 
  //getElementbyClassName
  var call=document.getElementsByClassName("desc");
  console.log(call[1].getAttribute("class"));// tjeb donner 
  call[1].setAttribute("title","ay hja");// tekteb
  console.log(cls[1]);
 
  //getElementbyTagName
  var tag=document.getElementsByTagName("p");
  tag[1].textContent("test");
  
  // queryselector  m3a t3ref li id  wla class attribue kima css
  document.querySelector(".class");// yjeb awel whda 
  
  //style element 
  pr[0].style.color="green";

  //traverssing 
  var btn=document.querySelector("input[type=text]");
  btn.value="code"; // change input 
  // parentNode or parentelement  // childNode //firstChild firstelement
  console.log(btn.parentNode);
  console.log(btn.children);// ts3ml  children  5er  mn childNodes 
  // firstChild , firstElementChild / lestChild lastElementChild
  // nextSibling nextElementSibling  == a5 li b3dou 
  //Previous previeusElement   == li 9blou 

  // creating 
  // createElement  createTextNode  addclass addid  appand insert
  var div=document.createElement("div");
  div.id="myid";
  div.className="myClass";// or 
  div.setAttribute('id',"myId");// this better 
  console.log(div);
  // createTextNode t7eb tzed hja fi div 
  var text = document.createTextNode("my name");
  div.appendChild(text);//yhtou d5el 
  //insert 
  var ct =document.querySelector(".desc");
  var span=document.querySelector("span");
  ct.insertBefore(text,span);// inert text 9bal span 
 

  //event 
  //addeeventListener
  function testcode(e){
    console.log("js code ");
  }
  var btn=document.getElementById("btn");
  btn.addEventListener("click", testcode); // t5ou event ww esm fonction li t3ml feha 
  //clientX  thseb espace li t9res inti feh fi botton   min web page 
  // offsetX mn 3nser 
  // !!!!!!!!!! mouse event
  // mousedown hya click 
  // mouseup w9et tchel tetha
  // mouseenter  hya nfs hovor  whya nfs mouseover  ama mmouset5dem m3a pere w fille
  // mousseleave w9et t5rej mn pere   mousseout  w9et t5rej mn pere wfille
  //mousemove tb9a t5dem ki conteur
  //keydown w9et inti t9res keyup w9et tchel li input hadhom
  //keypress nfs keydown
  //focus w9et t9res li input 
  //blur w9et t5el 
  //cut ===> ki t3ml tkteb cut  // paste
  //input li cat w paste
  //change ==> m3a select 
  //submit 
  var form =document.querySelector("form");
  form.addEventListener("submit",inputFun);
  function inputFun(e){
    e.preventDefault(e);// bch mt3mlch reload  y3ni bch t7bes hja 
    
    content.log(e.type);
  }
  
  

