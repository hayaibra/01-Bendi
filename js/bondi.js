let btnToggler = document.querySelector(".navbar-toggler");
console.log(btnToggler);

btnToggler.onclick = function () {
  let aria = btnToggler.getAttribute("aria-expanded");
  console.log(aria);
  if (aria == "false") {
    console.log(true);
    aria = "true";
    console.log(aria);
  }else  {
      aria=false
  }
};
