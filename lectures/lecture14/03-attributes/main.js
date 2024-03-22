function showCat() {
    console.log("This is a dog");
    const img = document.querySelector("#current-image");
    img.src = "images/cat.jpg"
    caption.innerHTML = "Cat";
}

function showDog() {
    console.log("This is a dog");
    const img = document.querySelector("#current-image");
    const caption = document.querySelector("#caption");
    img.src = "images/dog.jpg";
    caption.innerHTML = "Puppy";


}

function showBird() {
    console.log("This is a bird");
    const img = document.querySelector("#current-image");
    const caption = document.querySelector("#caption");
    img.src = "images/bird.jpg";
    caption.innerHTML = "Bird";
}

function showFish() {
    console.log("This is a fish");
    const img = document.querySelector("#current-image");
    const caption = document.querySelector("#caption");
    img.src = "images/fish.jpg";
    caption.innerHTML = "fish";
}
