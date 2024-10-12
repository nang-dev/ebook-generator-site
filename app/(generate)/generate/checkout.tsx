import axios from 'axios';

// Use environment variable for the API URL
const apiUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export interface CheckoutRequestData {
  topic: string;
  target_audience: string;
  type: 'generate' | 'generate-sell';
  price?: number;
  currency?: string;
}

export async function sendCheckoutPostRequest(data: CheckoutRequestData): Promise<string> {
  const url: string = `${apiUrl}/api/create-checkout-session`;
  try {
    const response = await axios.post(
      url,
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Checkout response:', response.data);
    return response.data.redirect_url;
  } catch (error) {
    console.error('Checkout error:', error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(`API error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
    }
    throw new Error('Failed to fetch data from the API');
  }
}
