import { ApiResponse } from "./model";
import { SamplePhotosReponse } from "./sample-data";
const url = "https://api.unsplash.com";
const clientId = "uyyAprKPMpMz6XnbMSBKY902IPewKf5f0xVSQLes8Bo";

export const getPhotos = async (
  keyword: string,
  mock: boolean
): Promise<ApiResponse> => {
  if (mock) {
    return Promise.resolve(SamplePhotosReponse());
  }
  const response = await fetch(`${url}/search/photos?query=${keyword}`, {
    headers: {
      Authorization: `Client-ID ${clientId}`, // Corrected header key and removed the extra curly brace
    },
  });
  return response.json();
};
