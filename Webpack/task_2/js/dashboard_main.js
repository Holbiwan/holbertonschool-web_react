import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import logo from '../assets/holberton-logo.jpg';

function updateCounter() {
    let count = 0;
    return function() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    };
}

const counter = _.debounce(updateCounter(), 500);

$('#logo').css('background-image', `url(${logo})`);
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

$('button').on('click', counter);
