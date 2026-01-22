//* Model Pop-up
let modelOpen = document.getElementById("modelOpenBtn");
let modelClose = document.getElementById("modelCloseBtn");
let model = document.getElementById("modal_content");
let contentElement = document.getElementById("content_element");
let mainContent = document.getElementById("main-content");
//Model Open...
modelOpen.addEventListener("click", () => {
  model.style.display = "block";
});
//Model Close ...
modelClose.addEventListener("click", () => {
  model.style.display = "none";
});
//model close when click outside the content
window.addEventListener("click", (el) => {
  if (el.target === mainContent) {
    model.style.display = "none";
    // model.style.display = "block";
  }
});
//* End Model Pop-up
//* Calculator App
let display = document.getElementById("display");
let items = document.querySelectorAll("button");
let string = "";
let itemArray = Array.from(items);
let isResultShown = false;
itemArray.forEach((btn) => {
  btn.addEventListener("click", (el) => {
    if (el.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
      isResultShown = false;
    } else if (el.target.innerHTML === "C") {
      string = " ";
      display.value = string;
      isResultShown = false;
    } else if (el.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
      isResultShown = true;
    } else {
      if (isResultShown && !isNaN(el.target.innerHTML)) {
        string = el.target.innerHTML;
        display.value = string;
        isResultShown = false;
      } else {
        string = string + el.target.innerHTML;
        display.value = string;
        isResultShown = false;
      }
    }
  });
});
