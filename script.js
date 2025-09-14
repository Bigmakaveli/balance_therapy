/* Balance Therapy – scripts */
document.addEventListener('DOMContentLoaded', function(){
  // Dynamic year
  var yearEl = document.getElementById('year');
  if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Hero intro video: try to autoplay with sound; if blocked, start on first user interaction
  var heroVideo = document.querySelector('.hero-section .video');
  if (heroVideo){
    // Ensure correct attributes/properties for inline playback with sound
    heroVideo.muted = false;
    heroVideo.defaultMuted = false;
    heroVideo.volume = 1.0;
    heroVideo.autoplay = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute('playsinline', '');

    var tryPlay = function(){
      try {
        heroVideo.muted = false;
        var p = heroVideo.play();
        return (p && typeof p.then === 'function') ? p : Promise.resolve();
      } catch(e){
        return Promise.reject(e);
      }
    };

    tryPlay().catch(function(){
      function removeKickstart(){
        document.removeEventListener('pointerdown', kickstart);
        document.removeEventListener('click', kickstart);
        document.removeEventListener('touchstart', kickstart);
      }
      function kickstart(){
        var p2 = tryPlay();
        if (p2 && typeof p2.then === 'function'){
          p2.then(removeKickstart).catch(removeKickstart);
        } else {
          removeKickstart();
        }
      }
      document.addEventListener('pointerdown', kickstart);
      document.addEventListener('click', kickstart);
      document.addEventListener('touchstart', kickstart);
    });
  }

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
