//your code here!

// select the list
var list = document.getElementById('infi-list');

// add event listener
list.addEventListener('scroll', function(event) {
  // check if the user has scrolled to the bottom
  if (list.scrollHeight - list.scrollTop === list.clientHeight) {
    // add two more items
    for (var i = 0; i < 2; i++) {
      var newItem = document.createElement('li');
      newItem.textContent = 'Item ' + (list.children.length + 1);
      list.appendChild(newItem);
    }
  }
});