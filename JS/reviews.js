document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
        { 
            imageSrc: "../Images/profile.jpg", 
            name: "John Doe -", 
            productName: "RGB Mouse", 
            rating: "4/5", 
            description: "The mouse was decent, but ... and that's why." 
        },
        { 
            imageSrc: "../Images/profile.jpg", 
            name: "Ronald Mckay -", 
            productName: "Laptop", 
            rating: "5/5", 
            description: "The laptop was very quick and supported everything I needed to be able to do" 
        },
        { 
            imageSrc: "../Images/profile.jpg", 
            name: "Graham Stevens -", 
            productName: "Smart Watch", 
            rating: "3/5", 
            description: "The smart watch wasnt my greatest purchase, however ..." 
        },
    ];

    let currentReviewIndex = 0;

    function showReview(index) {
        const reviewArea = document.getElementById("reviewArea");
        if (reviewArea) {
            reviewArea.innerHTML = "";
            reviewSlider(reviews[index]);
        }
    }

    function nextReview() {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        showReview(currentReviewIndex);
    }

    function prevReview() {
        currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
        showReview(currentReviewIndex);
    }

    // Display the first review initially
    showReview(currentReviewIndex);

    // add event listeners for next and previous buttons
    document.getElementById('next').addEventListener('click', nextReview);
    document.getElementById('previous').addEventListener('click', prevReview);
});

function reviewSlider(review) {
    // create the div and add class 'review'
    var div = document.createElement("div");
    div.classList.add("review");

    // create div and add class 'reviewInfo'
    var divInfo = document.createElement("div");
    divInfo.classList.add("reviewInfo");

    // create image and add src and alt text
    var img = document.createElement("img");
    img.src = review.imageSrc;
    img.alt = "Profile Picture";

    // create the name, add class 'reviewName' and content
    var p1 = document.createElement("p");
    p1.className = "reviewName";
    p1.textContent = review.name;

    // create the product name, add class 'productName' and content
    var p2 = document.createElement("p");
    p2.className = "productName";
    p2.textContent = review.productName;

    // create the rating, add class 'rating' and content
    var p3 = document.createElement("p");
    p3.className = "rating";
    p3.textContent = review.rating;

    // create the description, add class 'reviewText' and content
    var p4 = document.createElement("p");
    p4.className = "reviewText";
    p4.textContent = review.description;

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