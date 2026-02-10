document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page-content");
  const links = document.querySelectorAll("a[href]");

  requestAnimationFrame(() => {
    page.classList.add("show");
  });

  links.forEach(link => {
    if (
      link.hostname === window.location.hostname &&
      !link.hasAttribute("target") &&
      !link.href.includes("#")
    ) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const url = link.href;

        page.classList.remove("show");
        page.classList.add("hide");

        setTimeout(() => {
          window.location.href = url;
        }, 400);
      });
    }
  });
});
