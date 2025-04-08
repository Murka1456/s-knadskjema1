
// /const todoItem = document.createElement("li");
todoItem.textContent = userInput;
todoList.appendChild(todoItem);

const gender = document.querySelector("#gender").value;
console.log(gender)
// gender.addEventListener("click", function(){
//   console.log("kjønn valgt")
// })

// const userInput = document.querySelector("#userInput").ariaValueMax;
// console.log(userInput)

// /function hentSvar() {


const addTodo = document.querySelector("#addTodo");
addTodo.addEventListener("click",function(event) {
  event.preventDefault();
  console.log("Knappen er trykket !");

  // All const som henter fra HTML her
})