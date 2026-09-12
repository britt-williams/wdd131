const today = new Date();
const year = document.querySelector("#year");

year.textContent = today.getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;