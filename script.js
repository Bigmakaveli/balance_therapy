/* Balance Therapy – scripts */
document.addEventListener('DOMContentLoaded', function(){
  // Dynamic year
  var yearEl = document.getElementById('year');
  if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Smooth scroll for internal anchors (respect reduced motion)
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if(target){
        e.preventDefault();
        if (prefersReduced) {
          target.scrollIntoView();
        } else {
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
        // Close mobile menu after selection
        var header = document.querySelector('.site-header');
        var toggle = document.querySelector('.nav-toggle');
        if (header && toggle && header.classList.contains('open')) {
          header.classList.remove('open');
          toggle.setAttribute('aria-expanded','false');
          toggle.focus();
        }
      }
    });
  });

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  if (toggle){
    toggle.addEventListener('click', function(){
      var header = document.querySelector('.site-header');
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('open', !expanded);
      var menu = document.getElementById('nav-menu');
      if (menu){ menu.focus && menu.focus(); }
    });
  }

  // Contact form basic handling (no backend)
  var form = document.getElementById('contact-form');
  if (form){
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.querySelector('#name');
      var message = form.querySelector('#message');
      if (!name.value.trim() || !message.value.trim()){
        if (status){
          status.textContent = 'נא למלא שם והודעה.';
        }
        return;
      }
      if (status){
        status.textContent = 'תודה! ההודעה נשלחה. נחזור אליכם בהקדם.';
      }
      form.reset();
    });
  }
});
