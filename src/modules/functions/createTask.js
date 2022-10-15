import { camelize, inputCheck,resetInput } from "./helper-functions";
import { Project, projectList } from "../class/project";



export const createTask = (() => {

  const addTask = ()=>{
    const taskNameInput = document.querySelector("[data-tModal-input='title']");
    const taskName = taskNameInput.value;
    const taskDateInput = document.querySelector("[data-tModal-input='date']");
    const taskDate = taskDateInput.value;
    const taskPriorityInput = document.querySelector("[data-tModal-input='priority']");
    const taskPriority = taskPriorityInput.value;
    const taskDescriptionInput = document.querySelector("[data-tModal-input='description']");
    const taskdescription = taskDescriptionInput.value;
    console.log(taskName); //Done
    console.log(taskDate); //Done
    console.log(taskPriority); //Done
    console.log(taskdescription); //Done

  }




  return{
    addTask
  }

})();