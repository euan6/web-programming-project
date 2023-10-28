// creates a dynamically loading p inside class 'history'
function historyInfo(description) {
    // create the p tag with description
    var p = document.createElement("p");
    p.textContent = description;

    var targetElement = document.querySelector(".history");
    if (targetElement) {
        targetElement.appendChild(p)
    } else {
        alert("Target element not found");
    }
}

//adds the p to the 'history class
window.addEventListener("load", function() {
    // adds p element for week 1
    historyInfo("Week 1 - Basic HTML, CSS and Javascript files were created and uploaded to GitHub.");

    // adds p element for week 2
    historyInfo("Week 2 - Basic HTML, CSS and Javascript files were created and uploaded to GitHub.");

    // adds p element for week 3
    historyInfo("Week 3 - Basic HTML, CSS and Javascript files were created and uploaded to GitHub.");

    // adds p element for week 4
    historyInfo("Week 4 - Basic HTML, CSS and Javascript files were created and uploaded to GitHub.");

    // adds p element for week 5
    historyInfo("Week 5 - Basic HTML, CSS and Javascript files were created and uploaded to GitHub.");

    // adds p element for week 6
    historyInfo("Week 6 - Basic HTML, CSS and Javascript files were created and uploaded to GitHub.");

    // adds p element for week 7
    historyInfo("Week 7 - Basic HTML, CSS and Javascript files were created and uploaded to GitHub.");
});