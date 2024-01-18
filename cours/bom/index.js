
let text = document.querySelector(".input")

let submit = document.querySelector(".submit")

let result = document.querySelector(".result")


let task = []


if (window.localStorage.getItem("task")){
    task = JSON.parse(window.localStorage.getItem("task"))
}

getTaskfromLocalStorage()
// no form reflesh 
document.forms[0].onsubmit = function(e){
    e.preventDefault()
}

// sumbit 
submit.onclick = function(){
    if (text.value !== ""){
        addTastToArray(text.value)
    }
}

function addTastToArray(textvalue){
    // create object 
    let TaskObject = {
        id : Date.now(),
        value : textvalue
    }
    // add  object to array 
    task.push(TaskObject)
    // create element task 
    createElemntTask(task)
    // add elements to localstorage 
    addTaskTOLocalStorage(task)  
}


function createElemntTask(task){
    result.innerHTML =""
    task.forEach((element)=>{
        let div = document.createElement("div")
        div.classList ="task"
        div.setAttribute("data:id",element.id)
        div.append(document.createTextNode(element.value))
        // del 
        let del = document.createElement("button")
        del.classList ="del"
        del.textContent= "del";
        div.appendChild(del)
        result.appendChild(div)
    })
}

function addTaskTOLocalStorage(task){
    window.localStorage.setItem("task", JSON.stringify(task))
}

function getTaskfromLocalStorage(){
    let data = window.localStorage.getItem("task")
    if (data){
        let taks = JSON.parse(data);
        createElemntTask(taks)
        
    }
}

result.addEventListener("click", (e)=>{
    if (e.target.classList.contains("del")){
        e.target.parentElement.remove("del")
        deleteitem(e.target.parentElement.getAttribute("data:id"))
    }
})

function deleteitem (element){
    task = task.filter((ele)=> ele.id != element )
    addTaskTOLocalStorage(task)
}










