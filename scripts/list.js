function navtabChange() {
  var listView = document.getElementById("list-view");
  var mapView = document.getElementById("map-view");

  // Get the current page URL
  var currentUrl = window.location.hash;
  if (currentUrl === "#list-view" || currentUrl === "") {
    listView.style.display = "flex";
    mapView.style.display = "none";
  } else {
    listView.style.display = "none";
    mapView.style.display = "block";
  }

  // Select all nav links
  var navLinks = document.querySelectorAll(".nav-link");

  // Iterate through each nav link and check if its href matches the current URL
  navLinks.forEach(function (navLink, index) {
    var navLinkUrl = navLink.getAttribute("href");
    if (currentUrl === "" && index === 0) {
      navLink.classList.add("active");
      return;
    }
    if (currentUrl.indexOf(navLinkUrl) !== -1) {
      // Compare the href of the nav link with the current URL
      // Add the "active" class to the matching nav link
      navLink.classList.add("active");
    } else {
      // Remove the "active" class from other nav links
      navLink.classList.remove("active");
    }
  });
}
document.addEventListener("DOMContentLoaded", navtabChange);

window.addEventListener("hashchange", navtabChange);
