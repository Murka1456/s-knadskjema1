const addTodo = document.querySelector("#addTodo");
addTodo.addEventListener("click",function(event)){
  Event.preventDefault();
  console.log("Knappen er trykket !");
}
const kjønn = document.querySelector("#kjønn");
kjønn.addEventListener("velg", function(event)){
  console.log("kjønn valgt")
};

const userInput = document.querySelector("#userInput").ariaValueMax;
console.log(userInput)
const todoList = document.createElement("li");
todoItem.textContent = userInput;
todoList.appendChild(todoItem);