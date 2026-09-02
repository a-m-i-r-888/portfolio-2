'use strict'

const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");

const range = document.getElementById("range");

const MIN = 500000;
const MAX = 20000000;

// حداقل فاصله بین دو دایره
const GAP = 500000;

function updateSlider() {
  let min = Number(minPrice.value);
  let max = Number(maxPrice.value);

  const minPercent =
    ((min - MIN) / (MAX - MIN)) * 100;

  const maxPercent =
    ((max - MIN) / (MAX - MIN)) * 100;

  // RTL
  range.style.right = minPercent + "%";
  range.style.left = (100 - maxPercent) + "%";

  minValue.textContent =
    min.toLocaleString("fa-IR") + " تومان";

  maxValue.textContent =
    max.toLocaleString("fa-IR") + " تومان";
}


// وقتی دایره حداقل حرکت می‌کند
minPrice.addEventListener("input", function () {
  let min = Number(minPrice.value);
  let max = Number(maxPrice.value);

  // اجازه عبور از دایره دیگر را نمی‌دهیم
  if (min >= max - GAP) {
    minPrice.value = max - GAP;
  }

  updateSlider();
});


// وقتی دایره حداکثر حرکت می‌کند
maxPrice.addEventListener("input", function () {
  let min = Number(minPrice.value);
  let max = Number(maxPrice.value);

  // اجازه عبور از دایره دیگر را نمی‌دهیم
  if (max <= min + GAP) {
    maxPrice.value = min + GAP;
  }

  updateSlider();
});

updateSlider();