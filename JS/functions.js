// changes the image of a product
function changeImage(imageSrc, imageId) {
    var image = document.getElementById(imageId);
    image.src = imageSrc;
}

// creates a pop up box when one of the app store images is clicked
function showConfirmation(downloadType) {
    var result = window.confirm("Are you sure you want to download on the " + downloadType + " Store?");
    if (result) {
        alert("Starting Download");
    } else {
        alert("Cancelling Download");
    }
}

// checks every link class for the filename and if it is current file, add active class to it
function highlightCurrentPage() {
    var currentPageUrl = window.location.href;
    var navbarLinks = document.querySelectorAll(".link");
    for (var i = 0; i < navbarLinks.length; i++) {
        var link = navbarLinks[i];
        var linkHref = link.getAttribute("href");
        if (currentPageUrl.endsWith(linkHref)) {
            link.classList.add("active");
        }
    }
}

// creates a clock which displays the current time
function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timeString;
}

// creates a format of the current day, month and year
function updateDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const formattedDate = `current UK time on ${dayOfWeek} the ${dayOfMonth}${getDaySuffix(dayOfMonth)} of ${month} ${year}`;

    const currentDayElement = document.getElementById("currentDay");
    if (currentDayElement) {
        currentDayElement.textContent = formattedDate;
    }
}

// calculates the suffix for the current day
function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return "th";
    }
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}