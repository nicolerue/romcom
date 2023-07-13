// Create variables targetting the relevant DOM elements here 👇
var mainCoverImg = document.querySelector('.cover-image')
var mainCoverTitle = document.querySelector('.cover-title')
var mainCoverTagline = document.querySelector('.tagline')
var mainCoverTagline1 = document.querySelector('.tagline-1')
var mainCoverTagline2 = document.querySelector('.tagline-2')

var showNewBtn = document.querySelector('.random-cover-button')

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
showNewBtn.addEventListener("click", function() {
  console.log(showRandomCover())
  console.log(showRandomTitle())
  console.log(showRandomDescriptors())
})


// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

function showRandomCover() {
  var randomCover = covers[getRandomIndex(covers)]
    return randomCover;
}

function showRandomTitle() {
  var randomTitle = titles[getRandomIndex(titles)]
    return randomTitle
}

function showRandomDescriptors() {
  var randomDescriptor1 = descriptors[getRandomIndex(descriptors)]
  var randomDescriptor2 = descriptors[getRandomIndex(descriptors)]
    return randomDescriptor1 + " " + randomDescriptor2
}