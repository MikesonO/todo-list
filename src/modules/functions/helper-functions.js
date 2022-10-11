
function inputCheck(input) {
  if (input.value === "") {
    alert('Field should not be empty.');
    return false;
  } else return true;
}

function resetInput(input) {
  input.value = "";
}

function enterKey(input, button){
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      button.click();
}})};

function camelize(name) {
  return name.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

export{inputCheck, resetInput, enterKey, camelize}