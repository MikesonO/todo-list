import { capitalizeFirstLetter, resetSelectedInput } from "./helper-functions";
import { Project, projectList } from "../class/project";
import { dateFormat } from "./dataFormat";
import { resetInput } from "./helper-functions";




export const createTask = (() => {

  const tasks = document.querySelector("#task-list");

  const addTask = ()=>{
    //Gets Task Name Input
    const taskTitleInput = document.querySelector("[data-tModal-input='title']");
    const taskTitle = taskTitleInput.value;
    //Gets Task Date Input
    const taskDateInput = document.querySelector("[data-tModal-input='date']");
    const taskDate = dateFormat.getDate(taskDateInput.value);
    //Gets Task Priority Input
    const taskPriorityInput = document.querySelector("[data-tModal-input='priority']");
    const taskPriority = taskPriorityInput.value;
    //Gets Task Description Input
    const taskDescriptionInput = document.querySelector("[data-tModal-input='description']");
    const taskdescription = taskDescriptionInput.value;

    console.log(taskTitle);
    console.log(taskDate);
    console.log(taskPriority); 
    console.log(taskdescription); 

    appendTask(taskTitle, taskDate, taskPriority);
  }

  const appendTask = (taskTitle, taskDate, taskPriority) =>{

    const newTask = document.createElement("div");
    newTask.setAttribute("class","task");

    const circle = document.createElement("div");
    const circleAttributes = ["circle",`${taskPriority}`];
    circle.classList.add(...circleAttributes);

    const title = document.createElement("div");
    title.setAttribute("class","task-title");
    title.textContent = taskTitle;

    const date = document.createElement("div");
    date.setAttribute("class","date");
    date.textContent = taskDate;

    const priority = document.createElement("div");
    const priorityText = document.createElement("p");
    priorityText.textContent = capitalizeFirstLetter(taskPriority)
    const priorityAttributes = ["priority", `${taskPriority}`];
    priority.classList.add(...priorityAttributes);
    const fire = document.createElement("svg");
    const fireAttributes = ["fa-solid", "fa-fire"];
    fire.classList.add(...fireAttributes);
    priority.append(fire, priorityText)

    const editIcon = document.createElement("svg");
    const editIconAttributes = ["fa-solid", "fa-pen-to-square"];
    editIcon.classList.add(...editIconAttributes);
    
    const deleteIcon = document.createElement("svg");
    const deleteIconAttributes = ["fa-solid" ,"fa-trash"];
    deleteIcon.classList.add(...deleteIconAttributes);

    newTask.append(circle, title, date, priority, editIcon, deleteIcon);
    tasks.appendChild(newTask);
  }

  const resetTaskModal = ()=>{
    const taskTitleInput = document.querySelector("[data-tModal-input='title']");
    const taskDateInput = document.querySelector("[data-tModal-input='date']");
    const taskPriorityInput = document.querySelector("[data-tModal-input='priority']");
    const taskDescriptionInput = document.querySelector("[data-tModal-input='description']");

    resetInput(taskTitleInput);
    resetInput(taskDateInput);
    resetSelectedInput(taskPriorityInput);
    resetInput(taskDescriptionInput);
  }



  return{
    addTask,
    resetTaskModal
  }

})();