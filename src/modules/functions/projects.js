import { camelize, inputCheck,resetInput } from "./helper-functions";
import { Project, projectList } from "../classes/projectClass";

export const project = (() => {

  const projects = document.getElementById("projects");

  //Fucntions
  const createProject = (title, id) =>{
    const newProject = new Project(title, id);
    projectList.push(newProject);
    console.log(projectList[0].id)

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

  //Deletes project from view and returns to Inbox
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

  //Makes project active upon selection
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
          taskView.setAttribute("data-selected-project", `${currentProject}`);
          removeButton(currentProject);
          renderProject();
      }});
    } else {
        event.target.classList.add("active");
    }};


    const renderProject = () =>{
      clearProjectTasks();
      const taskId = document.querySelector("#task-view").getAttribute("data-selected-project");
      const taskName = document.getElementById(`${taskId}`).textContent;
      const projectTitle = document.querySelector("#title");
      projectTitle.textContent = `${taskName}`;
      console.log(Project.name);
      
    }

    const clearProjectTasks = () =>{
        const projectTodos = document.querySelector("#task-list");
        projectTodos.textContent = "";
      }

      //Removes Add Task Button for Today and This Week
      const removeButton = (currentProject)=>{
        const addTaskButton = document.querySelector("#addTask-btn");
        if (currentProject == "today" || currentProject == "this-week"){
          addTaskButton.style.display = "none";
        } else {
          addTaskButton.style.display = "flex";
        }
      }

    
  


  return{
    addProject,
    deleteProject,
    makeActive,
    projectList
  }

})();