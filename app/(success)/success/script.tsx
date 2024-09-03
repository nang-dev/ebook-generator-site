// Define the URL of your backend API
const url: string = 'http://127.0.0.1:8000/health';

import axios from 'axios';

export async function fetchDataFromApi(): Promise<string> {
  try {
    const response = await axios.get(url, {
      headers: {
        'accept': 'application/json'
      }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the API');
  }
}