import { camelize, inputCheck,resetInput } from "./helper-functions";
import { task } from "./tasks";

export const project = (() => {

  //List of Projects
  let projectList = [];

  //Project Class
  class Project{
    constructor(name, id){
      this.name = name;
      this.id = id;
      this.tasks = [];
    }
  }

  const projects = document.getElementById("projects");

  //Fucntions
  const createProject = (title, id) =>{
    const newProject = new Project(title, id);
    projectList.push(newProject);
  }

  const addProject = () =>{
    const projectNameInput = document.querySelector("[data-pModal-input='project']");
    const projectName = projectNameInput.value;
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


    createProject(name,`${camelize(name)}`);
    console.log(projectList);
    

    projects.appendChild(newProject);
  }

  const deleteProject = (event)=>{
    const inbox = document.querySelector("[data='project']");
    const taskView = document.querySelector("#task-view");
    event.target.parentElement.remove();
    inbox.classList.add("active");
    taskView.setAttribute("data-selected-project", `${inbox.id}`);
    if (projects.childNodes.length === 0){
      projects.classList.remove("show");
    } 
  }


  const makeActive = (event) =>{
    const allProjects = document.querySelector("[data='allProjects']");
    const taskView = document.querySelector("#task-view");
    const currentProject = event.target.id;
    let checkProjects = allProjects.querySelectorAll(".active");

    if (checkProjects.length !== 0){
      checkProjects.forEach(project =>{
        if(project.classList.contains("active")){
          project.classList.remove("active");
          event.target.classList.add("active");
          taskView.setAttribute("data-selected-project", `${currentProject}`)
          clearProject();
      }});
    } else {
        event.target.classList.add("active");
    }};

    const clearProject = () =>{
        const projectTitle = document.querySelector("#title");
        const projectTodos = document.querySelector("#task-list");
        projectTitle.textContent = "";
        projectTodos.textContent = "";
      }

    
  


  return{
    addProject,
    deleteProject,
    makeActive
  }

})();