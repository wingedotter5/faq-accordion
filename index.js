const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.nextElementSibling.classList.toggle("expanded");
    if (toggle.children[0].getAttribute("src").endsWith("icon-plus.svg")) {
      toggle.children[0].setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      toggle.children[0].setAttribute("src", "./assets/images/icon-plus.svg");
    }
  });
});
