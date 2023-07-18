// Fetch the JSON file and populate the select elements with the available fruits
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
.then(response => response.json())
.then(data => {
  const fruits = data.map(fruit => fruit.name);
  const selectElements = document.querySelectorAll('select');
  
  selectElements.forEach(select => {
    fruits.forEach(fruit => {
      const option = document.createElement('option');
      option.value = fruit;
      option.text = fruit;
      select.appendChild(option);
    });
  });
});










    // Function to calculate the total nutrition values
    function calculateTotalNutrition(fruitSelections) {
      const fruitData = JSON.parse(localStorage.getItem('fruitData'));
      let totalCarbohydrates = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let totalSugar = 0;
      let totalCalories = 0;

      fruitSelections.forEach(fruit => {
        const fruitInfo = fruitData.find(item => item.name === fruit);
        if (fruitInfo) {
          totalCarbohydrates += fruitInfo.nutritions.carbohydrates;
          totalProtein += fruitInfo.nutritions.protein;
          totalFat += fruitInfo.nutritions.fat;
          totalSugar += fruitInfo.nutritions.sugar;
          totalCalories += fruitInfo.nutritions.calories;
        }
      });

      return {
        carbohydrates: totalCarbohydrates.toFixed(2),
        protein: totalProtein.toFixed(2),
        fat: totalFat.toFixed(2),
        sugar: totalSugar.toFixed(2),
        calories: totalCalories.toFixed(2)
      };
    }

    // Function to update the output area with the selected fruit order and nutrition values
    function updateOutputArea(event) {
      event.preventDefault();

      const form = document.getElementById('fruit-order-form');
      const firstName = form.elements['first-name'].value;
      const email = form.elements['email'].value;
      const phoneNumber = form.elements['phone-number'].value;
      const fruit1 = form.elements['fruit-1'].value;
      const fruit2 = form.elements['fruit-2'].value;
      const fruit3 = form.elements['fruit-3'].value;
      const specialInstructions = form.elements['special-instructions'].value;

      const fruitSelections = [fruit1, fruit2, fruit3];
      const totalNutrition = calculateTotalNutrition(fruitSelections);

      const currentDate = new Date();
      const orderDate = currentDate.toDateString();

      const outputArea = document.getElementById('output-area');
      outputArea.innerHTML = `
        <h2>Order Summary</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Order Date:</strong> ${orderDate}</p>
        <p><strong>Fruit 1:</strong> ${fruit1}</p>
        <p><strong>Fruit 2:</strong> ${fruit2}</p>
        <p><strong>Fruit 3:</strong> ${fruit3}</p>
        <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
        <h2>Total Nutrition</h2>
        <p><strong>Carbohydrates:</strong> ${totalNutrition.carbohydrates} g</p>
        <p><strong>Protein:</strong> ${totalNutrition.protein} g</p>
        <p><strong>Fat:</strong> ${totalNutrition.fat} g</p>
        <p><strong>Sugar:</strong> ${totalNutrition.sugar} g</p>
        <p><strong>Calories:</strong> ${totalNutrition.calories} cal</p>
      `;
    }

    // Fetch the JSON file and populate the select elements with the available fruits
    fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
      .then(response => response.json())
      .then(data => {
        const fruits = data.map(fruit => fruit.name);
        const selectElements = document.querySelectorAll('select');

        selectElements.forEach(select => {
          fruits.forEach(fruit => {
            const option = document.createElement('option');
            option.value = fruit;
            option.text = fruit;
            select.appendChild(option);
          });
        });

        // Store the fruit data in localStorage for easy access during calculation
        localStorage.setItem('fruitData', JSON.stringify(data));
      });

    // Add event listener to the form submit event
    const form = document.getElementById('fruit-order-form');
    form.addEventListener('submit', updateOutputArea);
 