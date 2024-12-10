function showInputValue() {
  const inputField = document.getElementById("input");
  const inputValue = inputField.value.trim();

  if (inputValue === "") {
    alert("Please enter a valid value!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = inputValue;

  // Store the value in a data attribute
  listItem.setAttribute("data-value", inputValue);

  // Append the list element to the UL element
  const resultList = document.getElementById("resultList");
  resultList.appendChild(listItem);

  // Clear the input field
  inputField.value = "";
}

const removeItem = document.getElementById("remove");
removeItem.addEventListener("click", function () {
  const inputField = document.getElementById("input");
  const inputValue = inputField.value.trim();
  const resultList = document.getElementById("resultList");
  const listItems = resultList.getElementsByTagName("li");
  let itemFound = false;

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === inputValue) {
      listItems[i].remove();
      itemFound = true;
      break;
    }
  }

  if (!itemFound) {
    console.log("Item not found");
  }

  // Clear the input field
  inputField.value = "";
});

function completeTask() {
  const valueContainer = document.getElementById("resultList");
  const listItems = valueContainer.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    if (!listItems[i].classList.contains("completed")) {
      listItems[i].classList.add("completed"); // Add a "completed" class
      listItems[i].style.textDecoration = "line-through"; // Optional: Visual differentiation
    }
  }
}
