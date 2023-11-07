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

    // add the div to the 'productsArea' id
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

    // adds phone holder product
    productDiv("../Images/holder.jpg", "holderImage", 
    function() { changeImage('../Images/holder2.jpg', "holderImage") } , 
    function() { changeImage('../Images/holder.jpg', "holderImage") }, 
    "Phone Holder", "£12", 
    "iPhone 13 metallic phone holder with chargeing capabilities");

    // adds monitor product
    productDiv("../Images/monitor.jpg", "monitorImage", 
    function() { changeImage('../Images/monitor2.jpg', "monitorImage") } , 
    function() { changeImage('../Images/monitor.jpg', "monitorImage") }, 
    "LG Monitor", "£500", 
    "26.5 inch LG monitor with 4K quality and 144Hz refresh rate");
});

// product data for individual products
const prodcuts = [
    {
        num: 1,
        name: "Laptop",
        price: "£799",
        description: "Lenovo Thinkpad E15 with an intel i5 core processor. 32GB RAM and a 256GB SSD",
        id: "laptopImage",
        imageUrl1: "laptop.jpg",
        imageUrl2: "laptop2.jpg"
    },
    {
        num: 2,
        name: "Watch",
        price: "£150",
        description: "Hugo Boss stainless steel watch with smooth leather wrist strap",
        id: "watchImage",
        imageUrl1: "watch.jpg",
        imageUrl2: "watch2.jpg"
    },
    {
        num: 3,
        name: "Keyboard",
        price: "£65",
        description: "Logitech RGB light up mechanical keyboard with programmable keys",
        id: "keyboardImage",
        imageUrl1: "keyboard.jpg",
        imageUrl2: "keyboard2.jpg"
    },
    {
        num: 4,
        name: "Smart Watch",
        price: "£499",
        description: "New Apple smart watch with touch screen and built in face ID",
        id: "swatchImage",
        imageUrl1: "swatch.jpg",
        imageUrl2: "swatch2.jpg"
    },
    {
        num: 5,
        name: "RGB Mouse",
        price: "£29",
        description: "Ergonomic mouse built to fit the hand with RGB light up edge",
        id: "mouseImage",
        imageUrl1: "mouse.jpg",
        imageUrl2: "mouse2.jpg"
    },
    {
        num: 6,
        name: "Logitech Speaker",
        price: "£199",
        description: "100W Logitech speakers with bluetooth capabilities",
        id: "speakerImage",
        imageUrl1: "speaker.jpg",
        imageUrl2: "speaker2.jpg"
    },
    {
        num: 7,
        name: "TV Remote",
        price: "£20",
        description: "Standard TV remote for any high end smart box",
        id: "remoteImage",
        imageUrl1: "remote.jpg",
        imageUrl2: "remote2.jpg"
    },
    {
        num: 8,
        name: "Headphones",
        price: "£139",
        description: "Dr. Dre beats in white with bluetooth capabilities",
        id: "headphonesImage",
        imageUrl1: "headphones.jpg",
        imageUrl2: "headphones2.jpg"
    },
    {
        num: 9,
        name: "Phone Holder",
        price: "£150",
        description: "iPhone 13 metallic phone holder with chargeing capabilities",
        id: "holderImage",
        imageUrl1: "holder.jpg",
        imageUrl2: "holder2.jpg"
    },
    {
        num: 10,
        name: "LG Monitor",
        price: "£500",
        description: "26.5 inch LG monitor with 4K quality and 144Hz refresh rate",
        id: "monitorImage",
        imageUrl1: "monitor.jpg",
        imageUrl2: "monitor2.jpg"
    },
];