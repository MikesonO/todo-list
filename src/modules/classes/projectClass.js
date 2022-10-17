  //List of Projects
  let projectList = [];

  //Project Class
  class Project{
    constructor(title, id){
      this.title = title;
      this.id = id;
      this.tasks = [];
    }
  }

  export {projectList , Project}