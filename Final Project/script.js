
let portalOne = document.querySelector(".portalOne");
let portalTwo = document.querySelector(".portalTwo");
let portalThree = document.querySelector(".portalThree");
let portalFour = document.querySelector(".portalFour");
// let home = document.querySelector(".universeHome");
let title = document.querySelector(".A")
let spaceship = document.querySelector(".ship");
let spaceSection = document.querySelector(".B");


function universeHome() {
    document.body.style.backgroundImage = "url(images/universe_background.png)";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = "cover";
    portalOne.style.display = "block";
    portalTwo.style.display = "block";
    portalThree.style.display = "block";
    portalFour.style.display = "block";
    title.style.display = "block";
    spaceship.classList.add("spaceshipHidden");
    spaceship.classList.remove("spaceship");
    // spaceship.classList.add("bottom");
    // spaceship.classList.remove("bottomHidden");
}

function worldOne() {
    document.body.style.backgroundImage = "url(images/worldOne.jpeg)";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = "cover";
    portalOne.style.display = "none";
    portalTwo.style.display = "none";
    portalThree.style.display = "none";
    portalFour.style.display = "none";
    title.style.display = "none";
    spaceship.classList.remove("spaceshipHidden");
    spaceship.classList.add("spaceship");
    spaceSection.classList.remove("bottomHidden");
    spaceSection.classList.add("bottom");
}

function worldTwo() {
    document.body.style.backgroundImage = "url(images/worldTwo.png)";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = "cover";
    portalOne.style.display = "none";
    portalTwo.style.display = "none";
    portalThree.style.display = "none";
    portalFour.style.display = "none";
    title.style.display = "none";
    spaceship.classList.remove("spaceshipHidden");
    spaceship.classList.add("spaceship");
    spaceSection.classList.add("bottom");
    spaceSection.classList.remove("bottomHidden");
}

function worldThree() {
    document.body.style.backgroundImage = "url(images/worldThree.png)";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = "cover";
    portalOne.style.display = "none";
    portalTwo.style.display = "none";
    portalThree.style.display = "none";
    portalFour.style.display = "none";
    title.style.display = "none";
    spaceship.classList.remove("spaceshipHidden");
    spaceship.classList.add("spaceship");
    spaceSection.classList.add("bottom");
    spaceSection.classList.remove("bottomHidden");
}

function worldFour() {
    document.body.style.backgroundImage = "url(images/worldFive.png)";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = "cover";
    portalOne.style.display = "none";
    portalTwo.style.display = "none";
    portalThree.style.display = "none";
    portalFour.style.display = "none";
    title.style.display = "none";
    spaceship.classList.remove("spaceshipHidden");
    spaceship.classList.add("spaceship");
    spaceSection.classList.add("bottom");
    spaceSection.classList.remove("bottomHidden");
}

portalOne.addEventListener("click", worldOne);
portalTwo.addEventListener("click", worldTwo);
portalThree.addEventListener("click", worldThree);
portalFour.addEventListener("click", worldFour);
spaceship.addEventListener("click", universeHome);

