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

    /*** 🟢 DIRECTORY JSON DATA LOADING 🟢 ***/
    async function loadDirectory() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) throw new Error("Failed to load directory data");
            const members = await response.json();
            const directory = document.getElementById('directory');

            if (directory) {
                directory.innerHTML = ""; // Clear previous content
                members.forEach(member => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <img src="${member.image}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <p>${member.address}</p>
                        <p>Phone: ${member.phone}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                    `;
                    directory.appendChild(card);
                });
            } else {
                console.error("Directory element not found.");
            }
        } catch (error) {
            console.error("Error loading directory:", error);
        }
    }

    // Load directory data if the element exists on the page
    if (document.getElementById('directory')) {
        loadDirectory();
    }

});


  /*** 🟢 DISCOVER JSON DATA LOADING 🟢 ***/
  async function loadDiscoverData() {
    try {
        const response = await fetch('data/members2.json');
        if (!response.ok) throw new Error("Failed to load discover data");
        const members = await response.json();
        const discoverSection = document.getElementById('discover');

        if (discoverSection) {
            discoverSection.innerHTML = ""; // Clear previous content
            members.forEach(member => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.description}</p>
                    <p><strong>Location:</strong> ${member.location}</p>
                    <p><strong>Category:</strong> ${member.category}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;
                discoverSection.appendChild(card);
            });
        } else {
            console.error("Discover section not found.");
        }
    } catch (error) {
        console.error("Error loading discover data:", error);
    }
}

// Load discover data if the element exists on the page
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById('discover')) {
        loadDiscoverData();
    }
});

  

