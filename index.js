const playBtn = document.querySelector(".play-button"),
  brush = document.querySelector(".brush"), 
  container = document.querySelector(".container"),
  animationPage = document.querySelector(".intro__anime"),
  nextPage = document.querySelector(".nextpage")

playBtn.addEventListener("click", function () {
  brush.style.opacity = 1  
})
nextPage.addEventListener("click", function (e) {
  e.preventDefault()
  animationPage.style.display = "none"
  container.classList.add("fade-in")
})
