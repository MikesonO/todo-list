
import {addProjectModal} from "./display-modal";
import {createProject} from "../functions/createProject";
import { enterKey } from "../functions/helper-functions";

export function eventEmitter(){
  const addProjectButton = document.querySelector("#addProject-btn");
  addProjectButton.addEventListener("click", addProjectModal.show);

  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener('click', addProjectModal.hide);
  
  const  createProjectButton = document.querySelector("[data-modal-btn='add']");
  const projectNameInput = document.querySelector("[data-modal-input='project']");
  enterKey(projectNameInput, createProjectButton); //Allows Enter keypress for input
  createProjectButton.addEventListener("click", ()=>{
    createProject.addProject();
    addProjectModal.hide();
  });

 
}

