const axios = require('axios');


export async function getUser() {
    try {
      const response = await axios.get('https://gorest.co.in/public-api/users?access-token=7GTrzq25BmvrJO4t2Hhhr96kkmEVZs7YFV_G');
      return response.data.result;
    } catch (error) {
      console.error(error);
    }
  }