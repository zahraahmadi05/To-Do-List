"use strict";

const input = document.querySelector("input");
const add = document.querySelector(".add");
const taskList = document.querySelector(".taskList");

add.addEventListener("click", function () {
  if (taskList.children.length >= 10) {
    alert("You can only add up to 10 tasks!");
    return;
  }else if (input.value.trim() === "") {
    // ابتدا و انتهای رشته رو خالی می کنه (trim)
    alert("Please add a task!");
    return;
  }

  // Create new li
  const li = document.createElement("li");
  li.textContent = input.value;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");

  // Add delete button to li
  li.appendChild(deleteBtn);

  // Add li to taskList (ul)
  taskList.appendChild(li);

  // remove input
  input.value = "";

  // Delete task
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // checked / unchecked
  li.addEventListener("click", function (e) {
    // جلوگیری از اینکه کلیک روی delete هم تیک تغییر بده
    if (e.target.tagName === "BUTTON") return;

    li.classList.toggle("checked");
  });
});
