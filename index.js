// import axios from 'axios';

// const axios = require('axios');
const meal = document.getElementById("meal");
const mealButton = document.querySelector("button");
const foodInformation = document.querySelector(".food-information");

mealButton.addEventListener("click", async () => {
  clear()
  const options = {
    method: "GET",
    url: "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",
    params: {
      query: meal.value,
    },
    headers: {
      "X-RapidAPI-Key": "6a627a9ed8msh2bb20f864871adcp1e222ajsnff6215037e1c",
      "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    const mealList = response.data;
    totalMacrosDiv(mealList);
    singleMacrosDiv(mealList);
  } catch (error) {
    console.error(error);
  }
});

// const mealList = [
//   {
//     name: "hotdog",
//     calories: 325.4,
//     serving_size_g: 100,
//     fat_total_g: 29.7,
//     fat_saturated_g: 11.6,
//     protein_g: 11.7,
//     sodium_mg: 836,
//     potassium_mg: 137,
//     cholesterol_mg: 57,
//     carbohydrates_total_g: 2.7,
//     fiber_g: 0,
//     sugar_g: 1.3,
//   },
//   {
//     name: "cheese",
//     calories: 393.9,
//     serving_size_g: 100,
//     fat_total_g: 33,
//     fat_saturated_g: 18.9,
//     protein_g: 22.7,
//     sodium_mg: 661,
//     potassium_mg: 459,
//     cholesterol_mg: 100,
//     carbohydrates_total_g: 3.2,
//     fiber_g: 0,
//     sugar_g: 0.5,
//   },
//   {
//     name: "ramen",
//     calories: 87.9,
//     serving_size_g: 100,
//     fat_total_g: 2.4,
//     fat_saturated_g: 0.6,
//     protein_g: 6.5,
//     sodium_mg: 203,
//     potassium_mg: 71,
//     cholesterol_mg: 34,
//     carbohydrates_total_g: 9.9,
//     fiber_g: 0.6,
//     sugar_g: 0.8,
//   },
// ];

// class Food{
//     constructor() {

//     }
// }

const body = document.querySelector("body");
console.log(body);

function clear() {
  foodInformation.innerHTML = "";
}
function round(val) {
  return Math.round(parseInt(val));
}

function createFoodDivs(
  container,
  name = "",
  calories,
  carbs,
  protein,
  fats,
  isTotal = false
) {
  const foodName = document.createElement("h1");
  foodName.className = "name";
  foodName.textContent = name;

  const infoArray = [
    // [calories, "Calories"],
    [carbs, "Carbs", "../SBA_308A/images/carbs.png"],
    [protein, "Protein", "../SBA_308A/images/protein.png"],
    [fats, "Fats", "../SBA_308A/images/fats.png"],
  ];
  const macroDivsContainer = document.createElement("div");
  macroDivsContainer.className = "macro-div-container";
  for (let info of infoArray) {
    const macroDiv = document.createElement("div");
    const macroElement = document.createElement("p");
    macroElement.className = info[1].toLowerCase();
    // const hasGrams = info[1] === "Calories" ? "" : "g";
    macroElement.textContent = round(info[0]) + ` g ${info[1]}`;

    macroDiv.append(macroElement);
    if (isTotal) {
      const macroImage = document.createElement("img");
      macroImage.src = info[2];
      macroDiv.append(macroImage);
      macroDiv.className = "macro-div";
    }

    macroDivsContainer.append(macroDiv);
  }

  const foodCalories = document.createElement("h2");
  foodCalories.className = "calories";
  foodCalories.textContent = round(calories) + " Calories";

  //   const foodCarbs = document.createElement("p");
  //   foodCarbs.className = "carbs";
  //   foodCarbs.textContent = round(carbs) + "g Carbs";

  //   const foodProtein = document.createElement("p");
  //   foodProtein.className = "protein";
  //   foodProtein.textContent = round(protein) + " g Protein";
  //   const foodFats = document.createElement("p");
  //   foodFats.className = "fats";
  //   foodFats.textContent = round(fats) + " g Fats";

  //   macroDiv.append(foodCarbs);
  //   macroDiv.append(foodProtein);
  //   macroDiv.append(foodFats);

  container.append(foodName);
  container.append(foodCalories);
  container.append(macroDivsContainer);

  console.log(container);
}
async function singleMacrosDiv(mealList) {
  console.log(mealList);
  const foodContainer = document.createElement("div");
  foodContainer.className = "all-single-macro-container";
  for (let food of mealList) {
    console.log(food.name);
    const macrosContainer = document.createElement("div");
    macrosContainer.className = "single-macro-container";
    await createFoodDivs(
      macrosContainer,
      food.name,
      food.calories,
      food.carbohydrates_total_g,
      food.protein_g,
      food.fat_total_g
    );
    console.log(foodContainer);
    foodContainer.append(macrosContainer);
  }

  foodInformation.append(foodContainer);
}

function totalMacrosDiv(mealList) {
  let totalCalories = 0;
  let totalProtein = 0;
  let totalFats = 0;
  let totalCarbs = 0;
  for (let food of mealList) {
    totalCalories += food.calories;
    totalCarbs += food.carbohydrates_total_g;
    totalProtein += food.protein_g;
    totalFats += food.fat_total_g;
  }
  const foodContainer = document.createElement("div");
  foodContainer.className = "total-macro-container";
  createFoodDivs(
    foodContainer,
    meal.value,
    round(totalCalories),
    round(totalCarbs),
    round(totalProtein),
    round(totalFats),
    true
  );
  foodInformation.append(foodContainer);
}

// totalMacrosDiv(mealList);
// singleMacrosDiv(mealList);
