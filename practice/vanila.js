const btn = document.querySelector(".btn");
const countTxt = document.querySelector(".count_txt");
let counter = 0;
btn.addEventListener("click", () => {
  counter = counter + 1;
  countTxt.innerHTML = counter;
});
