// Load JSON Data and Render Cards
async function loadDirectory() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const directory = document.getElementById('directory');

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
}




// Footer Updates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Set Timestamp for Form Submission
document.getElementById("timestamp").value = new Date().toISOString();

// Toggle Navigation Menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.querySelector(".navigation").classList.toggle("show");
});
