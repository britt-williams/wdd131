const today = new Date();
const year = document.querySelector("#year");
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

year.textContent = today.getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

