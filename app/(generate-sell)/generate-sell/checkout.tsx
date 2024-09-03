import axios from 'axios';

// Use environment variable for the API URL
const apiUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export async function sendCheckoutPostRequest(topic: string, target_audience: string): Promise<string> {
  const url: string = `${apiUrl}/api/create-checkout-session-sell`;
  try {
    const response = await axios.post(
      url,
      {
        'topic': topic,
        'target_audience': target_audience
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response.data);
    return response.data.redirect_url;
  } catch (error) {
    throw new Error('Failed to fetch data from the API');
  }
}
