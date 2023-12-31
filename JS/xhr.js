// dynamically loads the navbar and header using xhr
window.addEventListener('DOMContentLoaded', function() {
    var navbarPlaceholder = document.getElementById("navheaderPlaceholder");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "navheader.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navbarPlaceholder.innerHTML = xhr.responseText;
            // calls function which adds active class to current page
            highlightCurrentPage();
        }
    };
    xhr.send();
});

// dynamically loads the footer using xhr
window.addEventListener('DOMContentLoaded', function() {
    var footerPlaceholder = document.getElementById("footerPlaceholder");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "footer.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            footerPlaceholder.innerHTML = xhr.responseText;
            // update the clock every second (1000 milliseconds)
            setInterval(updateClock, 1000);
            // initialise the clock
            updateClock();
            // initialise the day
            updateDay();
        }
    };
    xhr.send();
});