var scrollProject = document.querySelectorAll(".scrollProjects");
var scrollBio = document.querySelectorAll(".scrollBio");
var scrollLanding = document.querySelectorAll(".scrollLanding");

for (var i = 0; i < scrollProject.length; i++) {
   scrollProject[i].addEventListener("click", function() {
      document.querySelector("#unreal").scrollIntoView({
         behavior: "smooth"
      });
   })
}

for (var i = 0; i < scrollBio.length; i++) {
   scrollBio[i].addEventListener("click", function () {
      document.querySelector(".bio").scrollIntoView({
         behavior: "smooth"
      });
   })
}

for (var i = 0; i < scrollLanding.length; i++) {
   scrollLanding[i].addEventListener("click", function () {
      document.querySelector(".landing").scrollIntoView({
         behavior: "smooth"
      });
   })
}