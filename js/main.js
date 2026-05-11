// Load header and footer
function loadComponents() {
  fetch('/components/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      initNavigation();
      initDarkMode();
      initMobileMenu();
    });
  
  fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
}

// Navigation functions (showAllTools, showCategoriesView, search, etc.)
function initNavigation() {
  // Same as your current index.html navigation logic
  document.getElementById("navAllTools")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = '/tools/all-tools.html';
  });
  document.getElementById("navCategories")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = '/categories.html';
  });
}

function initDarkMode() { /* your dark mode code */ }
function initMobileMenu() { /* your mobile menu code */ }

loadComponents();
