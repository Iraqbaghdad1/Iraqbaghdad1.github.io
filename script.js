document.addEventListener('DOMContentLoaded', function() {
  const fetchDataButton = document.getElementById('fetchData');
  const responseDataDiv = document.getElementById('responseData');

  fetchDataButton.addEventListener('click', () => {
    // Make an HTTP GET request to fetch data from the server
    fetch('/api/some-data')
      .then(response => response.json())
      .then(data => {
        // Display the data received from the server
        responseDataDiv.innerHTML = `<p>${data.message}</p>`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});

