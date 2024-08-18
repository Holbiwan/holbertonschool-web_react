import $ from 'jquery';
import '../css/main.css';

$(function() {
  $('body').prepend('<div id="logo"></div>');
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="clickButton">Click here to get started</button>');
  $('body').append('<p id="count">0 clicks on the button</p>');

  let count = 0;
  $('#clickButton').on('click', function() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  });
});
