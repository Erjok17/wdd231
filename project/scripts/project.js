// Ensure JavaScript runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    /*** 🟢 HAMBURGER MENU FUNCTIONALITY 🟢 ***/
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("active"); // Toggle visibility
        });
    } else {
        console.error("Menu toggle button or navigation not found.");
    }

    /*** 🟢 FOOTER YEAR & LAST MODIFIED UPDATE 🟢 ***/
    const yearEl = document.getElementById("year");
    const lastModifiedEl = document.getElementById("last-modified");

    if (yearEl) yearEl.textContent = new Date().getFullYear();
    if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;

    /*** 🟢 LOAD FEATURED MEMBERS FROM JSON 🟢 ***/
    async function loadFeaturedMembers() {
        try {
            const response = await fetch('data/projectmem.json'); // Fetch JSON data
            if (!response.ok) throw new Error("Failed to load featured members data");

            const members = await response.json();
            const featuredContainer = document.getElementById('Featured-cards');

            if (featuredContainer) {
                featuredContainer.innerHTML = ""; // Clear previous content

                members.forEach(member => {
                    const card = document.createElement('div');
                    card.className = 'card';

                    card.innerHTML = `
                        <img src="${member.image}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <p><strong>Role:</strong> ${member.role}</p>
                        <p><strong>Location:</strong> ${member.address}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    `;

                    featuredContainer.appendChild(card);
                });
            } else {
                console.error("Featured section not found.");
            }
        } catch (error) {
            console.error("Error loading featured members:", error);
        }
    }

    // Load members if the Featured section exists
    if (document.getElementById('Featured-cards')) {
        loadFeaturedMembers();
    }
});



// thank you part 

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