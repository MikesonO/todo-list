export const addProjectModal = (() => {
  const modal = document.querySelector("[data-modal='new-project']");
  const modalBox = document.querySelector(".modal");

  const show = () =>{
  modal.style.display = "block";
  modalBox.classList.add("active");
 }
 
 const hide = () =>{
   window.setTimeout(()=>modal.style.display = "none", 400);
   modalBox.classList.remove("active");
 }


 
 
 
 
 return{
   show,
   hide,
 }
 
 })();
