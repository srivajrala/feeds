// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(document).on("page:change", function() {
  $('a').click(function() {
      $('#spinner').show();
  });

  $('.btn-loader').click(function() {
      $('#spinner').show();
  });

  $('.no-loader').click(function() {
      $('#spinner').hide();
  });

  $('.add_filter').click(function() {
     counter = parseInt($('#filter_count').data('count'));
     counter++;
     $('#filter_name1').clone().attr('id', 'filter_name'+counter).attr('name', 'filter_name'+counter).appendTo($("#key_filters_custom"));
     $('#filter_value1').clone().attr('id', 'filter_value'+counter).attr('name', 'filter_value'+counter).appendTo($("#key_filters_custom"));
     $('#filter_count').data('count', counter);
  });

});
