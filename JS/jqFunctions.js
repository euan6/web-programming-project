$(document).ready(function() {
    // show the banner when the page loads
    $("#cookieBanner").slideDown();

    // close the banner when the "X" is clicked
    $("#closeBanner").on("click", function() {
        $("#cookieBanner").slideUp();
    });
});