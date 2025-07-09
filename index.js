
//need to write js to assign the user's string (written into an input box) into the h1 <id> with an update button 

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){ //function is to alert user to fill in the blank space if not filled
  const task = inputBox.value.trim();
    if (!task) {
    alert("Please write down a task")
    return;
        }
    const li = document.createElement("li");
   
    li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
     </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;

  listContainer.appendChild(li);
  inputBox.value = "";
}
//creates new vars for our elements aka buttons 
const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");
//this is to show a "completed"
checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
  });

/*li.innerHTML= `
    <label>
        <input type="checkbox">  /
        <span>${task}</span>  
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;
    //creates checkbox
    //this is the placeholder for the task content
listContainer.appendChild(li); //this will add a newly created list specified by listcontainer 
*/

/*let toDoList = []
function addToList() {
    let userInput = document.getElementById("userInput").value;
    toDoList = toDoList.push(userInput);
    return toDoList
    console.log(toDoList)
}

function removeFromList() { //when trying to remove an item from the list, use indexOf on the ToDoList followed by splice toDoList.splice(index, 1,);
    let deleteTask = "";    //whatever the string of the line with the X is
    let deleteIndex = toDoList.indexOf(deleteTask);
    toDoList = toDoList.splice(deleteIndex, 1);
}
*/
//extra code below


//let completed = "the amount of entries that have been crossed out"
//let uncompleted = toDoList.length - Completed


