import { camelize, inputCheck,resetInput } from "./helper-functions";
import { Project, projectList } from "../classes/projectClass";
import { defaultProjects } from "./defaultProjects";
import { task } from "./tasks";
import { taskList } from "../classes/taskClass";

export const project = (() => {

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
    newProject.setAttribute("data","project");
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
    
    projects.appendChild(newProject);
    makeActive(newProject);
  }

  //Deletes project from view and returns to Inbox
  const deleteProject = (event)=>{
    const project = event.parentElement;
    const inbox = document.querySelector("[data='project']");
    const taskView = document.querySelector("#task-view");
    for (var i = projectList.length - 1; i >= 0; --i) {
      if (projectList[i].id == project.id) {
          projectList.splice(i,1);
      }
  }
    project.remove();
    inbox.classList.add("active");
    taskView.setAttribute("data-selected-project", `${inbox.id}`);
    if (projects.childNodes.length === 0){
      projects.classList.remove("show");
    } 
    makeActive(inbox);
  }

  //Makes project active upon selection
  const makeActive = (event) =>{
    const allProjects = document.querySelector("[data='allProjects']");
    const taskView = document.querySelector("#task-view");
    const currentProject = event.id;
    let checkProjects = allProjects.querySelectorAll(".active");

    if (checkProjects.length !== 0){
      checkProjects.forEach(project =>{
        if(project.classList.contains("active")){
          project.classList.remove("active");
          event.classList.add("active");
          taskView.setAttribute("data-selected-project", `${currentProject}`);
          removeButton(currentProject);
      }});
    } else {
        event.classList.add("active");
    }
    renderProject();
  };


    const renderProject = () =>{
      clearProjectTasks();
      const taskId = document.querySelector("#task-view").getAttribute("data-selected-project");
      const taskName = document.getElementById(`${taskId}`).textContent;
      const projectTitle = document.querySelector("#title");
      projectTitle.textContent = `${taskName}`;
      task.displayTask(taskId);
      if(taskId === "inbox"){
        defaultProjects.displayAllTasks();
      }else if (taskId === "today"){
        defaultProjects.displayTodaysTasks();
      }else if (taskId === "thisWeek"){
        defaultProjects.displayThisWeeksTasks();
      }
    }

    const clearProjectTasks = () =>{
        const projectTodos = document.querySelector("#task-list");
        projectTodos.textContent = "";
      }

      //Removes Add Task Button for Today and This Week
      const removeButton = (currentProject)=>{
        const addTaskButton = document.querySelector("#addTask-btn");
        if (currentProject == "today" || currentProject == "thisWeek"){
          addTaskButton.style.display = "none";
        } else {
          addTaskButton.style.display = "flex";
        }
      }

      //Project validation to prevent dupiclate Project Titles
      const projectValidation = (input, projectList) =>{
        if (projectList.filter(e => e.id === `${camelize(input)}`).length > 0) {
          alert("This project title already exists. Please choose a different one");
          return false;
        } else return true;
      }


  return{
    addProject,
    deleteProject,
    makeActive,
    projectList,
    projectValidation,
    clearProjectTasks
  }

})();