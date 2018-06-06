var users = document.getElementById('table');
var comments = document.getElementById('comments');

var users_nav = document.getElementById('users_nav');
var comments_nav = document.getElementById('comments_nav');

comments.style.display = 'none';

comments_nav.onclick = function() {
  users.style.display = 'none';
  comments.style.display = 'block';
}

users_nav.onclick = function() {
  comments.style.display = 'none';
  users.style.display = 'table';
}
