  //List of Tasks
  let taskList = [];  

  //Task Class
  class Task {
    constructor(project, title, date, priority, description) {
      this.project = project;
      this.title = title;
      this.date = date;
      this.priority = priority;
      this.description = description;
      this.done = false;
    }
  }

  export {taskList, Task}
  