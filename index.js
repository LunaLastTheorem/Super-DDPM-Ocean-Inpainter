const splash = [
    "now with more noise!",
    "MrDrCaley approved!",
    "This time it will learn!",
    "Now with a better loss function",
    "Now with Divergence-free noise!",
    "Frying Dr. Cao's server since 2025",
    "Sponsored by the Rieke vending machine",
    "Not enough chairs!",
    "Now with a killer playlist!"
]

const Chair_images = [
    "./src/chair0.jpg",
    "./src/chair1.png",
    "./src/chair2.jpg",
    "./src/chair3.jpg",
    "./src/chair4.jpg",
    "./src/chair5.jpg"
]

window.onload = function () {
    const Splash_view = document.getElementById("Splash");
    Splash_view.innerHTML = Choose_splash();

    const Splash_box = document.getElementById("Splash_box");
    Splash_box.classList.add("vibrate-1");
}

function Get_chair() {
    return Chair_images[Math.floor(Math.random() * Chair_images.length)]
}

function Add_chair() {
    console.log("Appending chair");

    const Chair_space = document.getElementById("Chair_space");
    const Chair_image_element = document.createElement("img")

    Chair_image_element.src = Get_chair()
    Chair_image_element.classList.add("vibrate-1")
    Chair_space.appendChild(Chair_image_element)
}

function Choose_splash() {
    return splash[Math.floor(Math.random() * splash.length)];
}

function Noise_function() {
    console.log("divergence free noise")
}

// main game loop
setInterval(function () {
    if (Math.random() < 0.05) {
        window.alert("DrCaley: Zoom?")
    }
}, 1000);