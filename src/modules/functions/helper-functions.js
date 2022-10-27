function inputCheck(input) {
  if (input.value === "") {
    alert('Field should not be empty.');
    return false;
  } else {
    return true;
  }
}

function resetInput(input) {
  input.value = "";
}

function resetSelectedInput(input) {
  input.selectedIndex = 0;
}

function enterKey(input, button){
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      button.click();
}})};

function capitalizeFirstLetter(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function camelize(input) {
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

export{inputCheck, resetInput, resetSelectedInput, enterKey, capitalizeFirstLetter, camelize}