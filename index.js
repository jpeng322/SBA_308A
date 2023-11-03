// import axios from 'axios';

// const axios = require('axios');
const meal = document.getElementById("meal")
const mealButton = document.querySelector("button")


// mealButton.addEventListener("click", async () => {
//     console.log(meal.value)
//     const options = {
//         method: "GET",
//         url: "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition",
//         params: {
//           query: meal.value,
//         },
//         headers: {
//           "X-RapidAPI-Key": "6a627a9ed8msh2bb20f864871adcp1e222ajsnff6215037e1c",
//           "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
//         },
//       };
      
//       try {
//         const response = await axios.request(options);
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
// })


const mealList = [
    {
        "name": "hotdog",
        "calories": 325.4,
        "serving_size_g": 100,
        "fat_total_g": 29.7,
        "fat_saturated_g": 11.6,
        "protein_g": 11.7,
        "sodium_mg": 836,
        "potassium_mg": 137,
        "cholesterol_mg": 57,
        "carbohydrates_total_g": 2.7,
        "fiber_g": 0,
        "sugar_g": 1.3
    },
    {
        "name": "cheese",
        "calories": 393.9,
        "serving_size_g": 100,
        "fat_total_g": 33,
        "fat_saturated_g": 18.9,
        "protein_g": 22.7,
        "sodium_mg": 661,
        "potassium_mg": 459,
        "cholesterol_mg": 100,
        "carbohydrates_total_g": 3.2,
        "fiber_g": 0,
        "sugar_g": 0.5
    },
    {
        "name": "ramen",
        "calories": 87.9,
        "serving_size_g": 100,
        "fat_total_g": 2.4,
        "fat_saturated_g": 0.6,
        "protein_g": 6.5,
        "sodium_mg": 203,
        "potassium_mg": 71,
        "cholesterol_mg": 34,
        "carbohydrates_total_g": 9.9,
        "fiber_g": 0.6,
        "sugar_g": 0.8
    }
]