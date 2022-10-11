
let projectList = [];

class Project{
  constructor(name, id){
    this.name = name;
    this.id = id;
    this.todos = [];
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  addProjects(name){
    projectList.push(name);
  }

  getProjectList(){
    return projectList;
  }
}

export { Project, projectList }