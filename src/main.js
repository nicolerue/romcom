// Create variables targetting the relevant DOM elements here 👇

//ALL BUTTONS NAV BAR
var showNewBtn = document.querySelector(".random-cover-button");
var makeOwnCoverBtn = document.querySelector(".make-new-button");
var homeBtn = document.querySelector(".home-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var viewSavedBtn = document.querySelector(".view-saved-button");

//BUTTON - MAKE YOUR OWN COVER
var makeMyBookBtn = document.querySelector(".create-new-book-button");

//ALL PAGES
var homePage = document.querySelector(".home-view");
var makeOwnCoverPage = document.querySelector(".form-view");
var viewSavedCoversPage = document.querySelector(".saved-view")

// Main page random Cover
var mainCoverImg = document.querySelector(".cover-image");
var mainCoverTitle = document.querySelector(".cover-title");
var mainCoverTagline = document.querySelector(".tagline");
var mainCoverTagline1 = document.querySelector(".tagline-1");
var mainCoverTagline2 = document.querySelector(".tagline-2");

//Form Input Fields
var coverInputField = document.querySelector(".user-cover");
var titleInputField = document.querySelector(".user-title");
var desc1InputField = document.querySelector(".user-desc1");
var desc2InputField = document.querySelector(".user-desc2");

//SAVED COVERS SECTION
var savedCoversSection = document.querySelector(".saved-covers-section");
// We've provided a few variables below
var savedCovers = [
  createCover(
    "http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
    "Sunsets and Sorrows",
    "sunsets",
    "sorrows"
  ),
];

// Add your event listeners here 👇

window.addEventListener("DOMContentLoaded", () => {
  createRandom();
});

showNewBtn.addEventListener("click", createRandom);

makeOwnCoverBtn.addEventListener("click", clickedMakeOwnCover);

viewSavedBtn.addEventListener("click", clickedViewSavedCorner);

homeBtn.addEventListener("click", clickedHomeButton);

makeMyBookBtn.addEventListener("click", createnewCoverObj);

saveCoverBtn.addEventListener("click", saveNewCover);

// Create your event handlers and other functions here 👇
//function for saving the cover
function saveNewCover(event) {
  event.preventDefault();
  var currentCover = {
    id: Date.now(),
    coverImg: mainCoverImg.getAttribute("src"),
    title: `${mainCoverTitle.innerText}`,
    tagline1: `${mainCoverTagline1.innerText}`,
    tagline2: `${mainCoverTagline2.innerText}`,
  };

  var isDuplicate = savedCovers.some(function(cover) {
    return cover.coverImg === currentCover.coverImg;
  });
  
   if (isDuplicate === false) {
    savedCovers.push(currentCover);
  }
}


// console.log(savedCovers);

// for (var i = 0; i < savedCovers.length; i++) {
//   if (savedCovers[i] === currentCover) {
//     !savedCovers.push(currentCover);
//   } else {
//     savedCovers.push(currentCover);
//   }
// }
// }

//function for creating a new cover obj
function createnewCoverObj(event) {
  event.preventDefault();
  var newUserCover = createCover(
    coverInputField.value,
    titleInputField.value,
    desc1InputField.value,
    desc2InputField.value
  );
  covers.push(coverInputField.value);
  titles.push(titleInputField.value);
  descriptors.push(desc1InputField.value);
  descriptors.push(desc2InputField);

  clickedHomeButton();
  removeElementOrPage(makeOwnCoverPage);

  mainCoverTitle.innerText = newUserCover.title;
  mainCoverImg.src = newUserCover.coverImg;
  mainCoverTagline1.innerText = newUserCover.tagline1;
  mainCoverTagline2.innerText = newUserCover.tagline2;
}

// Functions for toggling between buttons

function showElementOrPage(element) {
  element.classList.remove("hidden");
}

function removeElementOrPage(element) {
  element.classList.add("hidden");
}

function checkPage(page) {
  if (page.classList.contains("hidden")) {
    page.classList.remove("hidden");
  }
}

function clickedMakeOwnCover() {
  checkPage(makeOwnCoverPage);
  removeElementOrPage(homePage);
  removeElementOrPage(showNewBtn);
  removeElementOrPage(viewSavedCoversPage);
  removeElementOrPage(saveCoverBtn);
  showElementOrPage(homeBtn);

}

function clickedViewSavedCorner() {
  checkPage(viewSavedCoversPage);
  removeElementOrPage(homePage);
  removeElementOrPage(showNewBtn);
  removeElementOrPage(makeOwnCoverPage);
  removeElementOrPage(saveCoverBtn);
  showElementOrPage(homeBtn);

var newHTML = `<section class="saved-view saved-covers-section">`; //
  for (var i = 0; i < savedCovers.length; i++) {
    newHTML += `<section class="mini-cover">
    <img class="mini-cover" src="${savedCovers[i].coverImg}" />
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">
      A tale of <span>${savedCovers[i].tagline1}</span> and
      <span>${savedCovers[i].tagline2}</span>
    </h3>
    <img class="price-tag" src="./assets/price.png" />
    <img class="overlay" src="./assets/overlay.png" />
  </section>`;
  }
  newHTML += `</section`; //
  viewSavedCoversPage.innerHTML = newHTML;
}

// .saved-view {
//   padding: 30px;
// }

// .saved-covers-section {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-around;
// }

// .mini-cover {
//   height: 40vh;
//   margin: 1.3vh auto;
//   position: relative;
//   width: 14vw;
// }

// .mini-cover > .cover-title {
//   bottom: 45px;
//   font-size: 40px;
// }

// .mini-cover > .cover-title::first-letter {
//   font-size: 60px;
// }

// .mini-cover > .tagline {
//   background: RGBA(126, 84, 150, .5);
//   bottom: 5px;
//   color: #fcf4dc;
//   font-size: 10px;
//   padding: 5px;
// }

function clickedHomeButton() {
  // checkPage(homePage);
  // removeElementOrPage(homeBtn);
  // showElementOrPage(showNewBtn);
  // showElementOrPage(saveCoverBtn);
  // removeElementOrPage(makeOwnCoverPage);
  showElementOrPage(homePage);
  removeElementOrPage(makeOwnCoverPage);
  removeElementOrPage(viewSavedCoversPage);
  showElementOrPage(showNewBtn);
  showElementOrPage(saveCoverBtn);
}

// creating random funcctions
function createRandom() {
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
}

// creating a random number
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//creating a book object
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

// Original Code to be refactored:
// var clickedMakeOwnCover = function () {
//   if (makeOwnCoverPage.classList.contains("hidden")) {
//     makeOwnCoverPage.classList.remove("hidden");
//   }
//   homePage.classList.add("hidden");
//   homeBtn.classList.remove("hidden");
//   showNewBtn.classList.add("hidden");
//   saveCoverBtn.classList.add("hidden");
// };

// var clickedViewSavedCorner = function () {
//   if (viewSavedCoversPage.classList.contains("hidden")) {
//     viewSavedCoversPage.classList.remove("hidden");
//   }
//   homePage.classList.add("hidden");
//   homeBtn.classList.remove("hidden");
//   showNewBtn.classList.add("hidden");
//   saveCoverBtn.classList.add("hidden");
// };

// var clickedHomeButton = function () {
//   if (homePage.classList.contains("hidden")) {
//     homePage.classList.remove("hidden");
//   }
//   homeBtn.classList.add("hidden");
//   showNewBtn.classList.remove("hidden");
//   saveCoverBtn.classList.remove("hidden");
// };

// window.addEventListener("DOMContentLoaded", () => {
//   createRandom();
// });

// showNewBtn.addEventListener("click", function () {
//   createRandom();
// });

// makeOwnCoverBtn.addEventListener("click", function () {
//   clickedMakeOwnCover();
// });

// viewSavedBtn.addEventListener("click", function () {
//   clickedViewSavedCorner();
// });

// homeBtn.addEventListener("click", function () {
//   clickedHomeButton();
// });
