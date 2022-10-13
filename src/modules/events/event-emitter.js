import { displayModals } from "./display-modal";
import { createProject } from "../functions/createProject";
import { enterKey } from "../functions/helper-functions";


export function eventEmitter() {
  const addProjectButton = document.querySelector("#addProject-btn");
  addProjectButton.addEventListener("click", displayModals.showProjectModal);

  const closeProjectButton = document.querySelector(".project-modal-close-btn");
  closeProjectButton.addEventListener('click', displayModals.hideProjectModal);

  const createProjectButton = document.querySelector("[data-modal-btn='add']");
  const projectNameInput = document.querySelector("[data-modal-input='project']");
  enterKey(projectNameInput, createProjectButton); //Allows Enter keypress for input
  createProjectButton.addEventListener("click", () => {
    createProject.addProject();
    displayModals.hideProjectModal();
  });

  document.getElementById("projects").addEventListener("click", (e)=>{
    if (e.target.classList.contains("delete-btn")){
      createProject.deleteProject(e);
    }
  });

   document.querySelector("[data='allProjects']").addEventListener("click", (e)=>{
    if (e.target.matches("[data='project']")){
      createProject.makeActive(e);
    }
  });

  const addTaskButton = document.querySelector("#addTask-btn");
  addTaskButton.addEventListener("click", displayModals.showTaskModal);

  const closeTaskButton = document.querySelector(".task-modal-close-btn");
  closeTaskButton.addEventListener('click', displayModals.hideTaskModal);


  
}