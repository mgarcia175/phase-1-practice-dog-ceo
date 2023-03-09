console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(dogData => dogData.message.forEach(image => renderOneDog(image)))

function renderOneDog(dog) {
    const div = document.querySelector("#dog-image-container")
    let picture = document.createElement("img")
    picture.src = dog
    div.append(picture)
}

let breedArray = []

fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(function(breedData) {
    breedArray = Object.keys(breedData.message)
    for (const dogBreed of breedArray) {
        renderDogBreed(dogBreed);
    }
})

function renderDogBreed(breed) {
    const ul = document.querySelector("#dog-breeds")
    let breedLi = document.createElement("li")
    breedLi.innerText = breed
    ul.appendChild(breedLi)

    breedLi.addEventListener("click", function() {
        breedLi.style.color = "red"
    })
}

const dropDown = document.querySelector("#breed-dropdown")

dropDown.addEventListener("change", function() {
    const filterArray = breedArray.filter(function(breed) {
        if(dropDown.value === breed[0]) {
            return breed
        }
    })
    const ul = document.querySelector("#dog-breeds")
    ul.innerHTML = ""
    for (const breed of filterArray) {
        renderDogBreed(breed);
    }
})