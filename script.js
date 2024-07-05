
const input = document.querySelector("#inp");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#list-container");

addBtn.addEventListener("click", ()=>{
    if(input.value === ""){
        alert("You have to write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
})

list.addEventListener("click", (e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTasks(){
    list.innerHTML = localStorage.getItem("data");
}

showTasks();