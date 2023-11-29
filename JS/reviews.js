document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
        { 
            name: "John Doe", 
            productName: "RGB Mouse", 
            rating: 4, 
            description: "I thought I'd miss my Magic Mouse, but not at all. I like the feel of the mouse and the additional features are great." 
        },
        { 
            name: "Ronald Mckay", 
            productName: "Laptop", 
            rating: 5, 
            description: "The laptop was very quick and supported everything I needed to be able to do. It came very fast and at a reasonable price too." 
        },
        { 
            name: "Graham Rae", 
            productName: "Smart Watch", 
            rating: 3, 
            description: "The smart watch wasnt my greatest purchase, however it still gets the job done with whatever task i throw at it." 
        },
    ];

    let currentReviewIndex = 0;

    // displays the current review
    function showReview(index) {
        const reviewArea = document.getElementById("reviewArea");
        if (reviewArea) {
            reviewArea.innerHTML = "";
            reviewSlider(reviews[index]);
        }
    }

    // moves the the next review
    function nextReview() {
        if (currentReviewIndex < reviews.length - 1) {
            currentReviewIndex++;
            showReview(currentReviewIndex);
        }
    }

    // moves to the previous review
    function prevReview() {
        if (currentReviewIndex > 0) {
            currentReviewIndex--;
            showReview(currentReviewIndex);
        }
    }

    // display the first review initially
    showReview(currentReviewIndex);

    // add event listeners for next and previous buttons
    document.getElementById('next').addEventListener('click', nextReview);
    document.getElementById('previous').addEventListener('click', prevReview);
});

function reviewSlider(review) {
    // create div and add class 'review'
    var div = document.createElement("div");
    div.classList.add("review");

    // create div and add class 'reviewInfo'
    var divInfo = document.createElement("div");
    divInfo.classList.add("reviewInfo");

    // create profile picture icon
    var i = document.createElement("i");
    i.classList.add("fa-regular");
    i.classList.add("fa-circle-user");
    i.style.color = "#000";

    // create the name, add class 'reviewName' and content
    var p1 = document.createElement("p");
    p1.className = "reviewName";
    p1.textContent = review.name;

    // create the product name, add class 'productName' and content
    var p2 = document.createElement("p");
    p2.className = "productName";
    p2.textContent = review.productName;

    // create div for stars
    var starsDiv = document.createElement("div");
    div.classList.add("reviewStars");
    // loop for how many stars
    for (let x = 0; x < review.rating; x++) {
        var star = document.createElement("i");
        star.classList.add("fa-solid");
        star.classList.add("fa-star");
        star.style.color = "#e9e506";
        starsDiv.appendChild(star);
    }
    // loop for how many empty stars
    for (let y = 0; y < 5 - review.rating; y++) {
        var emptyStar = document.createElement("i");
        emptyStar.classList.add("fa-regular");
        emptyStar.classList.add("fa-star");
        emptyStar.style.color = "#e9e506";
        starsDiv.appendChild(emptyStar);
    }

    // create the description, add class 'reviewText' and content
    var p4 = document.createElement("p");
    p4.className = "reviewText";
    p4.textContent = review.description;

    // append elements on to the div
    divInfo.appendChild(i);
    divInfo.appendChild(p1);
    divInfo.appendChild(p2);
    div.appendChild(divInfo);
    div.appendChild(starsDiv);
    div.appendChild(p4);

    // add the div to the 'reviewSlider' id
    var targetElement = document.querySelector("#reviewArea");
    if (targetElement) {
        targetElement.appendChild(div);
    } else {
        alert("Target element not found");
    }
}