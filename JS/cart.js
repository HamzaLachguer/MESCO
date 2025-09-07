

function getElement(elId) {
  const element = document.querySelector(`#${elId}`);

  if (!element) {
    console.warn("Element not found!")
  }
  return element;
};

const openCartBtn = getElement("open-cart");
const closeCartBtn = getElement("close-cart-btn");
const cartContainer = getElement("cart-section");

console.log(openCart)

// open cart
function openCart() {
  cartContainer.classList.replace("hidden", "flex");
  cartContainer.classList.replace("opacity-0", "opacity-1");
  document.body.classList.add("overflow-hidden");

  //
  openCartBtn.setAttribute("aria-expanded", true);
  closeCartBtn.setAttribute("aria-expanded", true);
  cartContainer.setAttribute("aria-hidden", false);
}

// open cart
function closeCart() {
  
  cartContainer.classList.replace("opacity-1", "opacity-0");
  document.body.classList.remove("overflow-hidden");
  setTimeout(() => cartContainer.classList.replace("flex", "hidden"), 500)

  //
  openCartBtn.setAttribute("aria-expanded", false);
  closeCartBtn.setAttribute("aria-expanded", false);
  cartContainer.setAttribute("aria-hidden", true);
}

// event listerners
function initCart() {
  openCartBtn.addEventListener('click', openCart);
  cartContainer.addEventListener('click', (e) => {
    if (e.target.closest("#cart-container")) return;

    closeCart()
  })
  closeCartBtn.addEventListener('click', closeCart);
}

initCart()