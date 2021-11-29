//Elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Even-Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);

//Functions
function addTodo(event){
 event.preventDefault();

 //new div
 const todoDiv = document.createElement("div");
 todoDiv.classList.add("todo");
 

 //new list item
 const newTodo = document.createElement("li");
 newTodo.innerText=todoInput.value;
 newTodo.classList.add("todo-item");
 todoDiv.appendChild(newTodo);

 //check button
 const completedButton = document.createElement("button");
 completedButton.innerHTML='<i class="fas fa-check"></i>';
 completedButton.classList.add("complete-btn");
 todoDiv.appendChild(completedButton);
  
 //trash button
 const trashButton = document.createElement("button");
 trashButton.innerHTML='<i class="fas fa-trash"></i>';
 trashButton.classList.add("trash-btn");
 todoDiv.appendChild(trashButton);
 
 if(todoInput.value.length>0)
 {
  todoList.appendChild(todoDiv);
  todoInput.value="";
 }else{
     alert("Empty Item can not be added to the list!");
 }
}

function deleteCheck(event){
    const item=event.target;

    //Deleting am item
    if(item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("deleted");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
        
    }

    //Checking am item
    if(item.classList[0]==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}