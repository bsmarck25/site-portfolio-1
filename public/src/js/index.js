let toggleNav = document.getElementById('toggleNav');
let pageNav = document.getElementById('pageNav');
toggleNav.addEventListener('click', function() {
    if (pageNav.style.display === "none") {
        pageNav.style.display = "block";
      } else {
        pageNav.style.display = "none";
      }
})