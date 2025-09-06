


const headerElements = {
  promoModal: {
    showPromoModal: document.querySelector("#show-promo-btn"),
    hidePromoModal: document.querySelector("#close-promo-btn"),
    promoModalContainer: document.querySelector("#promo-modal"),
  },
}


const status = {
  
}




// function => show promo modal
function showPromoModal() {

  headerElements.promoModal.promoModalContainer.classList.replace("hidden", "grid");
  headerElements.promoModal.promoModalContainer.classList.replace("opacity-0", "opacity-1");

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

// 
document.addEventListener("DOMContentLoaded", () => {
  initPromoModal();
})
