const search = document.querySelector(".search");
const projects = document.querySelectorAll(".project-name");
const languages = document.querySelectorAll(".percentage");

searchF = (e) => {
  let searchedProject = search.value.toLowerCase();

  if (search.value[0] != "#") {
    Array.from(projects).forEach((project) => {
      let projectName = project.textContent.toLowerCase();

      if (projectName.indexOf(searchedProject) != -1) {
        project.parentNode.parentNode.style.display = "flex";
      } else {
        project.parentNode.parentNode.style.display = "none";
      }
    });
  } else if (search.value[0] == "#") {
    Array.from(languages).forEach((language) => {
      let lang = language.textContent.toLowerCase();
      console.log(lang);

      if (lang.indexOf(searchedProject) != -1) {
        language.parentNode.style.display = "flex";
      } else {
        language.parentNode.style.display = "none";
      }
    });
  }
};

search.addEventListener("keyup", searchF);

// `${skladjf}`
// let arr = [
//   {
//     name: "ergin",
//     old: 15,
//   },
//   {
//     name: "erdem",
//     old: 15,
//   },
// ];
