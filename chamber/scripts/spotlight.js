fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => {
        const spotlightContainer = document.getElementById("spotlight-cards");

        // Filter for Gold and Silver members
        const spotlightMembers = data.filter(
            (member) => member.membership === "Gold" || member.membership === "Silver"
        );

        // Randomly select two members
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
    })
    .catch((error) => console.error("Error fetching members:", error));
