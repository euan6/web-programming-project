// dynamically loads the footer using xhr
window.addEventListener('DOMContentLoaded', function() {
    var footerPlaceholder = document.getElementById("footerPlaceholder");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "footer.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            footerPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});

// dynamically loads the header using xhr
window.addEventListener('DOMContentLoaded', function() {
    var headerPlaceholder = document.getElementById("headerPlaceholder");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            headerPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});