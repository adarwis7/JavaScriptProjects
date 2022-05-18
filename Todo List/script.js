const form = document.getElementById("form"); 
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit",(e)=>{ //created an event to add todos to the list
    e.preventDefault();

    const todoText = input.value; //get the input value from the user

    if(todoText){ 
        const todoEl  = document.createElement("li"); //create a new list elemnt
        todoEl.innerText = todoText;
        todoEl.addEventListener("click",()=>{ //event to mark a todo as completed
            todoEl.classList.toggle("completed");
          
        })
        todoEl.addEventListener("dblclick",()=>{ //event to remove the todo from the list
            e.preventDefault();
            todoEl.remove();



        })
        todos.appendChild(todoEl); //add the text to the list elemnt created (last list elemnt)
        input.value = ""; //reset the input space for a new todo


       

    }


})
// function updateLS(){
//     const todosEl = document.querySelectorAll("li");
//     const todos = [];
//     todosEl.forEach((todoEl) => {
//         todos.push({
//             text: todoEl.innerText,
//             completed: todoEl.classList.contains("completes")
//         });
//     });
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

