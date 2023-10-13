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

// creates a pop up box when one of the app store images is clicked
function showConfirmation(downloadType) {
    var result = window.confirm("Are you sure you want to download on the " + downloadType + " Store?");
    if (result) {
        alert("Starting Download");
    } else {
        alert("Cancelling Download");
    }
}

// checks every link class for the filename and if it is current file, add active class to it
function highlightCurrentPage() {
    var currentPageUrl = window.location.href;
    var navbarLinks = document.querySelectorAll(".link");
    for (var i = 0; i < navbarLinks.length; i++) {
        var link = navbarLinks[i];
        var linkHref = link.getAttribute("href");
        if (currentPageUrl.endsWith(linkHref)) {
            link.classList.add("active");
        }
    }
}