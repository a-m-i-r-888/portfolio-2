'use strict';

const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenuItem = document.querySelectorAll('.dropdown-menu div')
function toggleDropdown() {
  document.getElementById("menu").classList.toggle("show");
}

function selectOption(value) {
  dropdownBtn.innerHTML =
    value + ' <span>⌄</span>';

  document.getElementById("menu").classList.remove("show");
}

dropdownBtn.addEventListener('click', function () {
  toggleDropdown()
})
dropdownMenuItem.addEventListener('click', function (e) {
  if (e.classList.contains('item')) {
    const text = e.value
    selectOption(text)
  }
})