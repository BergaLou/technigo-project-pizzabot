// Start here

// Step 1 - Welcome and introduction
alert(`Welcome to our Nilsbergs Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt(`What is your name?`);
alert(`Hi ${userName}! Let's start your order.`);

// Step 2 - Food choice
let subFoodName = "";
let foodChoice = "";

while (foodChoice !== "1" && foodChoice !== "2" && foodChoice !== "3") {
  foodChoice = prompt(`What would you like to order? 
  1. Pizza
  2. Pasta
  3. Salad
  Please enter the number of your choice.`); 
      
if (foodChoice !== "1" && foodChoice !== "2" && foodChoice !== "3") {
  alert("Invalid choice. Please enter 1, 2, or 3.");
  }
}

// Step 3 - Subtype choice
//Pizza choice
if (foodChoice === "1") {
  alert("Great choice! Let's customize your pizza.");
    
  let pizzaType = "";
    
while (pizzaType !== "1" && pizzaType !== "2" && pizzaType !== "3") {
  pizzaType = prompt(`What type of pizza would you like?
  1. Margherita
  2. Hawaiian
  3. Nilsbergs Special
  Please enter the number of your choice.`);

if (pizzaType === "1") {
  subFoodName = "Pizza Margherita"
  alert("Margherita, classic choice! Let's make a choice of size.");
  } else if (pizzaType === "2") {
  subFoodName = "Pizza Hawaiian"
  alert("Hawaiian, sweet and savory! Let's make a choice of size.");
  } else if (pizzaType === "3") {
  subFoodName = "Pizza Nilsbergs Special"
  alert("Nilsbergs Special, our signature pizza! Let's make a choice of size.");
  }
  else {
    alert("Sorry, that's not on the menu. Please refresh and choose 1, 2 or 3.");
  }
} 

//Pasta choice
} else if (foodChoice === "2") {
  alert("Pasta it is! Let's choose your sauce.");

  let pastaType = "";


while (pastaType !== "1" && pastaType !== "2" && pastaType !== "3") {

  pastaType = prompt(`What type of pasta would you like?
  1. Spaghetti Bolognese
  2. Fettuccine Alfredo
  3. Penne Arrabbiata
  Please enter the number of your choice.`);

if (pastaType === "1") {
    subFoodName = "Spaghetti Bolognese"
    alert("Spaghetti Bolognese, a classic! Let's choose your size.");
  } else if (pastaType === "2") {
    subFoodName = "Fettuccine Alfredo"
    alert("Fettuccine Alfredo, creamy and delicious! Let's choose your size.");
  } else if (pastaType === "3") {
    subFoodName = "Penne Arrabbiata"
    alert("Penne Arrabbiata, spicy and flavorful! Let's choose your size.");
  }
}

//Salad choice
} else if (foodChoice === "3") { 
  alert("Salad, healthy choice! Let's pick your toppings.");

  let saladType = "";

while (saladType !== "1" && saladType !== "2" && saladType !== "3") {

  saladType = prompt(`What type of salad would you like?
  1. Caesar Salad
  2. Greek Salad
  3. Garden Salad
  Please enter the number of your choice.`);

if (saladType === "1") {
  subFoodName = "Caesar Salad"
  alert("Ceasar Salad, classic and tasty! Let's choose your size.");
  } else if (saladType === "2") {
  subFoodName = "Greek Salad"
  alert("Greek Salad, fresh and flavorful! Let's choose your size.");
  } else if (saladType === "3") {
  subFoodName = "Garden Salad"
  alert("Garden Salad, light and healthy! Let's choose your size.");
  }
  }
}

// Step 4 - Age
//check if the user is ordering for a child or an adult and set the price accordingly
let userAge = "";
userAge = prompt("Is this food for a child or an adult? Please enter your age in numbers:.");

while (userAge === "" || isNaN(userAge)) {
  userAge = prompt("please enter your age in numbers:");
  if (userAge === "" || isNaN(userAge)) {
    alert("Invalid input. Please enter a valid age in numbers.");
  }
}

let price = ""
let size = ""

if (userAge >= 18) {
  size = "One adult sized";
  price = "$12.99";
} else {
  size = "One child sized";
  price = "$7.99";
}

alert(`${size} ${subFoodName} will be prepared for you. The price is ${price}.`);

// Step 5 - Order confirmation
// Confirm the order with the user and show a final message based on their choice
let confirmation = ""; 
while (confirmation !== "1" && confirmation !== "2") {
  confirmation = prompt(`One ${size} ${subFoodName} for ${price}. 
  Do you want confirm your order?
  1. Yes
  2. No`);
  
  // If the user types something else, we show an error message and ask again
  if (confirmation !== "1" && confirmation !== "2") {
    alert("Invalid choice. Please enter 1 for Yes or 2 for No.");
  }
}

  // Final messages based on the user's confirmed choice
  if (confirmation === "1") {
  alert(`Thank you for your order, ${userName}! Your meal is being prepared.`); 
  } else  {
  alert(`Order cancelled. Welcome back another time, ${userName}!`);
}