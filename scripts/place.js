const today = new Date();
const year = document.querySelector("#year");

year.textContent = today.getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 21;
const windSpeed = 8;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * windSpeed ** 0.16) + (0.3965 * temperature * (windSpeed ** 0.16));
}

let result;

if (temperature <= 10 && windSpeed > 4.8) {
    result = calculateWindChill(temperature, windSpeed).toFixed(1);
}
else {
    result = 'N/A';
}

document.getElementById("windChill").textContent = result;