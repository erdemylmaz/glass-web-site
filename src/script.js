const icons = document.querySelectorAll(".material-icons");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

let mode = "light";

switchMode = (e) => {
  if (e.target.textContent == "dark_mode") {
    document.body.className = "darkMode";
    dark.style.animationName = "click";
    dark.style.animationDuration = "500ms";
    light.style.animationName = "";
  } else if (e.target.textContent == "light_mode") {
    document.body.className = "";
    light.style.animationName = "click";
    light.style.animationDuration = "500ms";
    dark.style.animationName = "";
  }
};

autoSwitch = () => {
  let d = new Date();

  let h = d.getHours();

  if (h >= 18) {
    mode = "dark";
    document.body.className = "darkMode";
  } else if (7 < h < 18) {
    mode = "light";
    document.body.className = "";
  } else if (h <= 7) {
    mode = "dark";
    document.body.className = "darkMode";
  }
};

icons.forEach((icon) => {
  icon.addEventListener("click", switchMode);
});

window.addEventListener("load", autoSwitch);
