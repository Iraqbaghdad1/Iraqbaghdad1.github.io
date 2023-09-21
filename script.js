document.addEventListener('DOMContentLoaded', function() {
    // Example: Make an HTTP GET request to fetch data from your server
    fetch('/api/some-data')
        .then(response => response.json())
        .then(data => {
            // Handle the data received from the server
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
