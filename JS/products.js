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