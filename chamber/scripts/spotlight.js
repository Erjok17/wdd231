document.addEventListener("DOMContentLoaded", async function () {
    const spotlightContainer = document.getElementById("spotlight-cards");

    if (!spotlightContainer) {
        console.error("Spotlight container not found.");
        return; // Stop execution if the element is missing
    }

    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Failed to load members data");

        const data = await response.json();

        // Filter for Gold and Silver members
        const spotlightMembers = data.filter(
            (member) => member.membership === "Gold" || member.membership === "Silver"
        );

        if (spotlightMembers.length === 0) {
            spotlightContainer.innerHTML = "<p>No spotlight members available.</p>";
            return;
        }

        // Randomly select up to two members
        const selectedMembers = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 2);

        selectedMembers.forEach((member) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="${member.image}" alt="${member.name}" style="max-width: 100%;">
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            `;

            spotlightContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching members:", error);
        spotlightContainer.innerHTML = "<p>Unable to load spotlight members.</p>";
    }
});
