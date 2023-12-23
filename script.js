const clicked_links = document.querySelectorAll("nav .menu a");

clicked_links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const active_link = document.querySelector(".active");
    active_link.classList.remove("active");
    link.classList.add("active");
  });
});
