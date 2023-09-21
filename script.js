document.addEventListener('DOMContentLoaded', function() {
  const contentContainer = document.getElementById('content');

  // Handle navigation links
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
      
      // Get the href attribute of the clicked link
      const pageUrl = this.getAttribute('href');

      // Fetch the content of the clicked page
      fetch(pageUrl)
        .then(response => response.text())
        .then(content => {
          // Update the content container with the fetched HTML
          contentContainer.innerHTML = content;
        })
        .catch(error => {
          console.error('Error:', error);
        });

      // Update the browser's URL
      history.pushState(null, null, pageUrl);
    });
  });
});
