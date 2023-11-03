// import axios from 'axios';

// const axios = require('axios');
const meal = document.getElementById("meal")
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
} catch (error) {
  console.error(error);
}
