// Balance Therapy scripts
// Set dynamic year
document.addEventListener('DOMContentLoaded', function(){
  var yearEl = document.getElementById('year');
  if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
