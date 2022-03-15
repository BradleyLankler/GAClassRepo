let truliaCards = document.getElementsByClassName("trulia-grid-item");

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector(".trulia-nav-toggle")
    .addEventListener("click", function (e) {
      e.preventDefault();
      let navSet = document.querySelector(".trulia-nav-mobilehide");

      for (let n = 0; n < navSet.clientHeight; n++) {
        navSet[n].classList.toggle("trulia-nav-mobilehide");
      }
    });

  for (var i = 0; i < truliaCards.length; i++) {
    truliaCards[i].addEventListener("click", function () {
      for (var q = 0; q < truliaCards.length; q++) {
        truliaCards[q].classList.remove("trulia-featured-grid-item");
      }
      this.classList.add("trulia-featured-grid-item");
    });
  }
});
