// product data for individual products
const products = [
    {
        num: 1,
        name: "Laptop",
        price: "£799",
        description: "Lenovo Thinkpad E15 with an intel i5 core processor. 32GB RAM and a 256GB SSD",
        id: "laptopImage",
        imageUrl1: "Images/laptop.jpg",
        imageUrl2: "Images/laptop2.jpg"
    },
    {
        num: 2,
        name: "Watch",
        price: "£150",
        description: "Hugo Boss stainless steel watch with smooth leather wrist strap",
        id: "watchImage",
        imageUrl1: "Images/watch.jpg",
        imageUrl2: "Images/watch2.jpg"
    },
    {
        num: 3,
        name: "Keyboard",
        price: "£65",
        description: "Logitech RGB light up mechanical keyboard with programmable keys",
        id: "keyboardImage",
        imageUrl1: "Images/keyboard.jpg",
        imageUrl2: "Images/keyboard2.jpg"
    },
    {
        num: 4,
        name: "Smart Watch",
        price: "£499",
        description: "New Apple smart watch with touch screen and built in face ID",
        id: "swatchImage",
        imageUrl1: "Images/swatch.jpg",
        imageUrl2: "Images/swatch2.jpg"
    },
    {
        num: 5,
        name: "RGB Mouse",
        price: "£29",
        description: "Ergonomic mouse built to fit the hand with RGB light up edge",
        id: "mouseImage",
        imageUrl1: "Images/mouse.jpg",
        imageUrl2: "Images/mouse2.jpg"
    },
    {
        num: 6,
        name: "Logitech Speaker",
        price: "£199",
        description: "100W Logitech speakers with bluetooth capabilities",
        id: "speakerImage",
        imageUrl1: "Images/speaker.jpg",
        imageUrl2: "Images/speaker2.jpg"
    },
    {
        num: 7,
        name: "TV Remote",
        price: "£20",
        description: "Standard TV remote for any high end smart box",
        id: "remoteImage",
        imageUrl1: "Images/remote.jpg",
        imageUrl2: "Images/remote2.jpg"
    },
    {
        num: 8,
        name: "Headphones",
        price: "£139",
        description: "Dr. Dre beats in white with bluetooth capabilities",
        id: "headphonesImage",
        imageUrl1: "Images/headphones.jpg",
        imageUrl2: "Images/headphones2.jpg"
    },
    {
        num: 9,
        name: "Phone Holder",
        price: "£150",
        description: "iPhone 13 metallic phone holder with chargeing capabilities",
        id: "holderImage",
        imageUrl1: "Images/holder.jpg",
        imageUrl2: "Images/holder2.jpg"
    },
    {
        num: 10,
        name: "LG Monitor",
        price: "£500",
        description: "26.5 inch LG monitor with 4K quality and 144Hz refresh rate",
        id: "monitorImage",
        imageUrl1: "Images/monitor.jpg",
        imageUrl2: "Images/monitor2.jpg"
    },
    {
        num: 11,
        name: "Xbox 1 Controller",
        price: "£50",
        description: "Full Black controller made for the Xbox 1",
        id: "xboxconImage",
        imageUrl1: "Images/xboxcon.jpg",
        imageUrl2: "Images/xboxcon2.jpg"
    },
    {
        num: 12,
        name: "PlayStation 5 Controller",
        price: "£70",
        description: "White controller for the brand new PS5",
        id: "psconImage",
        imageUrl1: "Images/pscon.jpg",
        imageUrl2: "Images/pscon2.jpg"
    },
];

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
    img.loading = "lazy";
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
    }
}

// adds different product divs when the page is loaded
window.addEventListener("load", function() {
    // adds laptop product
    productDiv(products[0].imageUrl1, products[0].id,
    function() { changeImage(products[0].imageUrl2, products[0].id) }, 
    function() { changeImage(products[0].imageUrl1, products[0].id) }, 
    products[0].name, products[0].price, products[0].description, products[0].num);

    // adds watch product
    productDiv(products[1].imageUrl1,  products[1].id, 
    function() { changeImage(products[1].imageUrl2, products[1].id) },
    function() { changeImage(products[1].imageUrl1, products[1].id) }, 
    products[1].name, products[1].price, products[1].description, products[1].num);

    // adds keyboard product
    productDiv(products[2].imageUrl1, products[2].id, 
    function() { changeImage(products[2].imageUrl2, products[2].id) }, 
    function() { changeImage(products[2].imageUrl1, products[2].id) }, 
    products[2].name, products[2].price, products[2].description, products[2].num);

    // adds smart watch product
    productDiv(products[3].imageUrl1, products[3].id, 
    function() { changeImage(products[3].imageUrl2, products[3].id) } , 
    function() { changeImage(products[3].imageUrl1, products[3].id) }, 
    products[3].name, products[3].price, products[3].description, products[3].num);

    // adds mouse product
    productDiv(products[4].imageUrl1, products[4].id, 
    function() { changeImage(products[4].imageUrl2, products[4].id) } , 
    function() { changeImage(products[4].imageUrl1, products[4].id) }, 
    products[4].name, products[4].price, products[4].description, products[4].num);

    // adds speaker product
    productDiv(products[5].imageUrl1, products[5].id, 
    function() { changeImage(products[5].imageUrl2, products[5].id) } , 
    function() { changeImage(products[5].imageUrl1, products[5].id) }, 
    products[5].name, products[5].price, products[5].description, products[5].num);

    // adds remote product
    productDiv(products[6].imageUrl1, products[6].id, 
    function() { changeImage(products[6].imageUrl2, products[6].id) } , 
    function() { changeImage(products[6].imageUrl1, products[6].id) }, 
    products[6].name, products[6].price, products[6].description, products[6].num);

    // adds headphones product
    productDiv(products[7].imageUrl1, products[7].id, 
    function() { changeImage(products[7].imageUrl2, products[7].id) } , 
    function() { changeImage(products[7].imageUrl1, products[7].id) }, 
    products[7].name, products[7].price, products[7].description, products[7].num);

    // adds phone holder product
    productDiv(products[8].imageUrl1, products[8].id, 
    function() { changeImage(products[8].imageUrl2, products[8].id) } , 
    function() { changeImage(products[8].imageUrl1, products[8].id) }, 
    products[8].name, products[8].price, products[8].description, products[8].num);

    // adds monitor product
    productDiv(products[9].imageUrl1, products[9].id, 
    function() { changeImage(products[9].imageUrl2, products[9].id) } , 
    function() { changeImage(products[9].imageUrl1, products[9].id) }, 
    products[9].name, products[9].price, products[9].description, products[9].num);

    // adds xbox controller product
    productDiv(products[10].imageUrl1, products[10].id, 
    function() { changeImage(products[10].imageUrl2, products[10].id) } , 
    function() { changeImage(products[10].imageUrl1, products[10].id) }, 
    products[10].name, products[10].price, products[10].description, products[10].num);

    // adds playstation controller product
    productDiv(products[11].imageUrl1, products[11].id, 
    function() { changeImage(products[11].imageUrl2, products[11].id) } , 
    function() { changeImage(products[11].imageUrl1, products[11].id) }, 
    products[11].name, products[11].price, products[11].description, products[11].num);
});