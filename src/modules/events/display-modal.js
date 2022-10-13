export const displayModals = (() => {
  const projectModal = document.querySelector("[data-modal='new-project']");
  const projectModalBox = document.querySelector(".project-modal");
  const taskModal = document.querySelector("[data-modal='new-task']");
  const taskModalBox = document.querySelector(".task-modal");

  const showProjectModal = () =>{
  projectModal.style.display = "block";
  projectModalBox.classList.add("active");
 }
 
 const hideProjectModal = () =>{
   window.setTimeout(()=> projectModal.style.display = "none", 400);
   projectModalBox.classList.remove("active");
 }


 const showTaskModal = () =>{
  taskModal.style.display = "block";
  taskModalBox.classList.add("active");
 }
 
 const hideTaskModal = () =>{
   window.setTimeout(()=> taskModal.style.display = "none", 400);
   taskModalBox.classList.remove("active");
 }


 return{
   showProjectModal,
   hideProjectModal,
   showTaskModal,
   hideTaskModal
 }
 
 })();
