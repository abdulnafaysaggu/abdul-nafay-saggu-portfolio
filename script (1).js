/* =========================================================
   ABDUL NAFAY SAGGU — PORTFOLIO SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Footer year — stays correct without manual edits.
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu toggle.
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
