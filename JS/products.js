// product data for individual products
var idNum = 0;
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

// creates a dynamically loading div with class 'product'
function productDiv(imageSrc, imageId, imageOver, imageOut, name, price, description) {
    // create the div and add class 'product'
    var div = document.createElement("div");
    div.classList.add("product");
    // create product id number and add to div
    div.id = "productId" + idNum++;

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
    }
}

// adds different product divs when the page is loaded
window.addEventListener("load", function() {
    // adds laptop product
    productDiv("../Images/laptop.jpg", prodcuts[0].id,
    function() { changeImage('../Images/laptop2.jpg', prodcuts[0].id) }, 
    function() { changeImage('../Images/laptop.jpg', prodcuts[0].id) }, 
    prodcuts[0].name, prodcuts[0].price, prodcuts[0].description);

    // adds watch product
    productDiv("../Images/watch.jpg",  prodcuts[1].id, 
    function() { changeImage('../Images/watch2.jpg', prodcuts[1].id) },
    function() { changeImage('../Images/watch.jpg', prodcuts[1].id) }, 
    prodcuts[1].name, prodcuts[1].price, prodcuts[1].description);

    // adds keyboard product
    productDiv("../Images/keyboard.jpg", prodcuts[2].id, 
    function() { changeImage('../Images/keyboard2.jpg', prodcuts[2].id) }, 
    function() { changeImage('../Images/keyboard.jpg', prodcuts[2].id) }, 
    prodcuts[2].name, prodcuts[2].price, prodcuts[2].description);

    // adds smart watch product
    productDiv("../Images/swatch.jpg", prodcuts[3].id, 
    function() { changeImage('../Images/swatch2.jpg', prodcuts[3].id) } , 
    function() { changeImage('../Images/swatch.jpg', prodcuts[3].id) }, 
    prodcuts[3].name, prodcuts[3].price, prodcuts[3].description);

    // adds mouse product
    productDiv("../Images/mouse.jpg", prodcuts[4].id, 
    function() { changeImage('../Images/mouse2.jpg', prodcuts[4].id) } , 
    function() { changeImage('../Images/mouse.jpg', prodcuts[4].id) }, 
    prodcuts[4].name, prodcuts[4].price, prodcuts[4].description);

    // adds speaker product
    productDiv("../Images/speaker.jpg", prodcuts[5].id, 
    function() { changeImage('../Images/speaker2.jpg', prodcuts[5].id) } , 
    function() { changeImage('../Images/speaker.jpg', prodcuts[5].id) }, 
    prodcuts[5].name, prodcuts[5].price, prodcuts[5].description);

    // adds remote product
    productDiv("../Images/remote.jpg", prodcuts[6].id, 
    function() { changeImage('../Images/remote2.jpg', prodcuts[6].id) } , 
    function() { changeImage('../Images/remote.jpg', prodcuts[6].id) }, 
    prodcuts[6].name, prodcuts[6].price, prodcuts[6].description);

    // adds headphones product
    productDiv("../Images/headphones.jpg", prodcuts[7].id, 
    function() { changeImage('../Images/headphones2.jpg', prodcuts[7].id) } , 
    function() { changeImage('../Images/headphones.jpg', prodcuts[7].id) }, 
    prodcuts[7].name, prodcuts[7].price, prodcuts[7].description);

    // adds phone holder product
    productDiv("../Images/holder.jpg", prodcuts[8].id, 
    function() { changeImage('../Images/holder2.jpg', prodcuts[8].id) } , 
    function() { changeImage('../Images/holder.jpg', prodcuts[8].id) }, 
    prodcuts[8].name, prodcuts[8].price, prodcuts[8].description);

    // adds monitor product
    productDiv("../Images/monitor.jpg", prodcuts[9].id, 
    function() { changeImage('../Images/monitor2.jpg', prodcuts[9].id) } , 
    function() { changeImage('../Images/monitor.jpg', prodcuts[9].id) }, 
    prodcuts[9].name, prodcuts[9].price, prodcuts[9].description);
});

// event listeners for product clicks
document.getElementById("productId" + idNum).addEventListener("click", () => displayProduct(1));

// function to display product details
function displayProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const productDetail = document.getElementById("indvProduct");
        productDetail.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <img src="${product.imageUrl1}" alt="${product.name}">
        `;
    }
}