import { taskList, Task } from "../classes/taskClass";
import { capitalizeFirstLetter, resetSelectedInput } from "./helper-functions";
import { projectList } from "../classes/projectClass";
import { dateFormat } from "./dataFormat";
import { resetInput } from "./helper-functions";
import { project } from "./projects";
import { saveToLocalStorage } from "../classes/projectClass";
import { displayModals } from "../events/display-modal";


export const task = (() => {

  const tasks = document.querySelector("#task-list");
  let taskView = document.querySelector("#task-view");


  //Fucntions
  const createTask = (project, title, date, priority, descritption, done) => {
    const newTask = new Task(project, title, date, priority, descritption, done);
    taskList.push(newTask);

    const findProject = projectList.find(obj => obj.id === project);
    findProject.tasks.push(newTask);
    saveToLocalStorage();
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

    const done = false;

    createTask(taskProject, taskTitle, taskDate, taskPriority, taskDescription, done);

    appendTask(taskProject, taskTitle, taskDate, taskPriority, done);
  }

  const appendTask = (taskProject, taskTitle, taskDate, taskPriority, done) => {

    let newTask = document.createElement("div");
    newTask.setAttribute("class", "task");
    newTask.setAttribute("data-project", taskProject);

    const circle = document.createElement("div");
    const circleAttributes = ["circle", `${taskPriority}`];
    circle.classList.add(...circleAttributes);
    const check = document.createElement("svg");
    const checkAttributes = ["check", "fa-solid", "fa-check"];
    check.classList.add(...checkAttributes);
    circle.appendChild(check);

    if(done){
      newTask.classList.add("checked");
      check.classList.add("active");
    }

    const title = document.createElement("div");
    title.setAttribute("class", "task-title");
    title.textContent = taskTitle;

    const date = document.createElement("div");
    date.setAttribute("class", "date");

    if (dateFormat.overdue(taskDate)){
      const overdue = document.createElement("div");
      const overdueAttributes = ["overdue", `overdue-${taskPriority}`];
      overdue.classList.add(...overdueAttributes);
      overdue.textContent = "Overdue";
      date.appendChild(overdue);
      if (done){
        date.textContent = dateFormat.getDate(taskDate);
      }
    } else {
      date.textContent = dateFormat.getDate(taskDate);
    }

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
      const editModal = document.querySelector("[data-modal='edit']");
      editModal.dataset.modal = "new-task";
      createTaskButton.disabled = false;
    }

    taskModalTitle.textContent = "New Task";
    resetInput(taskTitleInput);
    resetInput(taskDateInput);
    resetSelectedInput(taskPriorityInput);
    resetInput(taskDescriptionInput);
    createTaskButton.style.display = "block";
    editTaskButton.style.display = "none";
  }

  const editTask = (projectId, titleName) => {
    const projectIndex = projectList.findIndex(obj => obj.id == projectId);
    const taskIndex = projectList[projectIndex].tasks.findIndex (obj => obj.title == titleName && obj.project == projectId);
    const currentTask = projectList[projectIndex].tasks[taskIndex];

    let title = document.querySelector("[data-tModal-input='title']").value;
    let date = document.querySelector("[data-tModal-input='date']").value;
    let priority = document.querySelector("[data-tModal-input='priority']").value;
    let description = document.querySelector("[data-tModal-input='description']").value;
  
    currentTask.title = title;
    currentTask.date = date;
    currentTask.priority = priority;
    currentTask.description = description;

    project.renderProject();
    displayModals.hideTaskModal();
    saveToLocalStorage();
  };


  const displayTask = (project) => {
    let findProject = projectList.find(obj => obj.id === project);
    findProject.tasks.forEach((task) => {
      appendTask(task.project, task.title, task.date, task.priority, task.done);
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


  const completedTask = (e) =>{
    if (e.done == false){
      e.done = true;
    } else {
      e.done = false;
    }
    project.renderProject();
  }

  return {
    addTask,
    resetTaskModal,
    displayTask,
    appendTask,
    taskValidation,
    editTask,
    completedTask
  }

})();