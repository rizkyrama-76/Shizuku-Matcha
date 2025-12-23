// hamburger menu toggle active
var navbarNav = document.querySelector(".navbar-nav");
var hamburger = document.getElementById("hamburger-menu");

// ketika hamburger menu di klik
hamburger.onclick = function () {
  if (navbarNav.className.indexOf("active") === -1) {
    navbarNav.className += " active";
  } else {
    navbarNav.className = navbarNav.className.replace(" active", "");
  }
};

// === SEARCH FORM (AUTO DISABLE IF DELETED) ===
var searchForm = document.querySelector(".search-form");
var searchBox = document.getElementById("search-box");
var searchButton = document.getElementById("search-button");

// jalankan hanya kalau search button ADA
if (searchButton && searchForm && searchBox) {
  searchButton.onclick = function (e) {
    if (searchForm.className.indexOf("active") === -1) {
      searchForm.className += " active";
    } else {
      searchForm.className = searchForm.className.replace(" active", "");
    }
    searchBox.focus();
    e.preventDefault();
  };
}

// Toggle class active untuk shopping cart
var shoppingCart = document.querySelector(".shopping-cart");
var shoppingBtn = document.getElementById("shopping-cart-button");

shoppingBtn.onclick = function (e) {
  if (shoppingCart.className.indexOf("active") === -1) {
    shoppingCart.className += " active";
  } else {
    shoppingCart.className = shoppingCart.className.replace(" active", "");
  }
  e.preventDefault();
};

// TUTUP SEMUA KETIKA KLIK DI LUAR
document.onclick = function (e) {
  // tutup navbar
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.className = navbarNav.className.replace(" active", "");
  }

  // tutup search form (jalan hanya kalau searchButton ada)
  if (searchButton && searchForm) {
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.className = searchForm.className.replace(" active", "");
    }
  }

  // tutup shopping cart
  if (!shoppingBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.className = shoppingCart.className.replace(" active", "");
  }
};

const modal = document.getElementById("item-detail-modal");
const closeModal = document.getElementById("modal-close");

// tombol X
closeModal.onclick = (e) => {
  modal.style.display = "none";
  e.preventDefault();
};

// klik area luar
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
