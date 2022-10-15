import { camelize, inputCheck, resetInput, capitalizeFirstLetter } from "./helper-functions";
import { Project, projectList } from "../class/project";
import { dateFormat } from "./dataFormat";




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

    inputCheck(taskTitleInput);
    // inputCheck(taskTitle, taskDate, taskPriority, taskdescription);
    // resetInput(taskTitle, taskDate, taskPriority, taskdescription);
    appendTask(taskTitle, taskDate, taskPriority);
  }

  const appendTask = (taskTitle, taskDate, taskPriority) =>{

    const newTask = document.createElement("div");
    newTask.setAttribute("class","task");

    const circle = document.createElement("div");
    circle.setAttribute("class", "circle");

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
   
    
    const ellipses = document.createElement("svg");
    const ellipsesAttributes = ["fa-solid" ,"fa-ellipsis-vertical"];
    ellipses.classList.add(...ellipsesAttributes);

    newTask.append(circle, title, date, priority, ellipses);
    tasks.appendChild(newTask);
  }



  return{
    addTask
  }

})();