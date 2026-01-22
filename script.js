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
