import axios from 'axios';

interface PreviewResponse {
  id: string;
}

// Use environment variable for the API URL
const apiUrl: string = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export async function sendPreviewPostRequest(topic: string, target_audience: string): Promise<PreviewResponse> {
  const url: string = `${apiUrl}/api/create_ebook_preview`;
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
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the API' + error);
  }
}
