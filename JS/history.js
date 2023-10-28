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

