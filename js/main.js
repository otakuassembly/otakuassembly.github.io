function init() {
  document.getElementById("menu_icon").addEventListener("click", show_menu);
  document.getElementById("shadow_window")
  let shadow = document.getElementById("shadow_window");
  shadow.addEventListener("click", show_menu);
  shadow.style.display = "none";
}

function show_menu() {
  let menu = document.getElementById("menu");
  let shadow = document.getElementById("shadow_window");
  if (shadow.style.display === "none") {
    menu.style.transform = "translate3d(0, 0, 0)";
    shadow.style.display = "block";
  } else {
    menu.style.transform = "translate3d(-100%, 0, 0)";
    shadow.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", init);
