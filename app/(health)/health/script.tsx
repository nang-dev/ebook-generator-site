import axios from 'axios';

// Use environment variable for the API URL
const apiUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export async function fetchDataFromApi(): Promise<string> {
  const url: string = `${apiUrl}/api/health`;
  console.log(url)
  try {
    const response = await axios.get(url, {
      headers: {
        'accept': 'application/json'
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the API');
  }
}
