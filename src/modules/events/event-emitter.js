import { displayModals } from "./display-modal";
import { project } from "../functions/projects";
import { task } from "../functions/tasks";
import { projectList } from "../classes/projectClass";
import { enterKey } from "../functions/helper-functions";
import { inputCheck, resetInput } from "../functions/helper-functions";
import { taskControls } from "./task-controls";



export function eventEmitter() {
  //Add Project Button
  const addProjectButton = document.querySelector("#addProject-btn");
  addProjectButton.addEventListener("click", displayModals.showProjectModal);

  //Close Project Modal
  const closeProjectButton = document.querySelector(".pModal-close-btn");
  closeProjectButton.addEventListener('click', ()=>{
    resetInput(projectNameInput);
    displayModals.hideProjectModal();
  });

  //Create Project Button
  const createProjectButton = document.querySelector("[data-pModal-btn='add']");
  const projectNameInput = document.querySelector("[data-pModal-input='project']");
  enterKey(projectNameInput, createProjectButton); //Allows Enter keypress for input
  createProjectButton.addEventListener("click", () => {
    if ( inputCheck(projectNameInput) == false ||
    project.projectValidation(projectNameInput.value, projectList) == false){
      resetInput(projectNameInput);
      return
    } else {
    project.addProject();
    displayModals.hideProjectModal();
    resetInput(projectNameInput);
    }
  });

  //Delete Project Button
  document.getElementById("projects").addEventListener("click", (e)=>{
    if (e.target.classList.contains("delete-btn")){
      project.deleteProject(e.target);
    }
  });

  //Makes Selected Project Active
   document.querySelector("[data='allProjects']").addEventListener("click", (e)=>{
    if (e.target.matches("[data='project']")){
      project.makeActive(e.target);
    }
  });

  //Add Task Button
  const addTaskButton = document.querySelector("#addTask-btn");
  addTaskButton.addEventListener("click", displayModals.showTaskModal);


  //Close Task Modal 
  const closeTaskButton = document.querySelector(".tModal-close-btn");
  closeTaskButton.addEventListener('click', () =>{
    task.resetTaskModal();
    displayModals.hideTaskModal();
  });

  //Create Task Button
  const createTaskButton = document.querySelector("[data-tModal-btn='add']");
  const taskNameInput = document.querySelector("[data-tModal-input='title']");
  enterKey(taskNameInput, createTaskButton);
  createTaskButton.addEventListener("click", () => {
    if ( inputCheck(taskNameInput) == false ||
    task.taskValidation(taskNameInput.value) == false){
      resetInput(taskNameInput);
      return
    } else {
    task.addTask();
    displayModals.hideTaskModal();
    task.resetTaskModal();
    }
  });

  //Edit Task Button
  const editButton = document.querySelector("[data-tModal-btn='edit']");
  if (editButton) { editButton.addEventListener("click", ()=>{
    const editTask = document.querySelector(".tModal-bottom");
    const taskProject = editTask.dataset.project;
    const taskTitle = editTask.dataset.title;
    task.editTask(taskProject, taskTitle);
    task.resetTaskModal();
  }); }

  //Task Controls - View, Edit and Delete
  taskControls.controls();
  
  //Displays Inbox tasks when page is loaded
  const inbox = document.getElementById("inbox");
  inbox.click();
}