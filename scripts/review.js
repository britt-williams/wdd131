const today = new Date();
const year = document.querySelector("#year");

year.textContent = today.getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

function getReviewCount() {
    let reviewCount = localStorage.getItem("reviewCount");
    if (reviewCount) {
        return parseInt(reviewCount);
    }
    else {
        return 0;
    }
}

function setReviewCount() {
    localStorage.setItem("reviewCount", reviewCount);
}

let reviewCount = getReviewCount();

reviewCount++;
setReviewCount();
