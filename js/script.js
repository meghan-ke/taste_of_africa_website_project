// Features:
// - Mobile menu
// - Recipe region filter
// - Favorite
// - Contact form

// 1. MOBILE MENU
function setupMenuToggle() {
    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    if (!button || !nav) return;

    button.addEventListener("click", function() {
        const isOpen = nav.classList.toggle("open");
        button.setAttribute("aria-expanded", isOpen);
    });
}

// 2. RECIPE REGION FILTER
function setupRecipeFilter() {
    const buttons = document.querySelectorAll(".filter-button");
    const cards = document.querySelectorAll(".recipe-card");
    if (buttons.length === 0 || cards.length === 0) return;

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedRegion = button.dataset.region;

            // Move the highlight to the clicked button
            buttons.forEach(function (other) {
                other.classList.remove("active");
            });
            button.classList.add("active");

            // loop through every card and hide some and display others depending on the condition
            cards.forEach(function (card) {
                const matches = selectedRegion === "all" || card.dataset.region === selectedRegion;
                card.classList.toggle("hidden", !matches);
            });
        });
    });
}

// Favorite functionality
const FAVORITES_KEY = 'tastesOfAfricaFavorites';

//read the saved list
function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    } catch (error) {
        return [];
    }
}

//Write the list back to the browser
function saveFavorites(list) {
    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
    } catch (error) {
        console.error("Failed to save favorites:", error);
    }
}

//Make on heart button look saved (red, filled) 
function showFavoriteState(button, isSaved) {
    button.classList.toggle("saved", isSaved);
    button.setAttribute("aria-pressed", isSaved);
    button.innerHTML = isSaved ? "&#9829;" : "&#9825;";
}

function setupFavorites() {
  const buttons = document.querySelectorAll(".fav-button");
  if (buttons.length === 0) return;

  let favorites = getFavorites();

  buttons.forEach(function (button) {
    const id = button.dataset.id;                       // reads data-id

    // On page load: restore the saved look
    showFavoriteState(button, favorites.includes(id));

    // On click: add or remove this recipe, then save
    button.addEventListener("click", function () {
      if (favorites.includes(id)) {
        favorites = favorites.filter(function (savedId) {
          return savedId !== id;                        // remove it
        });
      } else {
        favorites.push(id);                             // add it
      }
      saveFavorites(favorites);
      showFavoriteState(button, favorites.includes(id));
    });
  });
}

// 4. CONTACT FORM
   
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const message = document.getElementById("message");
  const error = document.getElementById("message-error");
  const success = document.getElementById("form-success");
  const successName = document.getElementById("success-name");

  form.addEventListener("submit", function (event) {
    event.preventDefault();   // stop the browser from sending the form

    // Message must be MORE than 20 characters (spaces at the ends do not count)
    if (message.value.trim().length <= 20) {
      error.hidden = false;
      message.setAttribute("aria-invalid", "true");
      message.focus();
      return;                 // stop here, keep the form visible
    }

    // Valid: build the thank-you with the visitor's name.
    // textContent (not innerHTML) makes sure typed text is never run as HTML.
    successName.textContent = nameInput.value.trim();
    form.hidden = true;
    success.hidden = false;
  });

  // Remove the error as soon as the message is long enough
  message.addEventListener("input", function () {
    if (message.value.trim().length > 20) {
      error.hidden = true;
      message.removeAttribute("aria-invalid");
    }
  });
}


/* ---------------------------------------------------------------------
   START EVERYTHING once the page has loaded
   --------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  setupMenuToggle();
  setupRecipeFilter();
  setupFavorites();
  setupContactForm();
});