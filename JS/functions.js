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

// creates a dynamically loading div with class 'product'
function productDiv(imageSrc, name, price, description) {
    // create the div and add class 'product'
    var div = document.createElement("div");
    div.classList.add("product");

    // create image and add src and alt text
    var img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Product Image";

    // create the product name, add class 'pName' and content
    var p1 = document.createElement("p");
    p1.classList.add("pName");
    p1.textContent = name;

    // create the product price, add class 'pPrice' and content
    var p2 = document.createElement("p");
    p1.classList.add("pPrice");
    p1.textContent = price;

    // create the product description and add content
    var p3 = document.createElement("p");
    p1.textContent = description;

    // append elements on to the div
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    // add the div to the 'productsArea' class
    var targetElement = document.querySelector(".productsArea");
    if (targetElement) {
        targetElement.appendChild(div);
    } else {
        alert("Target element not found");
    }
}