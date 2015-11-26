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

  var hideTeamDescription = function() {
    $businessDescription.toggle('fast');
    $designDescription.toggle('fast');
    $architectureDescription.toggle('fast');
    $computingDescription.toggle('fast');
    $mechanicalDescription.toggle('fast');
    $electricalDescription.toggle('fast');
    $teamDescription.toggle('fast');
  };

  var displayDescriptionElement = function(element) {
    $teamContainer.fadeOut('fast');
    $teamDescription.fadeIn('slow');
    element.fadeIn('slow');

  };

  hideTeamDescription();

  // Electrical
  $electrical.click(function() {
    $teamContainer.toggle('slow');
    displayDescriptionElement($electricalDescription);
  });

  $electricalDescription.click(function() {
    $(this).toggle('slow');
    $teamContainer.toggle('fast');
  });

  // Mechanical
  $mechanical.click(function() {
    $teamContainer.toggle('slow');
    displayDescriptionElement($mechanicalDescription);
  });

  $mechanicalDescription.click(function() {
    $(this).toggle('slow');
    $teamContainer.toggle('fast');
  });

  // Computing
  $computing.click(function() {
    $teamContainer.toggle('slow');
    displayDescriptionElement($computingDescription);
  });

  $computingDescription.click(function() {
    $(this).toggle('slow');
    $teamContainer.toggle('fast');
  });

  // Architecture
  $architecture.click(function() {
    $teamContainer.toggle('slow');
    displayDescriptionElement($architectureDescription);
  });

  $architectureDescription.click(function() {
    $(this).toggle('slow');
    $teamContainer.toggle('fast');
  });

  // Design
  $design.click(function() {
    $teamContainer.toggle('slow');
    displayDescriptionElement($designDescription);
  });

  $designDescription.click(function() {
    $(this).toggle('slow');
    $teamContainer.toggle('fast');
  });

  // Business
  $business.click(function() {
    $teamContainer.toggle('slow');
    displayDescriptionElement($businessDescription);
  });

  $businessDescription.click(function() {
    $(this).toggle('slow');
    $teamContainer.toggle('fast');
  });
});
