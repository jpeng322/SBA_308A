// import axios from 'axios';
import { clear, singleMacrosDiv, totalMacrosDiv } from "./functions.js";
// const axios = require('axios');
// const meal = document.getElementById("meal");
const mealButton = document.querySelector("button");
const foodInformation = document.querySelector(".food-information");
foodInformation.style.alignItems = "center";
foodInformation.style.marginTop = "2rem";
const foodImage = document.querySelector(".food-image");
foodImage.style.width = "500px";

mealButton.addEventListener("click", async () => {
  clear();
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
    const mealList = response.data;
    if (!mealList.length) {
      const errorText = document.createElement("h1");
      errorText.textContent =
        "The food you have enter could not be found. Please submit another food!";
      foodInformation.append(errorText);

      const errorImage = document.createElement("img");
      errorImage.src = "../SBA_308A/images/no-food.png";
      errorImage.style.width = "400px";
      foodInformation.append(errorImage);
      foodInformation.style.alignItems = "center";
    } else if (mealList.length === 1) {
      foodInformation.style.alignItems = null;
      totalMacrosDiv(mealList, meal.value);
    } else {
      foodInformation.style.alignItems = null;
      totalMacrosDiv(mealList);
      singleMacrosDiv(mealList);
    }
    meal.value = "";
  } catch (error) {
    console.error(error);
  }
});
