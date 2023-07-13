// Create variables targetting the relevant DOM elements here 👇
var mainCoverImg = document.querySelector(".cover-image");
var mainCoverTitle = document.querySelector(".cover-title");
var mainCoverTagline = document.querySelector(".tagline");
var mainCoverTagline1 = document.querySelector(".tagline-1");
var mainCoverTagline2 = document.querySelector(".tagline-2");

var showNewBtn = document.querySelector(".random-cover-button");

// We've provided a few variables below
var savedCovers = [
  createCover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];
var currentCover

// Add your event listeners here 👇

window.addEventListener("DOMContentLoaded", () => {
  createRandom();
});

showNewBtn.addEventListener("click", function () {
  createRandom();
});


// Create your event handlers and other functions here 👇
var createRandom = function () {
  var randIndexCovers = getRandomIndex(covers);
  var randIndexTitles = getRandomIndex(titles);
  var randIndexDescriptors1 = getRandomIndex(descriptors);
  var randIndexDescriptors2 = getRandomIndex(descriptors);
  var randCover = covers[randIndexCovers];
  var randTitle = titles[randIndexTitles];
  var randDesc1 = descriptors[randIndexDescriptors1];
  var randDesc2 = descriptors[randIndexDescriptors2];
  var newCover = createCover(randCover, randTitle, randDesc1, randDesc2);
  mainCoverTitle.innerText = newCover.title;
  mainCoverImg.src = randCover;
  mainCoverTagline1.innerText = randDesc1;
  mainCoverTagline2.innerText = randDesc2;
};

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
    tagline2: descriptor2,
  };
  return cover;
}

