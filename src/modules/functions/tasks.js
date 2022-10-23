import { taskList, Task } from "../classes/taskClass";
import { capitalizeFirstLetter, resetSelectedInput } from "./helper-functions";
import { projectList } from "../classes/projectClass";
import { dateFormat } from "./dataFormat";
import { resetInput } from "./helper-functions";
import { project } from "./projects";


export const task = (() => {

  const tasks = document.querySelector("#task-list");
  let taskView = document.querySelector("#task-view");


  //Fucntions
  const createTask = (project, title, date, priority, descritption) => {
    const newTask = new Task(project, title, date, priority, descritption);
    taskList.push(newTask);

    const findProject = projectList.find(obj => obj.id === project);
    findProject.tasks.push(newTask);
  }


  const addTask = () => {
    //Gets Current Project Selected
    const taskProject = taskView.getAttribute("data-selected-project");
    //Gets Task Name Input
    const taskTitleInput = document.querySelector("[data-tModal-input='title']");
    const taskTitle = taskTitleInput.value;
    //Gets Task Date Input
    const taskDateInput = document.querySelector("[data-tModal-input='date']");
    const taskDate = taskDateInput.value;
    //Gets Task Priority Input
    const taskPriorityInput = document.querySelector("[data-tModal-input='priority']");
    const taskPriority = taskPriorityInput.value;
    //Gets Task Description Input
    const taskDescriptionInput = document.querySelector("[data-tModal-input='description']");
    const taskDescription = taskDescriptionInput.value;

    createTask(taskProject, taskTitle, taskDate, taskPriority, taskDescription);

    appendTask(taskProject, taskTitle, taskDate, taskPriority);
  }

  const appendTask = (taskProject, taskTitle, taskDate, taskPriority) => {

    const newTask = document.createElement("div");
    newTask.setAttribute("class", "task");
    newTask.setAttribute("data-project", taskProject);

    const circle = document.createElement("div");
    const circleAttributes = ["circle", `${taskPriority}`];
    circle.classList.add(...circleAttributes);

    const title = document.createElement("div");
    title.setAttribute("class", "task-title");
    title.textContent = taskTitle;

    const date = document.createElement("div");
    date.setAttribute("class", "date");
    date.textContent = dateFormat.getDate(taskDate);

    const priority = document.createElement("div");
    const priorityText = document.createElement("p");
    priorityText.textContent = capitalizeFirstLetter(taskPriority)
    const priorityAttributes = ["priority", `${taskPriority}`];
    priority.classList.add(...priorityAttributes);
    const fire = document.createElement("svg");
    const fireAttributes = ["fa-solid", "fa-fire"];
    fire.classList.add(...fireAttributes);
    priority.append(fire, priorityText)


    const viewButton = document.createElement("button");
    viewButton.setAttribute("class", "task-view-button");
    const viewIcon = document.createElement("svg");
    const viewIconAttributes = ["task-view-icon", "fa-solid", "fa-eye"];
    viewIcon.classList.add(...viewIconAttributes);
    viewButton.appendChild(viewIcon)



    const editButton = document.createElement("button");
    editButton.setAttribute("class", "task-edit-button");
    const editIcon = document.createElement("svg");
    const editIconAttributes = ["task-edit-icon", "fa-solid", "fa-pen-to-square"];
    editIcon.classList.add(...editIconAttributes);
    editButton.appendChild(editIcon)

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "task-delete-button");
    const deleteIcon = document.createElement("svg");
    const deleteIconAttributes = ["task-delete-icon", "fa-solid", "fa-trash"];
    deleteIcon.classList.add(...deleteIconAttributes);
    deleteButton.appendChild(deleteIcon);

    newTask.append(circle, title, date, priority, viewButton, editButton, deleteButton);
    tasks.appendChild(newTask);
  }

  const resetTaskModal = () => {
    const taskModalTitle = document.querySelector(".tModal-title h2");
    const taskTitleInput = document.querySelector("[data-tModal-input='title']");
    const taskDateInput = document.querySelector("[data-tModal-input='date']");
    const taskPriorityInput = document.querySelector("[data-tModal-input='priority']");
    const taskDescriptionInput = document.querySelector("[data-tModal-input='description']");
    const createTaskButton = document.querySelector("[data-tModal-btn='add']");
    const editTaskButton = document.querySelector("[data-tModal-btn='edit']");

    const editModal = document.querySelector("[data-modal='edit']") !== null;

    if (editModal) {
      const editModal = document.querySelector("[data-modal='edit']")
      editModal.dataset.modal = "new-task";
    }

    taskModalTitle.textContent = "New Task";
    resetInput(taskTitleInput);
    resetInput(taskDateInput);
    resetSelectedInput(taskPriorityInput);
    resetInput(taskDescriptionInput);
    createTaskButton.style.display = "block";
    editTaskButton.style.display = "none";
  }

  const editTask = (task, taskTitle, taskDate, taskPriority, taskDescription) => {

    console.log(taskTitle);

    let projectId = task.project;
    let currentProject = projectList.find(obj => obj.id === projectId);
    let currentTaskIndex = currentProject.tasks.findIndex(obj => obj.title === task.title);
  
    let currentTask = currentProject.tasks[currentTaskIndex];

    currentTask.title = taskTitle;
    currentTask.date = taskDate;
    currentTask.priority = taskPriority;
    currentTask.description = taskDescription;
    project.renderProject();
  };


  const displayTask = (project) => {

    let findProject = projectList.find(obj => obj.id === project);

    console.log(JSON.stringify(findProject.tasks))

    findProject.tasks.forEach((task) => {
      appendTask(task.project, task.title, task.date, task.priority);
    })
  };


  //Project validation to prevent dupiclate Project Titles
  const taskValidation = (input) => {
    const taskProject = taskView.getAttribute("data-selected-project");
    const projectIndex = projectList.findIndex(obj => obj.id === taskProject);
    if (projectList[projectIndex].tasks.filter(e => e.title === input).length > 0) {
      alert("This task title already exists in this project. Please choose a different one");

      return false;
    } else return true;
  }



  return {
    addTask,
    resetTaskModal,
    displayTask,
    appendTask,
    taskValidation,
    editTask
  }

})();