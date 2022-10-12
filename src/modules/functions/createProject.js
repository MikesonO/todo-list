import { camelize, inputCheck,resetInput } from "./helper-functions";
import { Project, projectList } from "../class/project";

export const createProject = (() => {

  const projects = document.getElementById("projects");

  const addProject = () =>{
    const projectNameInput = document.querySelector("[data-modal-input='project']");
    const projectName = projectNameInput.value;
    inputCheck(projectNameInput);
    resetInput(projectNameInput);
    appendProject(projectName);
  }

  const appendProject = (name) =>{
    projects.classList.add("show");

    const newProject = document.createElement("div"); //Creates New Project div
    newProject.setAttribute("class","left-rows");
    newProject.setAttribute("data","project")
    newProject.setAttribute("id",`${camelize(name)}`);

    const newProjectName = document.createElement("p"); //Display Project Name
    newProjectName.textContent= `${name}`;

    const deleteBtn = document.createElement("button"); //Creates Delete Button
    const deleteIcon = document.createElement("i");
    let deleteIconClasses = ["delete-icon", "fa-solid", "fa-trash"];
    deleteIcon.classList.add(...deleteIconClasses);
    deleteBtn.setAttribute("class","delete-btn")
    deleteBtn.appendChild(deleteIcon);

    newProject.append(newProjectName, deleteBtn);

    const project = new Project(name,`${camelize(name)}`);
    project.addProjects(project);
    console.log(projectList);

    projects.appendChild(newProject);
  }

  const deleteProject = ()=>{
    console.log("Working!");
  }

  
  


  return{
    addProject,
    appendProject,
    deleteProject
  }

})();