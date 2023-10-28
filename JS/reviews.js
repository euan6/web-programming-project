// creates a dynamically loading div with class 'review'
function reviewSlider(imageSrc, name, productName, rating, description) {
    // create the div and add class 'review'
    var div = document.createElement("div");
    div.classList.add("review");

    // create div and add class 'reviewInfo'
    var divInfo = document.createElement("div");
    divInfo.classList.add("reviewInfo");

    // create image and add src and alt text
    var img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Profile Picture";

    // create the name, add class 'reviewName' and content
    var p1 = document.createElement("p");
    p1.className = "reviewName";
    p1.textContent = name;

    // create the product name, add class 'productName' and content
    var p2 = document.createElement("p");
    p2.className = "productName";
    p2.textContent = productName;

    // create the rating, add class 'rating' and content
    var p3 = document.createElement("p");
    p3.className = "rating";
    p3.textContent = rating;

    // create the description, add class 'reviewText' and content
    var p4 = document.createElement("p");
    p4.className = "reviewText";
    p4.textContent = description;

    // append elements on to the div
    divInfo.appendChild(img);
    divInfo.appendChild(p1);
    divInfo.appendChild(p2);
    div.appendChild(divInfo);
    div.appendChild(p3);
    div.appendChild(p4);

    // add the div to the 'reviewSlider' id
    var targetElement = document.querySelector("#reviewArea");
    if (targetElement) {
        targetElement.appendChild(div);
    } else {
        alert("Target element not found");
    }
}

// adds different reviews when the page is loaded
window.addEventListener("load", function() {
    // adds first review
    reviewSlider("../Images/profile.jpg", "John Doe", "RGB Mouse", "4/5", "The mouse was decent, but ... and thats why.") 
});