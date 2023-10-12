function changeLaptopImage(imageSrc) {
    var image = document.getElementById("laptopImage");
    image.src = imageSrc;
}

function changeWatchImage(imageSrc) {
    var image = document.getElementById("watchImage");
    image.src = imageSrc;
}

function changeKeyboardImage(imageSrc) {
    var image = document.getElementById("keyboardImage");
    image.src = imageSrc;
}

function changeSwatchImage(imageSrc) {
    var image = document.getElementById("swatchImage");
    image.src = imageSrc;
}

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