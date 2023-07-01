// Function to fetch JSON data and update spotlight information
function updateSpotlight() {
    fetch('../lesson09/data.json')
      .then(response => response.json())
      .then(data => {
        // Filter companies with gold and silver membership
        const filteredCompanies = data.company.filter(company =>
          company.membershipLevel === 'Gold Membership' || company.membershipLevel === 'Silver Membership'
        );

        // Shuffle the filtered companies array to get a random order
        shuffleArray(filteredCompanies);

        // Update spotlight information for the first three companies
        const spotlights = ['spotlight1', 'spotlight2', 'spotlight3'];
        for (let i = 0; i < 3; i++) {
          const company = filteredCompanies[i];
          const spotlightId = spotlights[i];

          // Update spotlight information
          document.getElementById(`${spotlightId}-title`).textContent = company.name;
          document.getElementById(`${spotlightId}-image`).src = company.imageurl;
          document.getElementById(`${spotlightId}-grade`).textContent = `Membership Level: ${company.membershipLevel}`;
        //   document.getElementById(`${spotlightId}-website`).textContent = `Website: ${company.website}`;
          document.getElementById(`${spotlightId}-phone`).textContent = `Phone: ${company.phoneNumber}`;
        }
      });
  }

  // Function to shuffle an array using the Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Initial update when the page loads
  updateSpotlight();

  // Update spotlight information every 5 seconds
  setInterval(updateSpotlight, 5000);
