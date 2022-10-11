import {camelize, inputCheck,resetInput} from "./helper-functions";
export const createProject = (() => {

  const addProject = () =>{
    const projectNameInput = document.querySelector("[data-modal-input='project']");
    const projectName = projectNameInput.value;
    console.log(projectName);
    inputCheck(projectNameInput);
    resetInput(projectNameInput);
    appendProject(projectName);
  }

  const appendProject = (name) =>{
    const projects = document.getElementById("projects");
    projects.classList.add("show");

    const newProject = document.createElement("div"); //Creates New Project div
    newProject.setAttribute("class","left-rows");
    newProject.setAttribute("id",`${camelize(name)}`);

    const newProjectName = document.createElement("p"); //Display Project Name
    newProjectName.textContent= `${name}`;

    const deleteBtn = document.createElement("i"); //Creates Delete Button
    let deleteBtnClasses = ["delete", "fa-solid", "fa-trash"];
    deleteBtn.classList.add(...deleteBtnClasses);

    newProject.append(newProjectName, deleteBtn);

    

    projects.appendChild(newProject);
  }

  


  return{
    addProject,
    appendProject
  }

})();