 // ---------- Mobile hamburger menu ----------
  (function(){
    var toggle = document.getElementById('menuToggle');
    var navlinks = document.getElementById('navlinks');
    function closeMenu(){ navlinks.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    function openMenu(){ navlinks.classList.add('open'); toggle.setAttribute('aria-expanded', 'true'); }
    toggle.addEventListener('click', function(){
      navlinks.classList.contains('open') ? closeMenu() : openMenu();
    });
    navlinks.querySelectorAll('a').forEach(function(link){ link.addEventListener('click', closeMenu); });
    document.addEventListener('click', function(e){
      if(!navlinks.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMenu(); });
  })();

  
  // Navigate to sections without reloading the page
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (event) {
      const path = new URL(this.href).pathname;
      const sectionId = path.split("/").filter(Boolean).pop();
      const section = document.getElementById(sectionId);

      if (!section) return;

      event.preventDefault();
      history.pushState({}, "", path);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Support browser Back and Forward buttons
  window.addEventListener("popstate", () => {
    const parts = location.pathname.split("/").filter(Boolean);
    const sectionId = parts.pop() || "home";
    document.getElementById(sectionId)?.scrollIntoView();
  });
  
  
// Convert hash navigation into clean URLs
document.querySelectorAll("[data-route]").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const sectionId = this.dataset.route;
    const section = document.getElementById(sectionId);

    if (!section) return;

    // Update URL without reloading the page
    history.pushState({}, "/" + sectionId);

    // Scroll to the target section
    section.scrollIntoView({ behavior: "smooth" });
  });
});
