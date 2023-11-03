// import axios from 'axios';
import { clear, singleMacrosDiv, totalMacrosDiv } from "./functions.js";
// const axios = require('axios');
// const meal = document.getElementById("meal");
const mealButton = document.querySelector("button");
// const foodInformation = document.querySelector(".food-information");

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
      console.log("no food");
    } else {
      totalMacrosDiv(mealList);
      singleMacrosDiv(mealList);
    }
  } catch (error) {
    console.error(error);
  }
});
