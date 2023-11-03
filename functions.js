const meal = document.getElementById("meal");

const foodInformation = document.querySelector(".food-information");

export function clear() {
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

  container.append(foodName);
  container.append(foodCalories);
  container.append(macroDivsContainer);
}
export async function singleMacrosDiv(mealList) {
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

export function totalMacrosDiv(mealList) {
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
