import { projectList } from "../classes/projectClass";
import { taskList } from "../classes/taskClass";
import { project } from "../functions/projects";
import { task } from "../functions/tasks";
import { displayModals } from "./display-modal";

export const taskControls = (() => {

  const controls = () => {
    document.getElementById("task-view").addEventListener("click", function (event) {
      const target = event.target;

      //View Button
      if (target.className === "task-view-button") {
        const projectIndex = getProjectIndex(target);
        const taskIndex = getTaskIndex(target);

        displayModals.showTaskViewModal();
        displayModals.displayTaskViewContent(projectList[projectIndex].tasks[taskIndex]);
      }

      if (target.className === "tViewModal-close-btn") {
        displayModals.hideTaskViewModal();
      }

      //Toggles Task Completion
      if (target.parentElement.classList.contains("task") &&
        target.className !== "task-view-button" &&
        target.className !== "task-edit-button" &&
        target.className !== "task-delete-button") {

        const parent = target.parentElement;
        const checkIcon = parent.querySelector(".check");
        const projectIndex = getProjectIndex(target);
        const taskIndex = getTaskIndex(target);

        task.completedTask(projectList[projectIndex].tasks[taskIndex]);
        
        parent.classList.toggle("checked");
        checkIcon.classList.toggle("active");
      }

      //Edit Button
      if (target.className === "task-edit-button") {

        const projectIndex = getProjectIndex(target);
        const taskIndex = getTaskIndex(target);

        displayModals.displayTaskEditModal(projectList[projectIndex].tasks[taskIndex]);
        
      }

      //Delete Button
      if (target.className === "task-delete-button") {
        const projectIndex = getProjectIndex(target);
        const taskIndex = getTaskIndex(target);
        projectList[projectIndex].tasks.splice(taskIndex, 1);
        project.renderProject();
      }

    });

  const getProjectIndex = (input) => {
    let task = input.parentElement;
    let taskProject = task.dataset.project;

    const projectIndex = projectList.findIndex(obj => obj.id == taskProject);

    return projectIndex;

  }

  const getTaskIndex = (input) => {
    let task = input.parentElement;
    let taskTitle = task.querySelector(".task-title").textContent;
    let taskProject = task.dataset.project;

    const taskIndex = projectList[getProjectIndex(input)].tasks.findIndex (obj => obj.title == taskTitle && obj.project == taskProject);

    return taskIndex;
    }
  }

  return {
    controls
  }


})();