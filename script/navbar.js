document.addEventListener("DOMContentLoaded", function () {
  // Get the navbar element
  var navbar = document.querySelector(".navbar");

  // Function to handle clicks outside the navbar
  function collapseNavbar(e) {
    if (!navbar.contains(e.target)) {
      var navbarToggler = document.querySelector(".navbar-toggler");
      var collapseTarget = document.querySelector(
        navbarToggler.getAttribute("data-bs-target")
      );

      if (collapseTarget.classList.contains("show")) {
        collapseTarget.classList.remove("show");
        navbarToggler.classList.add("collapsed");
      }
    }
  }

  // Attach click event to the document
  document.addEventListener("click", collapseNavbar);

  // Function to close the navbar when a menu item is clicked
  function closeNavbarOnClick(e) {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var collapseTarget = document.querySelector(
      navbarToggler.getAttribute("data-bs-target")
    );

    // Check if the clicked element is a menu item or a link within the navbar
    if (e.target.classList.contains("nav-link") || e.target.closest(".navbar")) {
      collapseTarget.classList.remove("show");
      navbarToggler.classList.add("collapsed");
    }
  }

  // Attach click event to the document to close the navbar when a menu item is clicked
  document.addEventListener("click", closeNavbarOnClick);
});
