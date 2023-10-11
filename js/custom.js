$(document).ready(function() {
  const names = $(".bottom-name, .top-name, .c-name, .e-name");
  const navBar = $("nav");

  $('nav a').on('click', function (e) {
    e.preventDefault();

  
    var targetSectionId = $(this).attr('href');

    var targetPosition = $(targetSectionId).offset().top;

    $('html, body').animate({ scrollTop: targetPosition }, 1000);
  });

  function velocityPromise(element, animation, options) {
    return new Promise((resolve) => {
      element.velocity(animation, Object.assign(options, { complete: resolve }));
    });
  }
  function animateNames() {
    velocityPromise($("#curtain"), "transition.fadeOut", { duration: 2000 })
      .then(function() {
        $("#curtain").css({ display: 'none' }); // add this line
      });

  }

  animateNames();
});
