document.addEventListener("DOMContentLoaded", function () {
    // Hide the loader when the DOM is fully loaded
    document.getElementById('loader').style.display = 'none';

    // Add click event listeners to all links
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Show the loader
            document.getElementById('loader').style.display = 'flex';

            // Get the href attribute from the clicked link
            var href = this.getAttribute('href');

            // After a short delay (you can adjust the delay), navigate to the new page
            setTimeout(function () {
                window.location.href = href;
            }, 500); // 500 milliseconds delay, adjust as needed
        });
    });
});
