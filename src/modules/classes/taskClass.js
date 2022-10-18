  //List of Tasks
  let taskList = [];  

  //Task Class
  class Task {
    constructor(project, title, date, priority, descritption) {
      this.project = project;
      this.title = title;
      this.date = date;
      this.priority = priority;
      this.descritption = descritption;
      this.done = false;
    }
  }

  export {taskList, Task}
  