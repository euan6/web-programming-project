// creates a dynamically loading div with class 'product'
function productDiv(imageSrc, imageId, imageOver, imageOut, name, price, description) {
    // create the div and add class 'product'
    var div = document.createElement("div");
    div.classList.add("product");

    // create image and add src and alt text
    var img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Product Image";
    img.id = imageId;
    img.onmouseover = imageOver;
    img.onmouseout = imageOut;

    // create the product name, add class 'pName' and content
    var p1 = document.createElement("p");
    p1.className = "pName";
    p1.textContent = name;

    // create the product price, add class 'pPrice' and content
    var p2 = document.createElement("p");
    p2.className = "pPrice";
    p2.textContent = price;

    // create the product description and add content
    var p3 = document.createElement("p");
    p3.textContent = description;

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

// adds different product divs when the page is loaded
window.addEventListener("load", function() {
    productDiv("../Images/laptop.jpg", "laptopImage",
    function() { changeLaptopImage('../Images/laptop2.jpg') }, 
    function() { changeLaptopImage('../Images/laptop.jpg') }, 
    "Laptop", "£799", 
    "Description for laptop product");

    productDiv("../Images/watch.jpg",  "watchImage", 
    function() { changeWatchImage('../Images/watch2.jpg') },
    function() { changeWatchImage('../Images/watch.jpg') }, 
    "Watch", "£150", 
    "Description for watch product");

    productDiv("../Images/keyboard.jpg", "keyboardImage", 
    function() { changeKeyboardImage('../Images/keyboard2.jpg') }, 
    function() { changeKeyboardImage('../Images/keyboard.jpg') }, 
    "Keyboard", "£65", 
    "Description for keyboard product");

    productDiv("../Images/swatch.jpg", "swatchImage", 
    function() { changeSwatchImage('../Images/swatch2.jpg') } , 
    function() { changeSwatchImage('../Images/swatch.jpg') }, 
    "Smart Watch", "£499", 
    "Description for smart watch product");
});