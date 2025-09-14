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

  // About gallery: Instagram Stories-style slider
  (function(){
    var slider = document.querySelector('.about-gallery .gallery');
    if (!slider) return;

    var pics = Array.from(slider.querySelectorAll('img'));
    if (pics.length < 1) return;

    // If only one image, show it and exit
    if (pics.length === 1){
      pics[0].classList.add('is-active');
      pics[0].setAttribute('aria-hidden','false');
      return;
    }

    slider.classList.add('stories-slider');
    slider.setAttribute('role','group');
    slider.setAttribute('aria-roledescription','קרוסלת תמונות');
    slider.setAttribute('aria-label','סטוריז מהקליניקה');
    slider.style.setProperty('--stories-count', String(pics.length));

    // Build progress indicators
    var progress = document.createElement('div');
    progress.className = 'stories-progress';
    for (var i=0;i<pics.length;i++){
      var bar = document.createElement('span');
      bar.className = 'bar';
      var fill = document.createElement('span');
      fill.className = 'fill';
      bar.appendChild(fill);
      progress.appendChild(bar);
    }
    slider.insertBefore(progress, slider.firstChild);

    // Prepare images
    pics.forEach(function(img, idx){
      img.setAttribute('draggable','false');
      img.setAttribute('aria-hidden', idx === 0 ? 'false' : 'true');
    });

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var current = 0;
    var interval = 2000;
    var paused = false;

    function updateProgress(index, resetOnly){
      var fills = progress.querySelectorAll('.fill');
      for (var j=0;j<fills.length;j++){
        (function(f, jIdx){
          if (jIdx < index){
            f.style.transition = 'none';
            f.style.width = '100%';
          } else if (jIdx === index){
            if (resetOnly){
              f.style.transition = 'none';
              f.style.width = '0%';
            }
            requestAnimationFrame(function(){
              requestAnimationFrame(function(){
                f.style.transition = 'width ' + interval + 'ms linear';
                f.style.width = (paused || reduceMotion) ? '0%' : '100%';
              });
            });
          } else {
            f.style.transition = 'none';
            f.style.width = '0%';
          }
        })(fills[j], j);
      }
    }

    function show(index, resetProgress){
      for (var k=0;k<pics.length;k++){
        var isActive = (k === index);
        pics[k].classList.toggle('is-active', isActive);
        pics[k].setAttribute('aria-hidden', isActive ? 'false' : 'true');
      }
      updateProgress(index, resetProgress);
    }

    function next(){
      if (paused || reduceMotion || document.hidden) return;
      current = (current + 1) % pics.length;
      show(current, true);
    }

    // Init
    show(0, true);

    var timer = null;
    function startTimer(){
      if (reduceMotion) return;
      if (timer) clearInterval(timer);
      timer = setInterval(next, interval);
    }
    function stopTimer(){
      if (timer){
        clearInterval(timer);
        timer = null;
      }
    }

    // Pause on hover/touch
    slider.addEventListener('mouseenter', function(){ paused = true; stopTimer(); });
    slider.addEventListener('mouseleave', function(){ paused = false; startTimer(); show(current, true); });
    slider.addEventListener('touchstart', function(){ paused = true; stopTimer(); }, {passive:true});
    slider.addEventListener('touchend', function(){ paused = false; startTimer(); show(current, true); });

    // Click/tap to advance
    slider.addEventListener('click', function(){ if (reduceMotion) return; next(); stopTimer(); startTimer(); });

    // Visibility handling
    document.addEventListener('visibilitychange', function(){
      if (document.hidden){ stopTimer(); }
      else { startTimer(); show(current, true); }
    });

    startTimer();
  })();
});
