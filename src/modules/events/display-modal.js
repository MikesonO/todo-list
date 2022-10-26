import { capitalizeFirstLetter } from "../functions/helper-functions";
import { task } from "../functions/tasks";

export const displayModals = (() => {
  const projectModal = document.querySelector("[data-modal='new-project']");
  const projectModalBox = document.querySelector(".pModal");
  const taskModal = document.querySelector("[data-modal='new-task']");
  const taskModalBox = document.querySelector(".tModal");

  const showProjectModal = () => {
    projectModal.style.display = "block";
    projectModalBox.classList.add("active");
  }

  const hideProjectModal = () => {
    window.setTimeout(() => projectModal.style.display = "none", 400);
    projectModalBox.classList.remove("active");
  }


  const showTaskModal = () => {
    taskModal.style.display = "block";
    taskModalBox.classList.add("active");
  }

  const hideTaskModal = () => {
    window.setTimeout(() => taskModal.style.display = "none", 400);
    taskModalBox.classList.remove("active");
  }

  const taskViewModal = document.querySelector("[data-modal='view-task']");
  const taskViewModalBox = document.querySelector(".tViewModal");

  const showTaskViewModal = () => {
    taskViewModal.style.display = "block";
    taskViewModalBox.classList.add("active");
  }

  const displayTaskViewContent = (obj) => {
    let taskProject = document.querySelector("[data-task-view='project']");
    let taskTitle = document.querySelector("[data-task-view='title']");
    let taskDate = document.querySelector("[data-task-view='date']");

    const taskPriorityDiv = document.querySelector(".task-priority");
    const taskPriorityDivAttributes = ["priority", `${obj.priority}`]
    taskPriorityDiv.classList.add(...taskPriorityDivAttributes);

    let taskPriority = document.querySelector("[data-task-view='priority']");
    let taskDescription = document.querySelector("[data-task-view='description']");

    taskProject.textContent = document.getElementById(obj.project).textContent;
    taskTitle.textContent = obj.title;
    if (!obj.date) {
      taskDate.textContent = "N/A";
    } else {
      taskDate.textContent = obj.date;
    }
    taskPriority.textContent = capitalizeFirstLetter(obj.priority);

    if (!obj.description || obj.description.trim() == "") {
      taskDescription.textContent = "N/A";
    } else {
      taskDescription.textContent = obj.description;
    }
  }

  const hideTaskViewModal = () => {
    window.setTimeout(() => taskViewModal.style.display = "none", 400);
    taskViewModalBox.classList.remove("active");
    const taskPriorityDiv = document.querySelector(".task-priority");
    console.log(taskPriorityDiv);
    if (taskPriorityDiv.classList.contains("high")) {
      taskPriorityDiv.classList.remove("high")
    } else if (taskPriorityDiv.classList.contains("medium")) {
      taskPriorityDiv.classList.remove("medium");
    } else if (taskPriorityDiv.classList.contains("low")) {
      taskPriorityDiv.classList.remove("low");
    }
  }

  const displayTaskEditModal = (obj) => {
    showTaskModal();
    const taskModalTitle = document.querySelector(".tModal-title h2");
    const tModalAddBtn = document.querySelector("[data-tModal-btn='add']");
    const tModalEditBtn = document.querySelector("[data-tModal-btn='edit']");

    const taskTitleInput = document.querySelector("[data-tModal-input='title']");
    const taskDateInput = document.querySelector("[data-tModal-input='date']");
    const taskPriorityInput = document.querySelector("[data-tModal-input='priority']");
    const taskDescriptionInput = document.querySelector("[data-tModal-input='description']");

    taskModal.dataset.modal = "edit"
    tModalAddBtn.disabled = true;

    const taskModalData = document.querySelector(".tModal-bottom");
    taskModalData.dataset.project = obj.project;
    taskModalData.dataset.title = obj.title;
  
    tModalAddBtn.style.display = "none";
    tModalEditBtn.style.display = "block";
    taskModalTitle.textContent = "Edit Task";

    taskTitleInput.value = obj.title;
    taskDateInput.value = obj.date;
    taskPriorityInput.value = obj.priority;
    taskDescriptionInput.value = obj.description;
  }




  return {
    showProjectModal,
    hideProjectModal,
    showTaskModal,
    hideTaskModal,
    showTaskViewModal,
    displayTaskViewContent,
    hideTaskViewModal,
    displayTaskEditModal
  }

})();