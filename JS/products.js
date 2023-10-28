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
    var p1 = document.createElement("h2");
    p1.className = "pName";
    p1.textContent = name;

    // create the product price, add class 'pPrice' and content
    var p2 = document.createElement("h3");
    p2.className = "pPrice";
    p2.textContent = price;

    // create the product description and add content
    var p3 = document.createElement("h4");
    p3.className = "pDescription";
    p3.textContent = description;

    // append elements on to the div
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    // add the div to the 'productsArea' class
    var targetElement = document.querySelector("#productsArea");
    if (targetElement) {
        targetElement.appendChild(div);
    } else {
        alert("Target element not found");
    }
}

// adds different product divs when the page is loaded
window.addEventListener("load", function() {
    // adds laptop product
    productDiv("../Images/laptop.jpg", "laptopImage",
    function() { changeImage('../Images/laptop2.jpg', "laptopImage") }, 
    function() { changeImage('../Images/laptop.jpg', "laptopImage") }, 
    "Laptop", "£799", 
    "Lenovo Thinkpad E15 with an intel i5 core processor. 32GB RAM and a 256GB SSD");

    // adds watch product
    productDiv("../Images/watch.jpg",  "watchImage", 
    function() { changeImage('../Images/watch2.jpg', "watchImage") },
    function() { changeImage('../Images/watch.jpg', "watchImage") }, 
    "Watch", "£150", 
    "Hugo Boss stainless steel watch with smooth leather wrist strap");

    // adds keyboard product
    productDiv("../Images/keyboard.jpg", "keyboardImage", 
    function() { changeImage('../Images/keyboard2.jpg', "keyboardImage") }, 
    function() { changeImage('../Images/keyboard.jpg', "keyboardImage") }, 
    "Keyboard", "£65", 
    "Logitech RGB light up mechanical keyboard with programmable keys");

    // adds smart watch product
    productDiv("../Images/swatch.jpg", "swatchImage", 
    function() { changeImage('../Images/swatch2.jpg', "swatchImage") } , 
    function() { changeImage('../Images/swatch.jpg', "swatchImage") }, 
    "Smart Watch", "£499", 
    "New Apple smart watch with touch screen and built in face ID");

    // adds mouse product
    productDiv("../Images/mouse.jpg", "mouseImage", 
    function() { changeImage('../Images/mouse2.jpg', "mouseImage") } , 
    function() { changeImage('../Images/mouse.jpg', "mouseImage") }, 
    "RGB Mouse", "£29", 
    "Ergonomic mouse built to fit the hand with RGB light up edge");

    // adds speaker product
    productDiv("../Images/speaker.jpg", "speakerImage", 
    function() { changeImage('../Images/speaker2.jpg',"speakerImage") } , 
    function() { changeImage('../Images/speaker.jpg', "speakerImage") }, 
    "Logitech Speaker", "£199", 
    "100W Logitech speakers with bluetooth capabilities");

    // adds remote product
    productDiv("../Images/remote.jpg", "remoteImage", 
    function() { changeImage('../Images/remote2.jpg', "remoteImage") } , 
    function() { changeImage('../Images/remote.jpg', "remoteImage") }, 
    "TV Remote", "£20", 
    "Standard TV remote for any high end smart box");

    // adds headphones product
    productDiv("../Images/headphones.jpg", "headphonesImage", 
    function() { changeImage('../Images/headphones2.jpg', "headphonesImage") } , 
    function() { changeImage('../Images/headphones.jpg', "headphonesImage") }, 
    "Headphones", "£139", 
    "Dr. Dre beats in white with bluetooth capabilities");
});