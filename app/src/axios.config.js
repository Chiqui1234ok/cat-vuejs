const axios = require('axios');
import findApiUrl from '@/helpers/findApiUrl';

const apiURL = findApiUrl();
console.log('apiURL', apiURL);

const options = {
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080'
  }
};

let instance = axios.create(options);

export default instance;