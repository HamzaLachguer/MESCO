


const headerElements = {
  promoModal: {
    showPromoModal: document.querySelector("#show-promo-btn"),
    hidePromoModal: document.querySelector("#close-promo-btn"),
    promoModalContainer: document.querySelector("#promo-modal"),
  },

  navigationMenu: {
    openNavMenuBtn: document.querySelector("#open-nav-menu"),
    closeNavMenuBtn: document.querySelector("#close-menu-btn"),
    navMenuContainer: document.querySelector("#navigation-menu"),
    navigationBar: document.querySelector("#main-navigation-bar"),
  },

  countrySelector: {
    showCountrySelector: document.querySelector("#country-selector"),
    showCountrySelectorMobile: document.querySelector("#country-selector-mobile"),
    countrySelectorContainer: document.querySelector("#country-selector-container"),
    closeCountrySelector: document.querySelector("#close-country-selector"),
  }
}


const status = {
  
}




// function => show promo modal
function showPromoModal() {

  headerElements.promoModal.promoModalContainer.classList.replace("hidden", "grid");
  headerElements.promoModal.promoModalContainer.classList.replace("opacity-0", "opacity-1");
  document.body.classList.toggle("overflow-hidden");

  // update aria attributes
  headerElements.promoModal.promoModalContainer.setAttribute("aria-hidden", false);
  headerElements.promoModal.showPromoModal.setAttribute("aria-expanded", true);
  headerElements.promoModal.hidePromoModal.setAttribute("aria-expanded", true);
}

// function => hide promo modal
function hidePromoModal() {
  
  headerElements.promoModal.promoModalContainer.classList.replace("opacity-1", "opacity-0");
  setTimeout(() => {
    headerElements.promoModal.promoModalContainer.classList.replace("grid", "hidden");
  }, 300);
  document.body.classList.remove("overflow-hidden");
  
  // update aria attributes
  headerElements.promoModal.promoModalContainer.setAttribute("aria-hidden", true);
  headerElements.promoModal.showPromoModal.setAttribute("aria-expanded", false);
  headerElements.promoModal.hidePromoModal.setAttribute("aria-expanded", false);
}


//  promo modal event listeners
function initPromoModal() {
  headerElements.promoModal.showPromoModal.addEventListener('click', showPromoModal);
  headerElements.promoModal.promoModalContainer.addEventListener('click', (e) => {
    if (e.target.closest("#promo-modal-content")) return;
  
    hidePromoModal();
  });
  headerElements.promoModal.hidePromoModal.addEventListener('click', hidePromoModal);
}




// function => show promo modal
function showCountrySelector() {

  headerElements.countrySelector.countrySelectorContainer.classList.replace("hidden", "grid");
  headerElements.countrySelector.countrySelectorContainer.classList.replace("opacity-0", "opacity-1");
  document.body.classList.add("overflow-hidden");

  // update aria attributes
  headerElements.countrySelector.countrySelectorContainer.setAttribute("aria-hidden", false);
  headerElements.countrySelector.showCountrySelector.setAttribute("aria-expanded", true);
  headerElements.countrySelector.closeCountrySelector.setAttribute("aria-expanded", true);
}

// function => hide promo modal
function hideCountrySelector() {
  
  headerElements.countrySelector.countrySelectorContainer.classList.replace("opacity-1", "opacity-0");
  setTimeout(() => {
    headerElements.countrySelector.countrySelectorContainer.classList.replace("grid", "hidden");
  }, 300);
  document.body.classList.remove("overflow-hidden");
  
  // update aria attributes
  headerElements.countrySelector.countrySelectorContainer.setAttribute("aria-hidden", true);
  headerElements.countrySelector.showCountrySelector.setAttribute("aria-expanded", false);
  headerElements.countrySelector.closeCountrySelector.setAttribute("aria-expanded", false);
}


//  promo modal event listeners
function initCountrySelector() {
  headerElements.countrySelector.showCountrySelector.addEventListener('click', showCountrySelector);

  headerElements.countrySelector.showCountrySelectorMobile.addEventListener('click', showCountrySelector);

  headerElements.countrySelector.countrySelectorContainer.addEventListener('click', (e) => {
    if (e.target.closest("#promo-modal-content")) return;
  
    hideCountrySelector();
  });
  headerElements.countrySelector.closeCountrySelector.addEventListener('click', hideCountrySelector);
}



// function => open navigation menu
function openNavMenu() {
  headerElements.navigationMenu.navMenuContainer.classList.replace("hidden", "flex");
  headerElements.navigationMenu.navigationBar.classList.replace("grid", "hidden");

  // update aria attributes
  headerElements.navigationMenu.openNavMenuBtn.setAttribute("aria-expanded", true);
  headerElements.navigationMenu.openNavMenuBtn.setAttribute("aria-expanded", true);
  headerElements.navigationMenu.navMenuContainer.setAttribute("aria-hidden", false);
}

// function => close navigation
function closeNavMenu() {
  headerElements.navigationMenu.navMenuContainer.classList.replace("flex", "hidden");
  headerElements.navigationMenu.navigationBar.classList.replace("hidden", "grid");

  // update aria attributes
  headerElements.navigationMenu.openNavMenuBtn.setAttribute("aria-expanded", false);
  headerElements.navigationMenu.openNavMenuBtn.setAttribute("aria-expanded", false);
  headerElements.navigationMenu.navMenuContainer.setAttribute("aria-hidden", true);
}

//  nav menu event listeners
function initNavigation() {
  headerElements.navigationMenu.openNavMenuBtn.addEventListener('click', openNavMenu);
  headerElements.navigationMenu.closeNavMenuBtn.addEventListener('click', closeNavMenu);

  headerElements.navigationMenu.navMenuContainer.addEventListener('click', (e) => {
    if (e.target.closest("#nav-menu-container")) return;

    closeNavMenu();
  })
}



// 
document.addEventListener("DOMContentLoaded", () => {
  initPromoModal();
  initNavigation();
  initCountrySelector();
})
