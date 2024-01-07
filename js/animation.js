function uianimated() {
    var uianimateds = document.querySelectorAll('.is-animate');
  
    for (var i = 0; i < uianimateds.length; i++) {
      var windowheight = window.innerHeight;
      var uianimatedtop = uianimateds[i].getBoundingClientRect().top;
      var uianimatedpoint = 40;
  
      if (uianimatedtop < windowheight - uianimatedpoint) {
        uianimateds[i].classList.add('animate__animated','animate__fadeIn');
      } else {
        uianimateds[i].classList.remove('animate__animated','animate__fadeIn');
      }
    }
  }
  
  function onPageload() {
    uianimated();
    window.addEventListener('scroll', uianimated);
  }
  
  window.addEventListener('load', onPageload);