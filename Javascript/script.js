function showInputValue() {
  const inputField = document.getElementById("input");
  const inputValue = inputField.value;

  const listItem = document.createElement("li");
  listItem.textContent = inputValue;

  // Store the value in a data attribute (optional, based on requirement)
  listItem.setAttribute("data-value", inputValue);

  // Append List Element to Ul Element
  const resultList = document.getElementById("resultList");
  resultList.appendChild(listItem);
}

const removeItem = document.getElementById("remove");
removeItem.addEventListener("click", function () {
  const inputField = document.getElementById("input");
  const inputValue = inputField.value;
  const resultList = document.getElementById("resultList");
  const listItems = resultList.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === inputValue) {
      listItems[i].remove();
      break;
    } else {
      console.log("Item not found");
    }
  }
});

function completeTask() {
  const valueContainer = document.getElementById("resultList");
  const listItems = valueContainer.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const value = listItems[i].getAttribute("data-value");
    console.log(value);

    // Create a new list item
    const newListItem = document.createElement("li");

    // Set the text content to the value
    newListItem.textContent = value;

    // Append the new list item to the ul element
    valueContainer.appendChild(newListItem);
  }
}
