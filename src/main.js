// Create variables targetting the relevant DOM elements here 👇
var showNewBtn = document.querySelector(".random-cover-button");
var makeOwnCoverBtn = document.querySelector(".make-new-button");
var homeBtn = document.querySelector(".home-button");
var saveCoverBtn = document.querySelector(".save-cover-button");
var viewSavedBtn = document.querySelector(".view-saved-button");

var makeMyBookBtn = document.querySelector(".create-new-book-button");

var homePage = document.querySelector(".home-view");
var makeOwnCoverPage = document.querySelector(".form-view");
var viewSavedCoversPage = document.querySelector(".saved-view");
var miniDisplayIcons = document.querySelectorAll(".mini-cover-icons");

var mainCoverImg = document.querySelector(".cover-image");
var mainCoverTitle = document.querySelector(".cover-title");
var mainCoverTagline = document.querySelector(".tagline");
var mainCoverTagline1 = document.querySelector(".tagline-1");
var mainCoverTagline2 = document.querySelector(".tagline-2");

var coverInputField = document.querySelector(".user-cover");
var titleInputField = document.querySelector(".user-title");
var desc1InputField = document.querySelector(".user-desc1");
var desc2InputField = document.querySelector(".user-desc2");

var savedCoversSection = document.querySelector(".saved-covers-section");
// We've provided a few variables below
var savedCovers = [];

// Add your event listeners here 👇

window.addEventListener("DOMContentLoaded", function () {
  createRandom();
});

showNewBtn.addEventListener("click", createRandom);

makeOwnCoverBtn.addEventListener("click", clickedMakeOwnCover);

viewSavedBtn.addEventListener("click", clickedViewSavedCover);

homeBtn.addEventListener("click", clickedHomeButton);

makeMyBookBtn.addEventListener("click", createnewCoverObj);

saveCoverBtn.addEventListener("click", saveNewCover);


// Create your event handlers and other functions here 👇

function saveNewCover(event) {
  event.preventDefault();
  var currentCover = {
    id: Date.now(),
    coverImg: mainCoverImg.getAttribute("src"),
    title: `${mainCoverTitle.innerText}`,
    tagline1: `${mainCoverTagline1.innerText}`,
    tagline2: `${mainCoverTagline2.innerText}`,
  };

  var isDuplicate = false;

  for (var i = 0; i < savedCovers.length; i++) {
    if (
      savedCovers[i].coverImg === currentCover.coverImg &&
      savedCovers[i].title === currentCover.title &&
      savedCovers[i].tagline1 === currentCover.tagline1 &&
      savedCovers[i].tagline2 === currentCover.tagline2
    ) {
      isDuplicate = true;
    }
  }
  if (!isDuplicate) {
    savedCovers.push(currentCover);
  }
}

for (var i = 0; i < savedCovers.length; i++) {
  if (
    savedCovers[i].coverImg === currentCover.coverImg &&
    savedCovers[i].title == currentCover.title &&
    savedCovers[i].tagline1 == currentCover.tagline1 &&
    savedCovers[i].tagline2 == currentCover.tagline2
  ) {
    savedCovers.splice(i, 1);
  }
}

viewSavedCoversPage.addEventListener("click", (e) => {
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == e.target.id) {
      savedCovers.splice(i, 1);
    }
  }
  clickedViewSavedCover();
});

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
  descriptors.push(desc2InputField.value);

  mainCoverTitle.innerText = newUserCover.title;
  mainCoverImg.src = newUserCover.coverImg;
  mainCoverTagline1.innerText = newUserCover.tagline1;
  mainCoverTagline2.innerText = newUserCover.tagline2;

  clickedHomeButton();
}


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

function clickedViewSavedCover() {
  checkPage(viewSavedCoversPage);
  removeElementOrPage(homePage);
  removeElementOrPage(showNewBtn);
  removeElementOrPage(makeOwnCoverPage);
  removeElementOrPage(saveCoverBtn);
  showElementOrPage(homeBtn);

  var newHTML = `<section class="saved-view saved-covers-section">`;
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
  </section>`
  }
  newHTML += `</section>`;
  viewSavedCoversPage.innerHTML = newHTML;
}

function clickedHomeButton() {
  checkPage(homePage);
  removeElementOrPage(homeBtn);
  showElementOrPage(showNewBtn);
  showElementOrPage(saveCoverBtn);
  removeElementOrPage(makeOwnCoverPage);
  removeElementOrPage(viewSavedCoversPage);
  removeElementOrPage(savedCoversSection);
  removeElementOrPage(miniDisplayIcons);
}


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