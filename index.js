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

let Sex_audio = null
let Is_playing = false;
let chair_count = 0;

window.onload = function () {
    const Splash_view = document.getElementById("Splash");
    Splash_view.innerHTML = Choose_splash();

    const Splash_box = document.getElementById("Splash_box");
    Splash_box.classList.add("vibrate-1");
}

function disableEnable(Mybutton, Time){
    document.getElementById(Mybutton).disabled = true
    setTimeout(() => EnableButton(Mybutton), Time)
}

function EnableButton(Mybutton, time){
    document.getElementById(Mybutton).disabled = false
}

function Call_seth(){
    disableEnable("Call_seth", 14000)
    const audio = new Audio("./sounds/talk.mp3");
    audio.play()
}

function Sex_time(){
    const button = document.getElementById("Sex_button");

    if(!Sex_audio){
        Sex_audio = new Audio("./sounds/theme.mp3")
    }

    if(!Is_playing){
        Sex_audio.play()
        Is_playing = true;
        button.textContent = "sexn't"
    }else{
        Sex_audio.pause()
        Is_playing = false;
        button.textContent = "sex"
    }
}

function Get_chair() {
    return Chair_images[Math.floor(Math.random() * Chair_images.length)]
}

function Add_chair() {
    chair_count++;
    if(chair_count == 100){
        window.alert("The amount of chairs in the room fills you with relaxation");
    }
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
// setInterval(function () {
//     if (Math.random() < 0.02) {
//         window.alert("DrMrCaley: Zoom?")
//     }
// }, 1000);