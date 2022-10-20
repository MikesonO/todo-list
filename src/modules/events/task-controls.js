import { taskList } from "../classes/taskClass";

export const taskControls = (() => {

  const controls = () => {
    document.getElementById("task-view").addEventListener("click", function (event) {
      const target = event.target;

      //View Button
      if (target.className === "task-view-button") {

      }

      //Edit Button
      if (target.className === "task-view-button") {

      }


      //Delete Button
      if (target.className === "task-delete-button") {
        let task = target.parentElement;
        let taskTitle = task.querySelector(".task-title").textContent;
        console.log(target);
        console.log(taskTitle);
        for (var i = taskList.length - 1; i >= 0; --i) {
          if (taskList[i].title == taskTitle) {
            taskList.splice(i, 1);
          }
        }
        task.remove();

        console.log(taskList);

      }



    })
  };


  return {
    controls
  }


})();