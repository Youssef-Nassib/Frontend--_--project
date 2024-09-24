const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value == ''){
        alert("LoL you didn't write your task what you gonna add!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; //li.innerhtml means the text inside the var list
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ''; //this to clear the input box after adding a task
    saveTask();

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();//to save the checked
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();// to save this
    }
}, false);

/* for saving list data*/
function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");   
}
showTask();

//console.log(localStorage);