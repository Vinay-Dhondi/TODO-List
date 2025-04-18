const InputBox = document.querySelector("#inputBox");
console.log(InputBox)
const taskList = document.querySelector("#taskList");
const addBtn = document.querySelector(".addBtn")


addBtn.addEventListener ("click", () =>{
        addTask()
})

function addTask() {
    if (InputBox.value ==""){
        alert ("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value ="";
    saveData()
}

taskList.addEventListener("click", (e)=> {
    if(e.target.tagName ==="LI"){ 
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName==="SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
};

function showTask() {
    taskList.innerHTML = localStorage.getItem("data")
};
M8L
showTask();
