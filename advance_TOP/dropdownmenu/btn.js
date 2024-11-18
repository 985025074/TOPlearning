document.addEventListener("click", (e) => {

  if (!e.target.matches(".dropdown-menu-button")) {
    return;
  }
  console.log(e.target);
  let items = e.target.parentElement.querySelector(".dropdown-menu-items");
  let otherItems = document.querySelectorAll(".dropdown-menu-items");
  items.classList.toggle("active");
  otherItems.forEach((item) => {
    if(item === items) return;
    item.classList.remove("active");
  });

});
