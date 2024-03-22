document.addEventListener("DOMContentLoaded", function() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("welcomeMessage").textContent = "Welcome, " + userName + "!";
        document.getElementById("welcomePopup").style.display = "block";
    }
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("welcomePopup").style.display = "none";
});

document.getElementById("homeLink").addEventListener("click", function() {
    showPage("homeSection");
});

document.getElementById("toursLink").addEventListener("click", function() {
    showPage("toursSection");
});

document.getElementById("aboutLink").addEventListener("click", function() {
    showPage("aboutSection");
});

document.getElementById("contactLink").addEventListener("click", function() {
    showPage("contactSection");
});

document.getElementById("hideButton").addEventListener("click", function() {
    hideTours();
});

function showPage(pageId) {
    var pages = document.querySelectorAll(".page");
    pages.forEach(function(page) {
        page.style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
}

function hideTours() {
    var tourList = document.getElementById("tourList");
    if (tourList.style.display === "none") {
        tourList.style.display = "block";
        document.getElementById("hideButton").textContent = "Hide Tours";
    } else {
        tourList.style.display = "none";
        document.getElementById("hideButton").textContent = "Show Tours";
    }
}
