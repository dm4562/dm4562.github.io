// Custom jQuery script
$(document).ready(function() {
  var $electrical = $('#electrical-box');
  var $mechanical = $('#mechanical-box');
  var $computing = $('#computing-box');
  var $architecture = $('#architecture-box');
  var $design = $('#design-box');
  var $business = $('#business-box');
  var $teamContainer = $('#team-container');
  var $teamDescription = $('#team-description-dynamic');
  var $dynamicImageBox = $('#dynamic-image-box');
  var $dynamicTextBox = $('#dynamic-text-box');

  var electricalImage = '<i class="fa fa-4x fa-th-large wow bounceIn light"></i><h3>Electrical</h3>';
  var electricalText = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius volutpat nibh at varius. Nam ac ultricies tellus, in bibendum massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut metus libero, dignissim in justo vitae, pretium convallis mi. Aliquam id mi a dolor suscipit gravida vitae in eros. Nunc a blandit turpis, quis ultrices tellus. In dignissim, ipsum a iaculis eleifend, lorem quam malesuada augue, non condimentum augue leo sed mauris.</p><p>Fusce est odio, rutrum id massa et, vestibulum tincidunt ex. Integer mattis urna dignissim vehicula facilisis. Donec ornare lorem consectetur, eleifend eros at, sagittis turpis. Ut dapibus augue in.</p>';

  var mechanicalImage = '<i class="fa fa-4x fa-cog wow bounceIn light" data-wow-delay=".1s"></i><h3>Mechanical</h3>';
  var computingImage = '<i class="fa fa-4x fa-link wow bounceIn light" data-wow-delay=".2s"></i><h3>Computing</h3>';
  var architectureImage = '<i class="fa fa-4x fa-pencil wow bounceIn light" data-wow-delay=".3s"></i><h3>Architecture</h3>';
  var designImage = '<i class="fa fa-4x fa-heart wow bounceIn light" data-wow-delay=".4s"></i><h3>Design</h3>';
  var businessImage = '<i class="fa fa-4x fa-usd wow bounceIn light" data-wow-delay=".5s"></i><h3>Business</h3>';

  var putText = function(textString) {
    $dynamicTextBox.append(textString).fadeIn();
  }

  var putImage = function(imageString) {
    $dynamicImageBox.append(imageString).fadeIn();
  }

  $electrical.click(function() {
    putImage(electricalImage);
    putText(electricalText);
  });

  $mechanical.click(function() {
    putImage(mechanicalImage);
    putText(electricalText);
  });

  $computing.click(function() {
    putImage(computingImage);
    putText(electricalText);
  });

  $architecture.click(function() {
    putImage(architectureImage);
    putText(electricalText);
  });

  $design.click(function() {
    putImage(designImage);
    putText(electricalText);
  });

  $business.click(function() {
    putImage(businessImage);
    putText(electricalText);
  });
});
