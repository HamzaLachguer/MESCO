


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
  }, 300)
  
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
})
