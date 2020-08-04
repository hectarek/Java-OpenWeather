const conditions = {
    "clear sky": "https://images.unsplash.com/photo-1517495306984-f84210f9daa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "few clouds": "https://images.unsplash.com/photo-1548268770-66184a21657e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80",
    "scattered clouds": "https://images.unsplash.com/photo-1563421030-f2ea84357d4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    "broken clouds": "https://images.unsplash.com/photo-1498015583783-4abcab4a760a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    "shower rain": "https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80",
    "rain":"https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "thunderstorm": "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "snow": "https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80",
    "mist": "https://images.unsplash.com/photo-1438803235109-d737bc3129ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
}

const submitButton = document.getElementById("submitButton")
const conditionsText = document.getElementById("conditions");
const mainContainer = document.getElementById("main-container");


async function getText() {
    let text = await conditionsText.textContent;
    console.log(text);
}

submitButton.addEventListener("submit", updateBackground)

function updateBackground(e) {
    mainContainer.style.backgroundImage = `url(${conditions[text]})`;
    console.log(mainContainer.style.backgroundImage);
}


