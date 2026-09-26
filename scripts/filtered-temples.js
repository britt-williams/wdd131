const today = new Date();
const year = document.querySelector("#year");
const templeCards = document.querySelector("#temple-cards")
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const smallLink = document.querySelector("#small");
const largeLink = document.querySelector("#large");
const navLinks = document.querySelectorAll(".navigation a");

year.textContent = today.getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Hamilton New Zealand",
        location: "Hamilton City, New Zealand",
        dedicated: "1958, April, 20",
        area: 45251,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/c5d27d196f7b58ce3267af61a746073ec7e94ac2/full/!1200,/0/default"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
    },
    {
        templeName: "Perth Australia",
        location: "Perth City, Australia",
        dedicated: "2001, May, 20",
        area: 10700,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/749035c1a6443b88257c4c5011ffc57222af3164/full/!1200,/0/default"
    }
];

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        link.classList.add("active");
    });
});

homeLink.addEventListener("click", () => {
    createTempleCard(temples)
});

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => (temple.area < 10000)));
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => (temple.area > 90000)));
});

function createTempleCard(filteredTemples) {
    document.querySelector("#temple-cards").innerHTML = "";
    filteredTemples.forEach(temple => {
        const card = document.createElement("section");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        const locationTitle = document.createElement("span");
        locationTitle.textContent = "Location: "
        location.append(locationTitle, temple.location);

        const dedicated = document.createElement("p");
        const dedicatedTitle = document.createElement("span");
        dedicatedTitle.textContent = "Dedicated: "
        dedicated.append(dedicatedTitle, temple.dedicated);

        const size = document.createElement("p");
        const sizeTitle = document.createElement("span");
        sizeTitle.textContent = "Area: "
        size.append(sizeTitle, temple.area, " sq ft");

        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.loading = "lazy";

        card.append(name, location, dedicated, size, templeImage);
        templeCards.append(card);
    });
}

createTempleCard(temples);