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

