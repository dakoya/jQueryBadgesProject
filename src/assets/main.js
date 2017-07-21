$(function() {

  // your code will go here

  $.ajax({
    url: 'https://www.codeschool.com/users/da1224.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
    }
  });

});
