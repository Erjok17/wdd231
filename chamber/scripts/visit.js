document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDifference = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} day${daysDifference === 1 ? '' : 's'} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentVisit);
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  });

