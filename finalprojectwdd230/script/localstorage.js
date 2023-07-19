// Function to update the drink counter card
function updateDrinkCounter() {
    const drinkCounterCard = document.getElementById('drink-counter-card');
    const drinkCounter = document.getElementById('drink-counter');
    let totalSubmissions = localStorage.getItem('totalSubmissions');
    totalSubmissions = totalSubmissions ? parseInt(totalSubmissions) : 0;
    drinkCounter.textContent = totalSubmissions;
    drinkCounterCard.style.display = 'block';
  }

  // Function to save the total number of submissions to localStorage
  function saveDrinkSubmission() {
    let totalSubmissions = localStorage.getItem('totalSubmissions');
    totalSubmissions = totalSubmissions ? parseInt(totalSubmissions) : 0;
    totalSubmissions++;
    localStorage.setItem('totalSubmissions', totalSubmissions);
    updateDrinkCounter();
  }

  // Function to calculate the total nutrition values
  // ... (existing function code) ...

  // Function to update the output area with the selected fruit order and nutrition values
  // ... (existing function code) ...

  // Fetch the JSON file and populate the select elements with the available fruits
  // ... (existing fetch code) ...

  // Add event listener to the form submit event
//   const form = document.getElementById('fruit-order-form');
  form.addEventListener('submit', (event) => {
    updateOutputArea(event);
    saveDrinkSubmission();
  });

  // Load the drink counter on page load
  window.addEventListener('load', () => {
    updateDrinkCounter();
  });