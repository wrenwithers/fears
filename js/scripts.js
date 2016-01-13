$(document).ready(function() {
  var fear = prompt("What scares you?");

  if (fear === spiders) {
    $('#spiders').click();
  } else if (fear === snakes) {
    $('#snakes').click();
  } else (fear === sharks)
    $('#sharks').click();
  });
