// Custom jQuery script
$(document).ready(function() {
  // initialize image variables
  var $electrical = $('#electrical-box');
  var $mechanical = $('#mechanical-box');
  var $computing = $('#computing-box');
  var $architecture = $('#architecture-box');
  var $design = $('#design-box');
  var $business = $('#business-box');
  var $teamContainer = $('#team-container');

  // initialize description variables
  var $teamDescription = $('#team-description');
  var $electricalDescription = $('#team-description-electrical');
  var $mechanicalDescription = $('#team-description-mechanical');
  var $computingDescription = $('#team-description-computing');
  var $architectureDescription = $('#team-description-architecture');
  var $designDescription = $('#team-description-design');
  var $businessDescription = $('#team-description-business');

  var hideTeamDescription = function(argument) {
    $businessDescription.fadeOut('fast');
    $designDescription.fadeOut('fast');
    $architectureDescription.fadeOut('fast');
    $computingDescription.fadeOut('fast');
    $mechanicalDescription.fadeOut('fast');
    $businessDescription.fadeOut('fast');
    $teamDescription.fadeOut('fast');
  };

  hideTeamDescription();
});
