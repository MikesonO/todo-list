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
        let task = target.parentElement;
        let taskTitle = task.querySelector(".task-title").textContent;
        let taskProject = task.dataset.project;

        const selectedTask = taskList.findIndex(obj => obj.title == taskTitle && obj.project == taskProject);

        displayModals.showTaskViewModal();
        displayModals.displayTaskViewContent(taskList[selectedTask]);

        console.log(taskList);
      }

      if (target.className === "tViewModal-close-btn"){
        displayModals.hideTaskViewModal();
      }

      if (target.parentElement.classList.contains("task") &&
      target.className !== "task-view-button" &&
      target.className !== "task-edit-button" &&
      target.className !== "task-delete-button"){


        const currentProject = document.querySelector(".task").dataset.project;

        const projectIndex = projectList.findIndex(obj => obj.id == currentProject);

       
        const parent = target.parentElement;

        console.log(parent);

        const selectedTask = parent.querySelector(".task-title").textContent;

        console.log(selectedTask);

        const checkIcon = parent.querySelector(".check");

        
        const taskIndex = projectList[projectIndex].tasks.findIndex(obj => obj.title == selectedTask);

        task.completedTask(projectList[projectIndex].tasks[taskIndex]);
        console.log(projectList[projectIndex].tasks[taskIndex].done);

        parent.classList.toggle("checked");  
        checkIcon.classList.toggle("active");
      }

      //Edit Button
      if (target.className === "task-edit-button") {
        let task = target.parentElement;
        let taskTitle = task.querySelector(".task-title").textContent;
        let taskProject = task.dataset.project;

        const selectedTask = taskList.findIndex(obj => obj.title == taskTitle && obj.project == taskProject);

        displayModals.displayTaskEditModal(taskList[selectedTask]);
      }


      //Delete Button
      if (target.className === "task-delete-button") {
        let task = target.parentElement;
        let taskTitle = task.querySelector(".task-title").textContent;
        console.log(target);
        console.log(taskTitle);

        for (var i = taskList.length - 1; i >= 0; --i) {
          if (taskList[i].title == taskTitle) {
            const getProject = taskList[i].project;
            const projectIndex = projectList.findIndex(obj => obj.id === getProject);
            const getProjectTask = projectList[projectIndex].tasks.findIndex(obj => obj.title === taskList[i].title);
            
            projectList[projectIndex].tasks.splice(getProjectTask, 1);
            taskList.splice(i, 1);
            
          }
        }

        task.remove();

      }



    })
  };


  return {
    controls
  }


})();