
import {addProjectModal} from "./display-modal";
import {createProject} from "../functions/createProject";

export function eventEmitter(){
  const addProjectButton = document.querySelector("#addProject-btn");
  addProjectButton.addEventListener("click", addProjectModal.show);

  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener('click', addProjectModal.hide);
  
  const  createProjectButton = document.querySelector("[data-modal-btn='add']");
  createProjectButton.addEventListener("click", ()=>{
    createProject.addProject();
    addProjectModal.hide();
  });

 
}

