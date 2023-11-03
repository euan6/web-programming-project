// creates a dynamically loading p inside class 'history'
function historyInfo(description) {
    // create the p tag with description
    var p = document.createElement("p");
    p.textContent = description;

    // adds the p to the 'history' class
    var targetElement = document.querySelector("#history");
    if (targetElement) {
        targetElement.appendChild(p)
    } else {
        alert("Target element not found");
    }
}

// adds the p to the 'history class
window.addEventListener("load", function() {
    // adds p element for week 1
    historyInfo("Week 1 - Basic HTML, CSS and Javascript files were created and uploaded to GitHub");

    // adds p element for week 2
    historyInfo("Week 2 - Skeleton structure created with a header, navbar, main section and a footer");

    // adds p element for week 3
    historyInfo("Week 3 - New page created for displaying products with product cards and nav bar styling updated");

    // adds p element for week 4
    historyInfo("Week 4 - Products Page updated along with small styling changes across pages");

    // adds p element for week 5
    historyInfo("Week 5 - Javascript onmouse functions started for image changes and xhr used to load header, nav bar and footer");

    // adds p element for week 6
    historyInfo("Week 6 - Forms created for signup and login pages and clock added inside footer");

    // adds p element for week 7
    historyInfo("Week 7 - Media queries added to make more responsive and this page + reviews page created");

    // adds p element for week 8
    historyInfo("Week 8 - Cookie Banner fiex to the bottom of website with link, done using jQuery");

    // adds p element for week 9
    historyInfo("Week 9 - ");

    // adds p element for week 10
    historyInfo("Week 10 - ");

    // adds p element for week 11
    historyInfo("Week 11 - ");

    // adds p element for week 12
    historyInfo("Week 12 - ");
});