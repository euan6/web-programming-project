// changes the image of the laptop product
function changeLaptopImage(imageSrc) {
    var image = document.getElementById("laptopImage");
    image.src = imageSrc;
}

// changes the image of the watch product
function changeWatchImage(imageSrc) {
    var image = document.getElementById("watchImage");
    image.src = imageSrc;
}

// changes the image of the keyboard product
function changeKeyboardImage(imageSrc) {
    var image = document.getElementById("keyboardImage");
    image.src = imageSrc;
}

// changes the image of the smart watch product
function changeSwatchImage(imageSrc) {
    var image = document.getElementById("swatchImage");
    image.src = imageSrc;
}

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