import { camelize, inputCheck,resetInput } from "./helper-functions";
import { Project, projectList } from "../class/project";
import { dateFormat } from "./dataFormat";




export const createTask = (() => {

  const addTask = ()=>{
    //Gets Task Name Input
    const taskNameInput = document.querySelector("[data-tModal-input='title']");
    const taskName = taskNameInput.value;
    //Gets Task Date Input
    const taskDateInput = document.querySelector("[data-tModal-input='date']");
    const taskDate = dateFormat.getDate(taskDateInput.value);
    //Gets Task Priority Input
    const taskPriorityInput = document.querySelector("[data-tModal-input='priority']");
    const taskPriority = taskPriorityInput.value;
    //Gets Task Description Input
    const taskDescriptionInput = document.querySelector("[data-tModal-input='description']");
    const taskdescription = taskDescriptionInput.value;
    
    console.log(taskName);
    console.log(taskDate);
    console.log(taskPriority); 
    console.log(taskdescription); 

  }




  return{
    addTask
  }

})();