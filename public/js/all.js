/* eslint-disable no-undef */
// Make a get request to our api route that will return every book
fetch('/api/allUser')
  .then(response => response.json())
  .then(function (data) {
    // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data

      var wellSection = `<div class="well" id="book-well-${i}"><h2>${(i + 1)}.<h4>user: ${data[i].userName}</h4><h4>password: ${data[i].password}</h4> ~~~~~~~</div>`

      // append the well to the well section
      document.querySelector('#well-section').insertAdjacentHTML('afterbegin', wellSection)
    }
  })
/* eslint-enable no-undef */
