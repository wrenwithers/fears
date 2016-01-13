$(document).ready(function() {
  var fear = prompt("What scares you?");

  if (fear === "spiders") {
    location.href =('spiders.html');
  } else if (fear === "snakes") {
    location.href =('snakes.html');
  } else if (fear === "sharks")
    location.href =('sharks.html');
  });
